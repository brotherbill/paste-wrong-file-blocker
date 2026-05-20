###### Start of Document </C/dev/repos/paste-wrong-file-blocker/ops/RELEASE_CHECKLIST.md>
# RELEASE_CHECKLIST.md
### Purpose
Defines the mandatory pre‑release checklist for Paste Wrong File Blocker.
Release is not permitted until every item is satisfied with no exceptions.

---------------------------------------------------------------------

## 0. Preconditions

- 30_DAY_SOAK_LOG.md complete
- DAILY_OPERATOR_WORKFLOW.md followed for all 30 days
- WEEKLY_OPERATOR_WORKFLOW.md completed for all 4 weeks
- MONTHLY_OPERATOR_SUMMARY.md completed
- No missing anomaly classifications
- No pending NEW cases
- No retroactive edits
- All doctrine files updated
- All test matrix files updated

---------------------------------------------------------------------

## 1. Stability Verification

- [ ] No unclassified anomalies
- [ ] No unresolved A‑series events
- [ ] No unresolved B‑series events
- [ ] No unresolved C‑series events
- [ ] No NEW anomalies without doctrine
- [ ] No drift detected in the final week
- [ ] No editor‑driven anomalies requiring upstream fixes
- [ ] No operator‑driven anomalies indicating workflow issues

---------------------------------------------------------------------

## 2. Doctrine Verification

- [ ] All NEW cases have doctrine
- [ ] All doctrine invariants validated
- [ ] All doctrine examples updated
- [ ] All doctrine edge cases tested
- [ ] No contradictions between doctrine files
- [ ] No missing identity‑bearing wrappers
- [ ] No missing escaped angle brackets in wrappers

---------------------------------------------------------------------

## 3. Test Matrix Verification

- [ ] A‑series matrix updated
- [ ] B‑series matrix updated
- [ ] C‑series matrix updated
- [ ] All new cases added
- [ ] All regressions tested
- [ ] All invariants tested
- [ ] All editor‑range normalization tests passed

---------------------------------------------------------------------

## 4. Operational Verification

- [ ] Paste Wrong File Blocker activation verified
- [ ] Workspace Trust verified
- [ ] Autosave behavior validated
- [ ] Multi‑cursor behavior validated
- [ ] Multi‑file behavior validated
- [ ] Cross‑window behavior validated
- [ ] Clipboard mutation detection validated
- [ ] Range normalization detection validated

---------------------------------------------------------------------

## 5. Telemetry and Release Constraints

Paste Wrong File Blocker cannot be released with telemetry of any kind.
A public VS Code extension must not transmit logs, crash data, internal state, or any outbound communication without explicit user consent. Marketplace policy, extension sandboxing, and privacy requirements prohibit silent channels.

The internal crash pipeline used on operator‑controlled machines must be removed entirely before any public release. No encrypted crash packages, no rolling buffers, no Mothership communication, and no device wipe behavior may remain. A public build must operate strictly locally with zero telemetry.

Release is not permitted unless the extension contains **no outbound communication paths** and all internal diagnostic mechanisms have been disabled or removed.

---------------------------------------------------------------------

## 6. Release Decision

**Decision**
- [ ] RELEASE
- [ ] HOLD

**Rationale**
<literal justification>

**Blocking Issues (if HOLD)**
<list>

**Required Actions Before Release**
<list>

---------------------------------------------------------------------

###### End of Document </C/dev/repos/paste-wrong-file-blocker/ops/RELEASE_CHECKLIST.md>
