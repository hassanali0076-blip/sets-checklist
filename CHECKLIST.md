# SETS — shared checklist

Updated: 2026-08-31T03:20:11.753Z · Reviewed through 2026-08-31

- web: The SETS app is unchanged by this checklist publication.
- backend: Staging is prepared; isolated sync and deployment approval remain open.
- next: Gym Environments, Scanner 2.0, sharing and Settings: local candidate, not released.

> All 146 private checklist records are represented by public-safe summaries. Internal diagnostics, account examples and release access details are not published.

> Assigned to is the current owner. Codex owns former Grok and Claude assignments; Josh assignments are unchanged. You means Aadam. Unassigned preserves a missing owner.

> Earlier sign-offs are historical coverage, not a fresh audit or confirmation that an old symptom is impossible today.

> Next release means a local candidate that may still need integration and approval. Needs checking does not mean implemented or released.

> Viewing needs no login. Updating the shared source requires repository write permission or an approved pull request.

## Known issue

### Feedback retention during account deletion

ID: sets-legacy-002 · Critical — fix before release · Assigned to Josh · Record updated 2026-08-31

Account deletion needs a clear, verified policy for feedback and bug-report content.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Multi-category deletion consistency

ID: sets-legacy-012 · Medium — fix next · Assigned to Josh · Record updated 2026-08-31

Deleting several categories needs a clear outcome if part of the operation fails.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Scanner photos are kept with no stated age limit

ID: sets-legacy-014 · Medium — fix next · Assigned to You · Record updated 2026-08-31

Scanner photo retention still needs a product decision and verified enforcement.

Next: The founder’s decision or acceptance is needed. No release action is authorized by this task.

### Single-arm next-set target asks a rep too few

ID: sets-legacy-022 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Single-arm next-set recommendations remain lower than expected; the cause still needs investigation.

Next: Investigate the recorded behavior and validate the next change before release.

## Next release

### Fatigue model: the writer and readers disagree

ID: sets-legacy-010 · Medium — fix next · Assigned to Codex · Record updated 2026-08-31

An existing fatigue-model candidate needs careful integration; it is not a ready-to-release fix.

Next: Reconcile the existing candidate, run the relevant checks and obtain release approval.

### Account-switching safety

ID: sets-legacy-032 · Reviewed — ready to ship · Assigned to Josh · Record updated 2026-08-31

A reviewed candidate improves account-switching safety. It has not been accepted as a completed release here.

Next: Reconcile the existing candidate, run the relevant checks and obtain release approval.

### Folders, workout templates & custom exercises could get messy across two devices

ID: sets-legacy-033 · Reviewed — ready to ship · Assigned to Josh · Record updated 2026-08-31

A reviewed candidate improves consistency when folders, templates and custom exercises change across devices.

Next: Reconcile the existing candidate, run the relevant checks and obtain release approval.

## Needs checking

### Account deletion sync completeness

ID: sets-legacy-003 · Critical — fix before release · Assigned to Josh · Record updated 2026-08-31

Deletion must remain complete after the app reconnects and receives synced data.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Selective deletion data protection

ID: sets-legacy-004 · High — fix before release · Assigned to Josh · Record updated 2026-08-31

Deleting selected data must preserve unrelated workouts that have not finished syncing.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### “Different gym per day” is ignored

ID: sets-legacy-005 · High — fix before release · Assigned to Josh · Record updated 2026-08-31

Each training day should use the equipment available at its assigned gym.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Changing equipment can leave incompatible exercises unchanged

ID: sets-legacy-006 · High — fix before release · Assigned to Josh · Record updated 2026-08-31

Equipment changes should update exercises that no longer fit the available setup.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Superset / Myo-Reps / periodisation / intensity choices are ignored

ID: sets-legacy-007 · High — fix before release · Assigned to Josh · Record updated 2026-08-31

Saved training-method choices need to be honored when generating a program.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Signed-out device data cleanup

ID: sets-legacy-008 · High — fix before release · Assigned to Josh · Record updated 2026-08-31

Signing out must clear account-specific device data safely.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Manual sync recovery correctness

ID: sets-legacy-009 · High — fix before release · Assigned to Josh · Record updated 2026-08-31

