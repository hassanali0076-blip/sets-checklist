# SETS shared checklist

Public, plain-language project status. This repository contains only reviewed
public summaries, not the private SETS app or its technical evidence.

## Updating the checklist

1. Pull the latest main branch. Edit checklist.json, preserving stable task IDs,
   assignees and other contributors' changes.
2. Update updatedAt in UTC and the affected task's updated date. Update
   reviewedThrough only when a review actually took place. Add a short changes entry.
3. Run node scripts/check.mjs --write, then node scripts/check.mjs.
4. Review the public diff for private information. Commit and push only when
   authorized. The website checks this shared source every minute; source caching
   may add a few minutes. Chat messages and local edits do not update the website.

All 146 original records are represented. Earlier sign-offs are history, not new
release verification. Josh's 14 assignments are unchanged. Former Claude and Grok
assignments belong to Codex. You means Aadam. Unassigned means no owner was recorded.

The website is read-only. Only authorized repository contributors can edit data.
App releases, database updates and PowerSync changes need separate approval.

Private technical evidence stays in the private SETS project. Never paste private
paths, account data, service identifiers, credentials or security exploit details.
The automated validator is a backstop, not a replacement for privacy review.
