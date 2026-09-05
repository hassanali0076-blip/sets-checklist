# SETS — shared checklist

Updated: 2026-09-05T04:13:13.420Z · Reviewed through 2026-09-05

- web: The live app includes Progression Engine V2 as an opt-in setting. Additional V2 fixes for stalled exercises and later-set targets, Settings changes, app wording updates and GEN-28 are not released.
- backend: Development testing is available under the existing model. Verify the connection and test-account separation; installed deletion and retention behavior still needs checking.
- next: Integrate reviewed fixes in small groups, starting with data protection. Keep V2 opt-in; introduce GEN-28 behind an opt-in control after its remaining checks.

> Reviewed through 5 September 2026. 65 current tasks and 124 archived records. These are work items, not a completion percentage or a count of confirmed bugs.

> All 146 original IDs are retained. Stale reminders and duplicates are archived; missing findings and the seven individual watch checks have been added.

> Known issue means the stated source or candidate defect has evidence. Needs checking also includes unreleased repairs and unconfirmed reports; read each summary for the distinction.

> Local tests, a pushed branch, integration, deployment and real-device acceptance are separate. Earlier sign-offs have not all been rerun in this review.

> Existing assignments are unchanged, including all 14 Josh assignments. Unassigned means no implementation owner has been chosen. Historical author credits do not assign new work.

> Local reproductions, candidate preparation and code review can proceed independently. Shared account/sync contracts and installed service configuration must be coordinated before integration or release.

> This update publishes checklist summaries only. It does not change the SETS app, PowerSync, task schedules or release permissions.

## Known issue

### Remove report content during account deletion

ID: sets-legacy-002 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

Account deletion can leave feedback and report content behind in the current schema. Production retention has not been independently checked.

Next: Remove or anonymise associated content and attachments, and verify the installed deletion path.

### Delete every current copy of account data

ID: sets-legacy-003 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

Deletion code does not cover all newer stored copies. Installed backend behavior has not been verified in this review.

Next: Inventory every database, settings and device copy; extend deletion coverage and verify data stays deleted after reconnecting.

### Honor the training options shown in the generator

ID: sets-legacy-007 · Program generator · Assigned to Josh · Record updated 2026-09-05

A controlled live-source case confirmed some saved training-method choices do not affect generation. GEN-28 does not automatically solve every option.

Next: Connect each supported option to the shipping generator, or make an explicit product decision about inactive controls. Local analysis can proceed before sync work.

### Sync Now must wait for uploads

ID: sets-legacy-009 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

A second sync request can finish while an earlier upload is still running. The source-level race was reproduced.

Next: Make concurrent requests wait for the same upload before downloading and merging changes. Verify recent edits survive.

### Make fatigue estimates mean the same thing everywhere

ID: sets-legacy-010 · Progression · Assigned to Codex · Record updated 2026-09-05

The legacy writer and readers still disagree. The preserved experiment is unfinished and is not a release-ready fix.

Next: Measure the effect, agree one shared quantity, reconcile readers and writer, and handle saved estimates explicitly.

### Stop the old sync worker when the session changes

ID: sets-legacy-013 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

The current legacy sync worker is not safely stopped across all session changes. A synthetic account-switch case reproduced work continuing under the new account.

Next: Bind queued saves to their original account and stop the old worker before starting another. Coordinate the account contract with the PowerSync candidate.

### Keep deleted folders, templates and exercises deleted

ID: sets-legacy-033 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

The earlier candidate label overstated completeness. The current source still lacks a complete protection against an older device restoring these deleted items.

Next: Keep durable deletion records and reject outdated writes. Test deleting on one device and reconnecting another.

### Keep default progression targets inside the rep range

ID: sets-legacy-063 · Progression · Assigned to Unassigned · Record updated 2026-09-05

Reopened: an exact current-source case still asks below the written range. The opt-in V2 handles that case, but V2 is off by default.

Next: Apply a narrow correction to the default paths using the approved capacity rule; preserve effort targets and real available weights.

### Protect older workouts when device storage is full

ID: sets-20260905-offline-history · Data protection and sync · Assigned to Unassigned · Record updated 2026-09-05

The current source can remove older local history without confirming it reached the cloud. This was reproduced with synthetic offline records.

Next: Only remove records confirmed saved to the cloud. Preserve unsent history and give a recoverable storage-full message.

### Give changed app files unique download addresses

ID: sets-20260905-build-asset-identity · Integration and release · Assigned to Unassigned · Record updated 2026-09-05