Manual recovery should preserve recent edits while syncing is underway.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Session renewal and sync coordination

ID: sets-legacy-013 · Medium — fix next · Assigned to Josh · Record updated 2026-08-31

Authentication renewal and syncing need consistent coordination.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### SET-46: Consolidated Settings and workout controls

ID: consolidated-settings-set-46 · Being worked on & next up · Assigned to Unassigned · Record updated 2026-08-31

The Settings candidate includes equipment-limit explanations and rest after the final warm-up. Cloud-sync and device checks remain open.

Next: Complete separately approved staging, cloud-sync and real-device acceptance before release.

### Resolve safe PowerSync use for the already prepared staging app

ID: powersync-instance-confirmation · Being worked on & next up · Assigned to Unassigned · Record updated 2026-08-31

The staging implementation already exists. A safe isolated sync connection is still needed before its deployment can proceed.

Next: Inspect the existing sync services and staging resources read-only. Resolve any remaining ownership question before requesting approval for a specific change.

## Planned

### Editing a gym doesn't update your existing programs

ID: sets-legacy-029 · Being worked on & next up · Assigned to Josh · Record updated 2026-08-31

Editing equipment at the current gym should update affected programs, not only switching gyms.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Generation and the workout screen disagree about which gym

ID: sets-legacy-030 · Being worked on & next up · Assigned to Josh · Record updated 2026-08-31

Program generation and the workout screen need to use the same assigned gym.

Next: Remains assigned to Josh. Confirm the current implementation and validation needs before any release.

### Stall-Breaker

ID: sets-legacy-034 · Waiting on you · Assigned to You · Record updated 2026-08-31

A progression strategy for genuinely stalled exercises awaits the founder’s remaining decisions.

Next: The founder’s decision or acceptance is needed. No release action is authorized by this task.

### Release approval check

ID: sets-legacy-035 · Waiting on you · Assigned to You · Record updated 2026-08-31

The release approval step remains with the founder. Internal release controls are not published.

Next: The founder’s decision or acceptance is needed. No release action is authorized by this task.

### Open the app once before your next workout

ID: sets-legacy-036 · Waiting on you · Assigned to You · Record updated 2026-08-31

A recorded follow-up asks the founder to open the app so the updated program behavior can be checked.

Next: The founder’s decision or acceptance is needed. No release action is authorized by this task.

### Stall-Breaker rulings (7 decisions) + solo "@0" ruling

ID: sets-legacy-037 · Waiting on you · Assigned to You · Record updated 2026-08-31

Remaining decisions cover stalled progression and effort targets for separately logged arms.

Next: The founder’s decision or acceptance is needed. No release action is authorized by this task.

### Smaller items under watch

ID: sets-legacy-038 · Watching · Assigned to You · Record updated 2026-08-31

Several smaller behavior and device checks remain on the watch list.

Next: The founder’s decision or acceptance is needed. No release action is authorized by this task.

## In progress

### Share a gym with another SETS user

ID: sets-legacy-026 · Being worked on & next up · Assigned to You · Record updated 2026-08-31

Gym sharing is implemented in the local release candidate. Staging and real-device acceptance remain open.

Next: Complete separately approved staging, cloud-sync and real-device acceptance before release.

## Resolved live


## Earlier sign-off

### Generator can add an unsafe or excluded exercise after the safety check

ID: sets-legacy-001 · Critical — fix before release · Assigned to Codex · Record updated 2026-08-31

Exercise exclusions must survive every stage of program generation, including later substitutions.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A high-fatigue profile can’t recover

ID: sets-legacy-011 · Medium — fix next · Assigned to Codex · Record updated 2026-08-31

Earlier work covered recovery from an overly high learned fatigue estimate.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Paid scanner request limits

ID: sets-legacy-015 · Medium — fix next · Assigned to Codex · Record updated 2026-08-31

Earlier work added controls on paid scanner requests and service usage.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Pinch-zoom is disabled everywhere

ID: sets-legacy-016 · UI & accessibility · Assigned to You · Record updated 2026-08-31

The founder chose to keep pinch zoom disabled. This is a recorded decision, not a new implementation.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### SmartVolume loses the next manually authored rep/RIR target

ID: sets-legacy-017 · Additional Codex fixes — outside the original 33 · Assigned to Codex · Record updated 2026-08-31

