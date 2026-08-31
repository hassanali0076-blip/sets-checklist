# Public SETS checklist maintenance

Read README.md before editing. This repository is public.

- checklist.json is the shared public source. CHECKLIST.md is generated.
- Keep IDs stable and preserve every unrelated record and assignee.
- Keep Josh's assignments unchanged unless Aadam explicitly changes them.
- Claude/Grok work is assigned to Codex; historical reviewer credits are not owners.
- Keep local, staging, live and historical status separate. A record edit is not a new audit.
- Do not copy private SETS evidence, user examples, paths, service IDs, secrets or access details.
- Run node scripts/check.mjs --write and node scripts/check.mjs before committing.
- Publishing the checklist does not authorize releasing the SETS app or changing PowerSync.
- Public pushes require user authority. No force pushes.