A source-level build issue can give different file contents the same supposedly permanent address. The older preview repair is incomplete.

Next: Give distinct contents distinct addresses, detect collisions after building, and retain assets needed by older app versions.

### Show pounds correctly in equipment summaries

ID: sets-20260905-equipment-display-units · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

Some equipment summaries still display kilograms for pounds users. This remains open in the reviewed candidates.

Next: Use the shared unit conversion and formatting in equipment pickers and gym summaries; check both units.

### Give priority muscles the promised extra work

ID: sets-20260905-priority-direct-work · Program generator · Assigned to Unassigned · Record updated 2026-09-05

A controlled current-source case gave the priority muscle no extra direct work. GEN-28 contains improvements but is not connected to the app.

Next: Reserve the agreed priority work and independently check the result. Explain when equipment or time makes the target impossible.

### Reduce large differences in workout length

ID: sets-20260905-balanced-day-duration · Program generator · Assigned to Unassigned · Record updated 2026-09-05

The earlier source comparison found a greater-than-ten-minute spread in 29 of 72 synthetic profiles. The new allocator remains a separate prototype.

Next: Balance estimated time across days and explain unavoidable limits; rerun the same profiles on the integration candidate.

### Match equipment pictures to their labels

ID: sets-20260905-equipment-illustrations · Copy, exercise content and exports · Assigned to Unassigned · Record updated 2026-09-05

The current source contains confirmed picture-to-label mismatches. The wider station illustration set needs review.

Next: Inspect all station illustrations and correct mismatched assets while keeping station identities and labels intact.

### Do not silently label an unknown exercise as Chest

ID: sets-20260905-unknown-exercise-muscle · Copy, exercise content and exports · Assigned to Unassigned · Record updated 2026-09-05

A helper-level reproduction confirmed that an unknown exercise can fall back to Chest. The frequency in real accounts is unmeasured.

Next: Preserve known exercise metadata and represent unknown identity honestly; check muscle totals and progression callers.

### Keep exported exercise names as spreadsheet text

ID: sets-20260905-csv-text-cells · Copy, exercise content and exports · Assigned to Unassigned · Record updated 2026-09-05

Formula-shaped text is currently written unchanged into CSV cells. The raw export was reproduced; spreadsheet execution was not tested.

Next: Escape formula-like text safely while preserving numeric values and normal CSV formatting.

## Next release


## Needs checking

### Deleting settings must preserve pending workouts

ID: sets-legacy-004 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

The current app source can discard an unrelated pending workout when a category deletion fails. A scoped repair exists in the unreleased Settings candidate.

Next: Integrate the scoped repair; verify failed deletion preserves pending workouts and reconnect saves them once.

### Use the correct gym for each workout

ID: sets-legacy-005 · Settings and gym equipment · Assigned to Josh · Record updated 2026-09-05

Current app behavior can ignore a day gym. The approved replacement is Main Gym for generation, followed by explicit per-day gym changes and exercise refitting.

Next: Integrate the candidate gym identity and refitting flow. Verify each workout uses its chosen gym after save and reload.

### Replace exercises when available equipment changes

ID: sets-legacy-006 · Settings and gym equipment · Assigned to Josh · Record updated 2026-09-05

The live-source comparison left incompatible exercises unchanged. A substantial repair exists in the Settings candidate.

Next: Reuse the refitting repair and verify switching gyms, disabling equipment and removing the last usable weight.

### Clear account data safely on sign-out

ID: sets-legacy-008 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

Current source leaves account-specific PowerSync data on the device. The unreleased Settings candidate adds account cleanup.

Next: Integrate cleanup only with protection for unsent work. Test sign-out, sign-in and switching between two accounts.

### Avoid partially completed category deletion

ID: sets-legacy-012 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

Deleting several categories can partly succeed. The Settings candidate limits granular deletion to one category at a time.

Next: Reuse the single-category restriction until reliable all-or-nothing deletion is implemented; make failed cleanup retryable.

### Verify scanner photo retention and expiry

ID: sets-legacy-014 · Data protection and sync · Assigned to You · Record updated 2026-09-05

No enforced photo expiry was established from the repository. An external cleanup job may exist and still needs checking.

Next: Inspect actual retention and cleanup first, then implement the agreed expiry and account-deletion coverage.

### Check single-arm targets and remaining ATLAS cases

ID: sets-legacy-022 · Progression · Assigned to Codex · Record updated 2026-09-05