Earlier work preserved individually authored rep and effort targets when recommendations change.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### ATLAS keeps re-reporting the same repaired recommendation

ID: sets-legacy-018 · Additional Codex fixes — outside the original 33 · Assigned to Codex · Record updated 2026-08-31

Earlier work prevented repeated reporting of a recommendation that had already been repaired.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Switching single-arm tracking on/off can scramble finished sets

ID: sets-legacy-019 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Earlier work kept finished sets intact when changing between combined and per-side tracking.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Lowering the set count hides sets you already logged

ID: sets-legacy-020 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Earlier work prevented a lower planned set count from hiding work already logged.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A set can use another set's rules

ID: sets-legacy-021 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Earlier work addressed set-specific targets and ownership rather than applying another row’s rules.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Slow to concede when you’re genuinely getting weaker

ID: sets-legacy-023 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Earlier work adjusted recommendations during a sustained decline in performance.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Rep ladder stalls at 19 then drops to 13

ID: sets-legacy-024 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Earlier work addressed backward rep targets and stalled progression.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Learning the difficulty of a weight change

ID: sets-legacy-025 · Being worked on & next up · Assigned to Fable · Record updated 2026-08-31

Earlier work improved how the engine learns the difficulty of equipment weight changes.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### The swap "no match" message can't say why

ID: sets-legacy-031 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Earlier work made exercise-swap messages distinguish a missing gym from incomplete equipment setup.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Loads bounce between two weights for weeks

ID: sets-legacy-039 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work addressed repeated back-and-forth recommendations between neighboring weights.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A Quick / template workout advances the wrong program (and its deload)

ID: sets-legacy-040 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept quick and template sessions from advancing an unrelated program.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### The Block-Complete “X” silently restarts your whole block

ID: sets-legacy-041 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work addressed closing the block-complete screen without restarting the training block.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A left-open workout inflates duration & calories

ID: sets-legacy-042 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work addressed inflated duration and calorie estimates when a workout is left open.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A recommendation survives even when its workout didn’t save

ID: sets-legacy-043 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept recommendations consistent with whether a workout was actually saved.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A lighter back-off set can mark a heavier failed set “successful”

ID: sets-legacy-044 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work distinguished lighter back-off performance from success at a heavier weight.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Restore can get stuck “complete” before it finished

ID: sets-legacy-045 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work required restore operations to finish before reporting completion.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Developer diagnostics access controls

ID: sets-legacy-046 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered access controls for internal diagnostics.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### The “this screen isn’t cached” dead-end after an update

ID: sets-legacy-047 · Audit & recent fixes — shipped this campaign · Assigned to Codex · Record updated 2026-08-31

Earlier work addressed an update-related dead end when a screen was unavailable.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### One missing screen while offline deletes the offline app & downloaded videos

ID: sets-legacy-048 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved offline app content and downloaded videos during recovery.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Unsaved edits are only warned about on some exits

ID: sets-legacy-049 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made warnings about unsaved changes consistent across exit paths.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Library deletes a template on one tap, no confirm

ID: sets-legacy-050 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work added a confirmation step before deleting a workout template.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Removing an added exercise can erase logged sets with no consistent undo

ID: sets-legacy-051 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work addressed removal of exercises that already contain logged sets.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Workout logger buttons are unnamed and too small

ID: sets-legacy-052 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work improved workout-control labels and touch targets.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Several main cards can’t be used by keyboard

ID: sets-legacy-053 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered keyboard access to major cards and navigation actions.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### The Rest Timer settings shortcut lands at the top of Settings

ID: sets-legacy-054 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made the rest-timer shortcut open the relevant Settings section.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Unilateral warm-up completion can attach to the wrong side

ID: sets-legacy-055 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept unilateral warm-up completion attached to the correct side.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Status-bar icons don’t follow theme (native app)

ID: sets-legacy-056 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered native status-bar appearance when the app theme changes.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Onboarding can log the wrong final step number

ID: sets-legacy-057 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work corrected onboarding step tracking.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Drop sets / myo-reps lose track of their own rows live

ID: sets-legacy-058 · Audit & recent fixes — shipped this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept special-set rows and their identities consistent during a workout.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Faster app startup (cold-start speed-ups)

