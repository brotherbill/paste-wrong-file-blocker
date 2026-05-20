###### Start of Document \<C:/dev/repos/paste-shield/ops/RELEASE_CHECKLIST.md>
# RELEASE_CHECKLIST.md
### Purpose  
Defines the mandatory pre‑release checklist for PasteShield.  
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

- [ ] PasteShield activation verified  
- [ ] Workspace Trust verified  
- [ ] Autosave behavior validated  
- [ ] Multi‑cursor behavior validated  
- [ ] Multi‑file behavior validated  
- [ ] Cross‑window behavior validated  
- [ ] Clipboard mutation detection validated  
- [ ] Range normalization detection validated  

---------------------------------------------------------------------

## 5. Release Decision

**Decision**  
- [ ] RELEASE  
- [ ] HOLD  

**Rationale**  
\<literal justification>

**Blocking Issues (if HOLD)**  
\<list>

**Required Actions Before Release**  
\<list>

---------------------------------------------------------------------

###### End of Document \<C:/dev/repos/paste-shield/ops/RELEASE_CHECKLIST.md>