The old single-arm report and related engine cases need fresh comparison in default and V2 modes. Existing history does not prove each remains broken.

Next: Replay the named cases with correctly paired arms and sets; classify each as fixed, V2-only, default-only or still open before patching.

### Share a gym with another SETS user

ID: sets-legacy-026 · Settings and gym equipment · Assigned to You · Record updated 2026-09-05

The share and import flow is implemented in the unreleased candidate. Real cloud permissions and device acceptance remain unverified.

Next: Verify permissions, imported equipment identity and independence from the sender after import.

### Consolidated Settings and workout controls

ID: consolidated-settings-set-46 · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

The preserved Settings candidate includes workout preferences, warm-ups, rest controls and equipment explanations. It is pushed but not integrated or live.

Next: Reconcile newer progression preferences, integrate only compatible changes, then complete staging and phone acceptance.

### Prepare testing on the existing development instance

ID: powersync-instance-confirmation · Integration and release · Assigned to Unassigned · Record updated 2026-09-05

Testing on the existing Development instance is permitted with advance coordination and the shared data model kept separate from agent changes. Ownership and permission are no longer unresolved.

Next: Confirm the connected data and use dedicated test accounts under the existing model. Give an advance heads-up on the test scope. Treat database-structure and sync-rule changes as separate coordinated work; the Development label alone does not prove isolation.

### Apply gym edits to affected existing programs

ID: sets-legacy-029 · Settings and gym equipment · Assigned to Josh · Record updated 2026-09-05

Gym-edit refitting now has candidate code, so the old planned-only label is stale. It still needs integration and complete flow checks.

Next: Verify edits to the existing gym update affected programs and preserve unrelated days and logged history.

### Account switching: reconcile both sync systems

ID: sets-legacy-032 · Data protection and sync · Assigned to Josh · Record updated 2026-09-05

The Settings candidate improves PowerSync account boundaries. It does not complete the separate legacy sync-worker repair. Nothing in this candidate is live.

Next: Reuse the candidate account protections, finish the legacy worker fix, then test two accounts with pending offline work.

### Additional V2 stalled-lifter recovery fixes

ID: sets-legacy-034 · Progression · Assigned to You · Record updated 2026-09-05

The released V2 engine is already in the app as an opt-in setting. This task covers additional stall-recovery fixes in a local candidate: 25 focused comparison cases passed, but these extra fixes are not pushed, integrated or live.

Next: Integrate the reviewed V2-only changes and verify the complete save/reload flow. Keep V2 opt-in until remaining coverage and acceptance are complete.

### Review information collected in automatic reports

ID: sets-20260905-diagnostic-retention · Data protection and sync · Assigned to Unassigned · Record updated 2026-09-05

Automatic generator reports include detailed programme and profile information. This is a collection and retention review, not evidence of a leak.

Next: Keep only the information needed for diagnosis and verify access, expiry and deletion against the product policy.

### Gym management and Main Gym

ID: sets-20260905-gym-management · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

Create, edit, copy, delete and Main Gym screens exist in the preserved candidate. They are not in the live app.

Next: Reuse the candidate and verify existing gyms migrate without losing equipment or available weights.

### Edit equipment in the workout’s own gym

ID: sets-20260905-workout-equipment-owner · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

The live-source equipment editor can use the active gym instead of the workout gym. The Settings candidate contains a repair.

Next: Carry the workout gym and exact equipment identity into every editor; fail safely if the owner is missing.

### Make selected equipment presets immediately usable

ID: sets-20260905-preset-usable-weights · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

Some checked weight-based presets do not supply usable weights. Candidate pieces exist, but the full preset range remains unchecked.

Next: Ensure every selected station has valid available weights, while preserving the user’s actual choices.

### Calculate machine and warm-up weights consistently

ID: sets-20260905-machine-load-math · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

Starting load and single versus paired loading points are not handled consistently across all equipment paths. Candidate repairs cover part of the work.

Next: Use each station’s real starting load, loading points and limits for both working sets and warm-ups.

### Use real available weights for weighted bodyweight exercises

ID: sets-20260905-weighted-bodyweight-loads · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

A candidate improves added-weight handling, but the complete equipment and bodyweight rules still need verification.

Next: Use configured belt and plate equipment consistently, then test supported movements and both units.

### Correct weighted exercise names and Bench Dip handling

ID: sets-20260905-weighted-movement-labels · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

Candidate changes cover naming and Bench Dip classification. They are not live.

Next: Apply the approved labels and optional added-weight behavior while preserving exercise identities and history.