ID: sets-legacy-059 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work reduced the amount of work needed when the app first opens.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Single-arm target regression

ID: sets-legacy-060 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work corrected a single-arm target regression.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Affected saved recommendations repaired

ID: sets-legacy-061 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work repaired affected saved recommendations. Individual account details are private.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Build-then-bump progression policy (engine audit phase 1)

ID: sets-legacy-062 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier engine work clarified the policy for building reps before increasing weight.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Targets land inside your written rep range (engine audit phase 0)

ID: sets-legacy-063 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier engine work kept recommendations within the user’s written rep range.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Workout regression cases in the release gate

ID: sets-legacy-064 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work added reported workout cases to release regression coverage.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Exercise classification and history display

ID: sets-legacy-065 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work repaired exercise tracking classification and the resulting history display.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### This master checklist, ranked and complete

ID: sets-legacy-066 · Step 1 — Map everything · Assigned to Unassigned · Record updated 2026-08-31

The original checklist organized work and preserved historical completion records.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Blind-spot sweep of the whole app

ID: sets-legacy-067 · Step 1 — Map everything · Assigned to Unassigned · Record updated 2026-08-31

An earlier app-wide review looked for issues outside the initially reported cases.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Competitor complaint research

ID: sets-legacy-068 · Step 1 — Map everything · Assigned to Unassigned · Record updated 2026-08-31

Earlier research considered common complaints about comparable training apps.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Signing out destroys workouts waiting to upload — and any workout in progress

ID: sets-legacy-069 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work protected active and pending workouts during sign-out.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### App updates force-reload the phone mid-workout

ID: sets-legacy-070 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept app updates from interrupting an active workout.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Phone storage full → sets silently vanish while the app shows them saved

ID: sets-legacy-071 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made storage failures visible instead of reporting unsaved sets as saved.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Un-checking a set to correct it can lose the set entirely

ID: sets-legacy-072 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work protected set data when a completed row is reopened for correction.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Fast second-arm confirm: phone buzzes, nothing logged

ID: sets-legacy-073 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered rapid confirmation of the second side of an exercise.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Correcting a set then tapping Finish throws the correction away

ID: sets-legacy-074 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved a correction made immediately before finishing a workout.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Swapping an exercise mid-workout deletes its logged sets, no warning

ID: sets-legacy-075 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work protected logged sets when swapping exercises mid-workout.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Deleting a set can rewrite the wrong one

ID: sets-legacy-076 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept set deletion attached to the intended row.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Workout summary reorders sets and crosses arms

ID: sets-legacy-077 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept workout-summary ordering and left/right identity consistent.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Your first-ever cloud upload can miss workouts

ID: sets-legacy-078 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work improved completeness of an account’s initial workout sync.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### One storage hiccup deletes the whole local database — including the upload queue

ID: sets-legacy-079 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work protected local workout data and pending uploads during storage recovery.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Editing or deleting an old workout wipes your PR history

ID: sets-legacy-080 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved personal-record history when an old workout is edited or removed.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### PRs quietly shrink as history grows

ID: sets-legacy-081 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept personal records consistent as the history grows.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Reused custom-exercise IDs inherit a dead exercise’s history

ID: sets-legacy-082 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept custom-exercise histories separate when identities change.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Changing your mind on a swap can empty the slot from your program

ID: sets-legacy-083 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work protected a program slot when an exercise swap is canceled.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A weigh-in can overwrite another day’s weigh-in

ID: sets-legacy-084 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept weigh-ins attached to the correct date.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Height in ft/in can corrupt your stored height by a whole foot

ID: sets-legacy-085 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work corrected height conversion and storage for feet-and-inches entry.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Creating a superset can hide completed sets

ID: sets-legacy-086 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept completed sets visible when a superset is created.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Finishing a paused workout inflates duration and calories

ID: sets-legacy-087 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work excluded paused time from workout duration and calorie estimates.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Rest timer doesn't start after the first arm of set 1 (one-arm exercises)

ID: sets-legacy-088 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered rest timing between separately logged sides.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Finishing a workout can invent an arm you never did

ID: sets-legacy-089 · Step 2 — Protect your training record · Assigned to Unassigned · Record updated 2026-08-31

