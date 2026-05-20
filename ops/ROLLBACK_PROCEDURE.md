###### Start of Document \<C:/dev/repos/paste-shield/ops/ROLLBACK_PROCEDURE.md>
# ROLLBACK_PROCEDURE.md
### Purpose  
Defines the mandatory rollback procedure for PasteShield if post‑release monitoring detects instability, regressions, or critical anomalies.  
Rollback must be executed with zero ambiguity and zero delay.

---------------------------------------------------------------------

## 0. Rollback Triggers

Rollback is **mandatory** if any of the following occur:

- A‑series anomaly detected in the field  
- B‑series anomaly detected in the field  
- NEW anomaly detected with no immediate doctrine  
- Regression from pre‑release behavior  
- Editor‑driven anomaly that breaks invariants  
- User‑reported critical issue  
- Stability rating: unstable or inconsistent  
- Drift detected in range normalization  
- Clipboard mutation detection failure  

No exceptions.  
No operator discretion.

---------------------------------------------------------------------

## 1. Immediate Actions (T+0 minutes)

1. Freeze all new downloads  
2. Disable auto‑update channel  
3. Post internal rollback notice  
4. Capture all logs  
5. Capture reproduction steps  
6. Capture editor version and environment  
7. Classify the triggering anomaly  

Operator must not attempt fixes before rollback is complete.

---------------------------------------------------------------------

## 2. Rollback Execution (T+5 minutes)

1. Revert extension to previous stable version  
2. Update release channel metadata  
3. Push rollback version to distribution  
4. Verify rollback propagation  
5. Confirm rollback availability on all platforms  

Rollback is not complete until propagation is verified.

---------------------------------------------------------------------

## 3. Post‑Rollback Verification (T+30 minutes)

- [ ] Extension installs correctly  
- [ ] Extension activates correctly  
- [ ] No A‑series anomalies  
- [ ] No B‑series anomalies  
- [ ] No C‑series anomalies  
- [ ] No NEW anomalies  
- [ ] No editor‑driven regressions  
- [ ] No user‑visible breakage  

---------------------------------------------------------------------

## 4. Root Cause Analysis (T+2 hours)

### Required Outputs
- Triggering anomaly  
- Classification (A/B/C/NEW)  
- Reproduction steps  
- Environment details  
- Editor behavior  
- Clipboard behavior  
- Range normalization behavior  
- Doctrine gaps  
- Test matrix gaps  
- Proposed fixes  

No release may resume until RCA is complete.

---------------------------------------------------------------------

## 5. Doctrine and Test Matrix Updates

- Update doctrine for NEW cases  
- Strengthen invariants  
- Add missing edge cases  
- Update A/B/C test matrices  
- Add regression tests  
- Validate fixes against all invariants  

---------------------------------------------------------------------

## 6. Re‑Release Preconditions

PasteShield may only be re‑released when:

- [ ] RCA complete  
- [ ] Doctrine updated  
- [ ] Test matrix updated  
- [ ] All regressions fixed  
- [ ] No anomalies in re‑test  
- [ ] Stability confirmed  
- [ ] Release checklist re‑completed  

---------------------------------------------------------------------

###### End of Document \<C:/dev/repos/paste-shield/ops/ROLLBACK_PROCEDURE.md>