### Scanner 2.0 and separate equipment instances

ID: sets-20260905-scanner-equipment-instances · Settings and gym equipment · Assigned to Unassigned · Record updated 2026-09-05

Scanner routing and separate equipment ownership exist in the preserved candidate. Integration, cloud and device acceptance remain open.

Next: Reuse the candidate after the compatible account and equipment schema is ready; verify fallbacks and keep its experimental controls.

### Prevent an adjusted later set asking for more unexpectedly

ID: sets-20260905-v2-later-set-target · Progression · Assigned to Unassigned · Record updated 2026-09-05

A narrow V2 repair exists locally, with a regression case that fails on the current app source. This is separate from the broader fatigue-model work.

Next: Integrate that focused repair and check later-set recommendations before and after save/reload.

### Check progression where equipment has large weight jumps

ID: sets-20260905-coarse-weight-jumps · Progression · Assigned to Unassigned · Record updated 2026-09-05

Older candidates contain partial repairs. Current default and V2 paths need the same approved cases replayed before deciding what remains broken.

Next: Keep only missing compatible fixes; preserve safe rep ranges, effort targets and actual equipment steps.

### Check progression at the equipment’s maximum weight

ID: sets-20260905-maximum-weight-progression · Progression · Assigned to Unassigned · Record updated 2026-09-05

Older candidate fixes need comparison against current default and V2 behavior, including persistence. This is not newly confirmed as a live defect.

Next: Replay earned maximum-weight progression and save/reload, then integrate only general repairs that are still needed.

### Preserve workout history and cycle identity during Redo

ID: sets-20260905-redo-cycle-identity · Workout screens and history · Assigned to Unassigned · Record updated 2026-09-05

A separate candidate creates a new Redo workout while preserving original history. It is not fully integrated or live.

Next: Carry Redo and cycle identity through every save and sync path; verify Redo does not advance the program cycle.

### Complete Workout and unfinished-session confirmation

ID: sets-20260905-complete-workout-flow · Workout screens and history · Assigned to Unassigned · Record updated 2026-09-05

Candidate screens contain the revised completion action, summary navigation and confirmation sheets. They still need integration and phone acceptance.

Next: Reuse compatible screens and verify completed, unfinished and Redo flows while preserving bulk tick and swipe delete.

### Show unavailable-target explanations only when useful

ID: sets-20260905-orbit-availability · Workout screens and history · Assigned to Unassigned · Record updated 2026-09-05

Candidate UI exists, but the complete behavior contract has not been accepted in the live app.

Next: Show the actual fixable cause for affected unfinished sets; hide the next-target prompt when the exercise is complete and clear it after correction.

### Verify workout identity through app, sync and database

ID: sets-20260905-sync-workout-provenance · Data protection and sync · Assigned to Unassigned · Record updated 2026-09-05

Some app-side protection is already integrated. The installed database function and sync rules have not been verified end to end.

Next: Read the installed backend and sync rules, then verify old and new clients preserve workout and cycle identity. Local adapter checks can proceed now.

### Finish and integrate the reviewed app wording

ID: sets-20260905-app-copy-candidate · Copy, exercise content and exports · Assigned to Unassigned · Record updated 2026-09-05

The app wording-update branch records 904 reviewed entries and 104 rewrites. It is not accepted or released; 281 entries have overlapping blockers. Its saved full test run also had three failures.

Next: Reconcile copy with the final screens, resolve blocked entries and explain the saved failures before integration. Preserve the paused task until its existing owner resumes it.

### Make exercise guides match videos and logging

ID: sets-20260905-exercise-guide-contracts · Copy, exercise content and exports · Assigned to Unassigned · Record updated 2026-09-05

The saved copy review has 62 blocked guide entries. Current hosted overrides and the exact remaining count still need checking.

Next: Resolve video, duration-versus-reps and single-arm tracking disagreements, then finish the affected guides.

### Review wording outside the app repository

ID: sets-20260905-hosted-platform-copy · Copy, exercise content and exports · Assigned to Unassigned · Record updated 2026-09-05

Hosted login messages and platform wording were outside the repository-only copy audit. They are not signed off.

Next: Inspect the current hosted templates and platform screens, then draft any needed corrections for those exact surfaces.

### Check the adaptive workout-duration path

ID: sets-20260905-adaptive-duration · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

An older candidate review questioned how adaptive duration reaches generation. It has not been reproduced against the current app in this review.