Earlier work prevented workout completion from inventing an unlogged side.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Editing any program in the builder deletes its periodisation plan

ID: sets-legacy-090 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved periodisation when a program is edited.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### The Periodisation screen can overwrite your ACTIVE program with one you’re just viewing

ID: sets-legacy-091 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept edits to a viewed program separate from the active program.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### "Editing Week N" actually edits every week

ID: sets-legacy-092 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work addressed whether an edit belongs to one week or every week.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Swipe-deleting a set in the builder deletes the wrong set

ID: sets-legacy-093 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work attached swipe deletion to the selected builder row.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Swapping an exercise in the builder resets its targets and breaks its superset

ID: sets-legacy-094 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved targets and superset relationships during an exercise swap.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### "Save as Draft" files the wrong program into Drafts

ID: sets-legacy-095 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made Save as Draft affect the intended program.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Changing a program’s gym keeps the gym but loses the adapted exercises

ID: sets-legacy-096 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work saved equipment-adapted exercises together with a program’s gym change.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Builder edits wipe per-day gym assignments

ID: sets-legacy-097 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved day-specific gym assignments through builder saves.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Reordering days pointed "next workout" and skip marks at the wrong days

ID: sets-legacy-098 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work moved workout pointers, skip marks and gym assignments with reordered days.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Saving workout changes now updates your volume numbers and keeps muscles correct

ID: sets-legacy-099 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept volume totals and muscle assignments consistent after saved workout changes.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Pre-workout "Save order" now actually saves the order

ID: sets-legacy-100 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made pre-workout ordering changes persist.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Template supersets pair the right exercises

ID: sets-legacy-101 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work paired the correct exercises in template supersets.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Per-side rest now survives a builder edit

ID: sets-legacy-102 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved between-side rest through builder edits.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Deleting or reordering a day keeps your next-workout + skip marks

ID: sets-legacy-103 · Step 2b — Protect your programs · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept next-workout pointers and skip marks aligned after day edits.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Single-arm ghost collapses to a no-progress ask

ID: sets-legacy-104 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work addressed a single-arm recommendation that failed to reflect earned progress.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Normal sets no longer tell you to grind to failure

ID: sets-legacy-105 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work distinguished normal-set effort targets from explicitly all-out sets.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Stall-breaker — breaks you through a plateau instead of the endless "one more rep" grind

ID: sets-legacy-106 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work tested a strategy for moving beyond a sustained plateau.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Finishing set 2 rewrites set 1's plan

ID: sets-legacy-107 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered the independence of earlier and later set targets.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Same workout, different advice depending on tap order

ID: sets-legacy-108 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work checked that equivalent workout evidence gives consistent advice regardless of entry order.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Advice built from half a pair

ID: sets-legacy-109 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work avoided deriving complete-pair advice from incomplete unilateral data.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Two-arm merge weakens correct plans

ID: sets-legacy-110 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work preserved appropriate progress when combining left and right results.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Turning RIR off doesn't stop the app using a made-up RIR

ID: sets-legacy-111 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made hidden effort tracking respect the user’s setting.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### A machine-max set drags lighter sets to the max

ID: sets-legacy-112 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept lighter back-off targets separate from an equipment-ceiling set.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Ceiling plans promise weights that don't exist

ID: sets-legacy-113 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept recommendations within weights the equipment actually provides.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Plus / Drop / Myo sets have no shared left-right owner

ID: sets-legacy-114 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work coordinated special-set identity across left and right sides.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### "Average" mode can ask the weaker arm for an unproven weight

ID: sets-legacy-115 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept combined-arm recommendations within demonstrated capability.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Superset auto-advance jumps wrong

ID: sets-legacy-116 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made superset auto-advance respect unfinished partner exercises.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### The "you need an easier week" detector can never fire

ID: sets-legacy-117 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered detection of a sustained need for an easier training week.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Solo single-arm sets can still ask for "0 in reserve"

ID: sets-legacy-118 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work checked effort targets for sessions with only one logged side.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Mid-workout weight adjustments (the live version of the range fix)

ID: sets-legacy-119 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work brought rep-range handling into within-workout weight adjustments.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Warm-up weights solved on the wrong plate rack for lb users

