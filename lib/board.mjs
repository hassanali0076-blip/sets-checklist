export const statuses = {
  issue: 'Known issue',
  next_release: 'Next release',
  testing: 'Needs checking',
  planned: 'Planned',
  active: 'In progress',
  resolved: 'Resolved live',
  history: 'Earlier sign-off',
};
function exact(value, keys) {
  if (
    !value ||
    typeof value !== 'object' ||
    Array.isArray(value) ||
    Object.keys(value).some((k) => !keys.includes(k)) ||
    keys.some((k) => !(k in value))
  )
    throw Error('Invalid record fields');
}
function safe(s) {
  if (
    typeof s !== 'string' ||
    s.length > 4000 ||
    /[a-f0-9]{24,}|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|\.supabase\.co|\.powersync\.|localhost|file:\/\//i.test(s) ||
    /\/Users\/|\/home\/|[\w.+-]+@[\w.-]+\.[a-z]{2,}|sk-[a-zA-Z0-9]{16}|gh[pousr]_[a-zA-Z0-9]+|<script/i.test(
      s,
    )
  )
    throw Error('Invalid or private text');
}
function day(s) {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(s) ||
    !Number.isFinite(Date.parse(s)) ||
    new Date(s).toISOString().slice(0, 10) !== s
  )
    throw Error('Invalid date');
}
export function validateBoard(b) {
  exact(b, [
    'schemaVersion',
    'title',
    'updatedAt',
    'reviewedThrough',
    'release',
    'notes',
    'changes',
    'tasks',
  ]);
  if (
    b.schemaVersion !== 1 ||
    typeof b.updatedAt !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(b.updatedAt) ||
    !Number.isFinite(Date.parse(b.updatedAt)) ||
    new Date(b.updatedAt).toISOString() !==
      b.updatedAt.replace(/(?<!\.\d{3})Z$/, '.000Z') ||
    Date.parse(b.updatedAt) > Date.now() + 300000
  )
    throw Error('Invalid version or timestamp');
  safe(b.title);
  day(b.reviewedThrough);
  exact(b.release, ['web', 'backend', 'next']);
  Object.values(b.release).forEach(safe);
  if (
    !Array.isArray(b.notes) ||
    !Array.isArray(b.changes) ||
    !Array.isArray(b.tasks) ||
    b.tasks.length < 1 ||
    b.tasks.length > 2000
  )
    throw Error('Invalid lists');
  b.notes.forEach(safe);
  b.changes.forEach((c) => {
    exact(c, ['date', 'text']);
    day(c.date);
    safe(c.text);
  });
  const ids = new Set();
  b.tasks.forEach((t) => {
    exact(t, [
      'id',
      'title',
      'area',
      'status',
      'summary',
      'nextStep',
      'updated',
      'assignee',
    ]);
    Object.values(t).forEach(safe);
    day(t.updated);
    if (
      !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id) ||
      ids.has(t.id) ||
      !Object.hasOwn(statuses, t.status) ||
      !['Codex','Josh','You','Fable','Unassigned'].includes(t.assignee) ||
      !t.title.trim() ||
      !t.summary.trim() ||
      !t.nextStep.trim()
    )
      throw Error('Invalid task identity or status');
    ids.add(t.id);
  });
  return b;
}
export function acceptRefresh(current, incoming) {
  validateBoard(incoming);
  if (current && Date.parse(incoming.updatedAt) < Date.parse(current.updatedAt))
    return { board: current, error: true };
  return { board: incoming, error: false };
}
export function filterForHash(tasks, hash) {
  return tasks.find((t) => '#' + t.id === hash)?.status || 'current';
}
export function selectTasks(
  tasks,
  filter = 'current',
  query = '',
  area = 'all',
  assignee = 'all',
) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return tasks
    .filter(
      (t) =>
        (filter === 'all' ||
          (filter === 'current'
            ? t.status !== 'history'
            : t.status === filter)) &&
        (area === 'all' || t.area === area) &&
        (assignee === 'all' || t.assignee === assignee) &&
        words.every((w) =>
          [t.title, t.area, t.assignee, t.summary, t.nextStep]
            .join(' ')
            .toLowerCase()
            .includes(w),
        ),
    )
    .sort(
      (a, b) =>
        Object.keys(statuses).indexOf(a.status) -
        Object.keys(statuses).indexOf(b.status),
    );
}
const md = (s) => s.replace(/[\\`*_{}[\]<>#|]/g, '\\$&').replace(/\n/g, ' ');
export function toMarkdown(b) {
  validateBoard(b);
  return (
    '# ' +
    md(b.title) +
    '\n\nUpdated: ' +
    b.updatedAt +
    ' · Reviewed through ' +
    b.reviewedThrough +
    '\n\n' +
    Object.entries(b.release)
      .map(([k, v]) => '- ' + k + ': ' + md(v))
      .join('\n') +
    '\n\n' +
    b.notes.map((n) => '> ' + md(n)).join('\n\n') +
    '\n\n' +
    Object.entries(statuses)
      .map(
        ([key, label]) =>
          '## ' +
          label +
          '\n\n' +
          b.tasks
            .filter((t) => t.status === key)
            .map(
              (t) =>
                '### ' +
                md(t.title) +
                '\n\nID: ' +
                t.id +
                ' · ' +
                md(t.area) +
                ' · Assigned to ' + md(t.assignee) + ' · Record updated ' +
                t.updated +
                '\n\n' +
                md(t.summary) +
                '\n\nNext: ' +
                md(t.nextStep) +
                '\n',
            )
            .join('\n'),
      )
      .join('\n')
  );
}