Next: Exercise the current onboarding-to-generation flow and change behavior only if it contradicts the approved adaptive intent.

### Check whether comparison help is reachable

ID: sets-20260905-comparison-help-entry · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

An older review found a possibly unreachable help entry. Current UI behavior still needs checking.

Next: Follow the actual help entry in the current app, then connect or retire it according to the approved design.

### Check stale cycle data arriving from the cloud

ID: sets-20260905-watch-cycle-merge · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

Watch item only: there is no fresh reproduction of a remaining cycle-merge defect.

Next: Replay older and newer cycle state arriving in different orders; fix only a reproduced conflict.

### Check that Edit Microcycle changes the actual plan

ID: sets-20260905-watch-edit-microcycle · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

The earlier watch list questioned whether editing changed only a label. The current behavior is unverified.

Next: Edit a saved program and verify the resulting plan and history mapping, not only the screen label.

### Check that two easier-week systems do not stack

ID: sets-20260905-watch-double-deload · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

The interaction between manual and automatic easier-week adjustments remains a watch item.

Next: Replay their overlap and verify the user receives one intended adjustment.

### Recheck the plus-set weight-drop limit

ID: sets-20260905-watch-plus-drop-cap · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

The old report predates newer set-type changes. It must be replayed before being treated as a current bug.

Next: Test the original case in current default and V2 modes and repair only a remaining incorrect limit.

### Recheck the historical gym-data loss route

ID: sets-20260905-watch-gym-wipe · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

Protection was reported in earlier work, but that does not establish the root cause is closed for every reconnect path.

Next: Use synthetic old and new account state to verify existing guards and investigate any remaining destructive route.

### Check whether an unavailable weight returns after sync

ID: sets-20260905-watch-off-grid-echo · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

This remains an unconfirmed watch item for editing, saving and receiving the value from the cloud.

Next: Replay the flow with configured weight steps and both units; correct any stale value that returns.

### Confirm the custom-exercise keyboard behavior on iPhone

ID: sets-20260905-watch-custom-keyboard · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

Earlier work may already have fixed this. Current phone acceptance is missing.

Next: Check create and edit flows in the current iPhone app without changing real user records.

### Review the size of an early weight increase

ID: sets-20260905-novice-weight-jump · Checks still needed · Assigned to Unassigned · Record updated 2026-09-05

The saved example follows the approved rule. It is a founder acceptance question, not a newly proven engine defect.

Next: Replay the actual training-history example; propose a more conservative limit only if the current behavior is rejected.

## Planned

### Accept the exact integrated release before publishing it

ID: sets-legacy-035 · Integration and release · Assigned to You · Record updated 2026-09-05

Old release reminders do not approve the current candidates. No app release is authorized by this checklist update.

Next: Combine only reviewed compatible fixes, record the exact build, complete staging and phone checks, then obtain approval for that release.

### Retry a temporary asset-verification interruption

ID: sets-20260905-asset-verification-retry · Integration and release · Assigned to Unassigned · Record updated 2026-09-05

The release verification workflow can require a manual retry after a temporary download interruption. This is a tooling gap.

Next: Add one bounded retry while keeping integrity checks and a clear final failure.

### Treat repeated failed weights differently from one bad day

ID: sets-20260905-v2-repeated-fumbles · Progression · Assigned to Unassigned · Record updated 2026-09-05

The rule is approved, but this part of V2 has not been implemented. The completed stall work does not cover it.

Next: Use the recent session window to distinguish an isolated miss from repeated misses; require success at the lower step before retrying when appropriate.

### Complete V2 coverage before making it the default

ID: sets-20260905-v2-coverage-rollout · Progression · Assigned to Unassigned · Record updated 2026-09-05

V2 remains deliberately opt-in. Special set types, effort tracking off and other excluded cases still need decisions and acceptance.

Next: Finish the approved recovery work, settle the remaining coverage rules, and test the complete supported paths before proposing default rollout.

### Use the approved effort band for primary lifts

ID: sets-20260905-primary-lift-effort · Program generator · Assigned to Unassigned · Record updated 2026-09-05

The approved new-program rule is one to three reps in reserve for primary lifts. It is not yet integrated into the shipping generator.

Next: Apply the rule once in the generator that ships. If GEN-28 is not ready by 30 September, land the narrow current-generator change first; preserve saved programs.

### Connect the validated GEN-28 generator to SETS

ID: sets-20260905-gen28-app-integration · Program generator · Assigned to Unassigned · Record updated 2026-09-05