ID: sets-legacy-120 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work checked warm-up plate selection for the chosen weight unit.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Your body weight has two stores that drift apart

ID: sets-legacy-121 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept body-weight history and workout calculations consistent.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Old PR e1RMs oscillate between two formulas on every sync

ID: sets-legacy-122 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made personal-record strength calculations consistent across sync.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Minimum-equipment rep targets

ID: sets-legacy-123 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-08-31

Earlier work examined rep targets when equipment cannot be made any lighter.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Single-arm exercises no longer double-count your volume

ID: sets-legacy-124 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work prevented unilateral tracking from doubling weekly volume counts.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Analytics shows raw kg to lb users, everywhere

ID: sets-legacy-125 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made analytics and explanations honor the selected weight unit.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Two different "e1RM" formulas live in the app

ID: sets-legacy-126 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work aligned the strength-estimate calculation across the app.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Drop sets count as 3–4 sets in every volume number

ID: sets-legacy-127 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work counted a special-set chain consistently in volume summaries.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Strength trend can point two directions on one screen

ID: sets-legacy-128 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work aligned strength-trend indicators across views.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### "% change" can compare the wrong sessions

ID: sets-legacy-129 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work compared matching weighted sessions when calculating percentage changes.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### New users are told volume is climbing when it’s flat

ID: sets-legacy-130 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work improved volume trends for new users and gaps in training.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Wrong day lights up for evening and morning lifters

ID: sets-legacy-131 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work grouped workout dates consistently in the user’s local time.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### First time doing an exercise is reported as a PR

ID: sets-legacy-132 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work treated an exercise’s first logged session as a baseline.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### "Hard Sets" toggle changes the list but not the body diagram

ID: sets-legacy-133 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept the hard-sets filter consistent with the body diagram.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Muscle totals don’t match their own drill-down

ID: sets-legacy-134 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work aligned muscle totals with their detailed breakdowns.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Explanations can survive the decision they explain being repaired

ID: sets-legacy-135 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work kept explanatory text consistent with the final recommendation.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Rest timer honesty cluster

ID: sets-legacy-136 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work covered rest persistence, pausing and weight-unit handling.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Saved ceiling plan mislabelled as "Building Reps"

ID: sets-legacy-137 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work distinguished an equipment-ceiling plan from normal rep building.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Progress screens mark unfinished work as complete

ID: sets-legacy-138 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work made completion indicators reflect actual finished rows.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Small honesty items (grouped)

ID: sets-legacy-139 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work addressed smaller consistency issues in dates, muscle coverage and exercise setup.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### False PR on legacy custom exercises

ID: sets-legacy-140 · Step 4 — Honest screens & counts · Assigned to Unassigned · Record updated 2026-08-31

Earlier work corrected personal-record lookup for older custom-exercise sessions.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Failure scoreboard blames the app for your extra effort

ID: sets-legacy-141 · Step 5 — Fix the referees · Assigned to Unassigned · Record updated 2026-08-31

Earlier work distinguished prescribed effort from effort the lifter chose to add.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Benchmark converts cable weights wrongly

ID: sets-legacy-142 · Step 5 — Fix the referees · Assigned to Unassigned · Record updated 2026-08-31

Earlier work improved simulated performance across changes in cable weight.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### The simulated lifter performs weights it wasn't asked

ID: sets-legacy-143 · Step 5 — Fix the referees · Assigned to Unassigned · Record updated 2026-08-31

Earlier work verified that simulated lifters follow their assigned loads.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Tests that can't fail + screens tested without screens

ID: sets-legacy-144 · Step 5 — Fix the referees · Assigned to Unassigned · Record updated 2026-08-31

Earlier work replaced weak assertions and expanded real-screen regression coverage.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Reported workout cases in release checks

ID: sets-legacy-145 · Step 5 — Fix the referees · Assigned to Unassigned · Record updated 2026-08-31

Earlier work retained reported workout cases as regression tests.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Volume-matching experiment

ID: sets-legacy-146 · Step 6 — New coaching (last, on solid ground) · Assigned to Unassigned · Record updated 2026-08-31

An earlier experiment compared two ways to rebuild after an unsuccessful weight increase.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.