GEN-28 remains separate from the running app while Round 3 strengthens validation and automated coverage. Moving its files into the source folder does not itself integrate or deploy the generator.

Next: Finish the review gaps and approve the changed control-program outputs. Map gym, injury and training options, then integrate behind an opt-in control. Preserve saved programs and compare real app outputs before rollout.

### Decide which public prototype pages should remain available

ID: sets-20260905-public-prototype-pages · Copy, exercise content and exports · Assigned to Unassigned · Record updated 2026-09-05

Prototype-page publication needs an explicit keep, label, archive or remove decision. Availability alone is not proof of a bug.

Next: Inventory shipped pages and links and make a recommendation for each before changing publication.

## In progress

### GEN-28 Round 3: strengthen checks and automated coverage

ID: sets-20260905-gen28-review-gaps · Program generator · Assigned to Codex · Record updated 2026-09-05

Round 3 is in progress. Powerbuilding main lifts at 4–6 reps and secondary compounds at 6–8 are confirmed correct; the earlier rep-rule issue is superseded. Strict rep/effort validation and normal automated-test coverage remain open.

Next: Finish the focused checker repairs, prove invalid prescriptions fail and valid ones pass, preserve programme outputs during the file move, and run the final automated checks. Retain the separate founder decision on changed control programmes; no app integration yet.

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

### Generation and the workout screen disagree about which gym

ID: sets-legacy-030 · Being worked on & next up · Assigned to Josh · Record updated 2026-09-05

Archived duplicate: gym identity during generation and workouts is tracked under Use the correct gym for each workout. The old generation-time design has been superseded.

Next: Follow sets-legacy-005 for the approved Main Gym and per-day refitting behavior.

### The swap "no match" message can't say why

ID: sets-legacy-031 · Being worked on & next up · Assigned to Codex · Record updated 2026-08-31

Earlier work made exercise-swap messages distinguish a missing gym from incomplete equipment setup.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Open the app once before your next workout

ID: sets-legacy-036 · Waiting on you · Assigned to You · Record updated 2026-09-05

Archived stale reminder: opening the app once was tied to an earlier release and does not validate today’s candidates.

Next: Use the current integrated-release acceptance task when a new build is available.

### Stall-Breaker rulings (7 decisions) + solo "@0" ruling

ID: sets-legacy-037 · Waiting on you · Assigned to You · Record updated 2026-09-05

Archived superseded decision list: the earlier stall and effort rulings have been replaced by the current V2 decisions. V2 coverage remains a separate open task.

Next: Follow V2 stalled-lifter recovery and V2 coverage before default rollout.

### Smaller items under watch

ID: sets-legacy-038 · Watching · Assigned to You · Record updated 2026-09-05

Archived umbrella: all seven watch items are now separate tasks with their own evidence limits and next steps. This does not mark them fixed.

Next: Use the individual cycle, microcycle, easier-week, plus-set, gym-data, weight-sync and keyboard checks.

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

### Workout regression cases in the release gate

ID: sets-legacy-064 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work added reported workout cases to release regression coverage.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### Exercise classification and history display

ID: sets-legacy-065 · Shipped — Fixed & live this campaign · Assigned to Unassigned · Record updated 2026-08-31

Earlier work repaired exercise tracking classification and the resulting history display.

Next: Retain this earlier record. Reopen a new report separately if the behavior recurs.

### This master checklist, ranked and complete

ID: sets-legacy-066 · Step 1 — Map everything · Assigned to Unassigned · Record updated 2026-09-05

Historical checklist completion label. The board was reconciled again on 5 September; earlier completion totals are not a current app-completion percentage.

Next: Use the current board statuses and per-task evidence.

### Blind-spot sweep of the whole app

ID: sets-legacy-067 · Step 1 — Map everything · Assigned to Unassigned · Record updated 2026-09-05

Historical blind-spot audit sign-off. It is retained as history and does not mean the app has no remaining bugs.

Next: Use the current findings and checks from the latest review.

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

ID: sets-legacy-106 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-09-05

Historical Stall-Breaker sign-off, superseded by the current V2 specification and local candidate. The new candidate is not live.

Next: Follow sets-legacy-034 for current implementation and acceptance.

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

ID: sets-legacy-119 · Step 3 — Safe, correct coaching · Assigned to Unassigned · Record updated 2026-09-05

Historical range-fix sign-off, not proof that the current default engine always stays in range. The current reproduced defect is tracked under sets-legacy-063.

Next: Follow the reopened default rep-range task.

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
