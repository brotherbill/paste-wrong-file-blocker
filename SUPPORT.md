# SUPPORT  
Purpose: Defines defect reporting, triage procedures, and emergency support protocols for PasteShield.  
###### <C:/dev/repos/paste-shield/SUPPORT.md>

---

## 1. Support Philosophy  
PasteShield is a safety‑critical extension.  
Support must prioritize:

- operator safety  
- deterministic behavior  
- rapid identification of UB  
- clear communication  
- zero ambiguity  
- strict adherence to doctrine  

Support is not a forum for feature requests unless they strengthen safety or reduce UB risk.

---

## 2. What Qualifies as a Defect  
A defect is any deviation from expected behavior, including:

- modal appears when it should not  
- modal does not appear when it should  
- paste occurs when it should be blocked  
- paste is blocked when it should occur  
- unexpected mutation  
- cursor movement during blocked paste  
- background behavior  
- performance degradation  
- header/footer normalization failure  
- duplicate header/footer rejection failure  
- any violation of invariants  

If the operator cannot explain the behavior using existing doctrine, it is a defect.

---

## 3. What Does *Not* Qualify as a Defect  
The following are **not** defects:

- operator misunderstanding of override procedure  
- clipboard content not matching expectations  
- other extensions overriding paste behavior  
- VS Code bugs  
- OS‑level clipboard issues  
- invalid `.md` files with malformed headers/footers  

These must be ruled out before filing a defect.

---

## 4. Defect Reporting Procedure  

### 4.1 Required Information  
A defect report must include:

1. Steps to reproduce  
2. Expected behavior  
3. Actual behavior  
4. Clipboard contents (if safe to share)  
5. Document contents (if safe to share)  
6. VS Code version  
7. PasteShield version  
8. Operating system  
9. Whether other extensions were active  
10. Whether header/footer validation was involved  

### 4.2 Submission  
Defects must be submitted via:

- repository issue tracker  
- internal operator channel  
- direct maintainer escalation (for emergencies)

### 4.3 Response Expectations  
Maintainers must:

- acknowledge the defect  
- classify severity  
- identify violated invariants  
- determine whether UB occurred  
- initiate corrective action  
- update documentation if doctrine was unclear  

---

## 5. Severity Levels  

### 5.1 Critical  
- UB observed  
- unexpected mutation  
- modal bypass  
- override bypass  
- data loss  
- background behavior  
- header/footer validation failure  

Immediate escalation required.

### 5.2 Major  
- modal appears incorrectly  
- paste blocked incorrectly  
- performance degradation  
- normalization inconsistencies  

Requires prompt attention.

### 5.3 Minor  
- documentation drift  
- cosmetic issues  
- non‑critical inconsistencies  

Addressed during normal maintenance.

---

## 6. Emergency Protocol  
If a critical defect occurs:

1. Stop using PasteShield immediately.  
2. Document the failure.  
3. Disable the extension.  
4. Notify maintainers.  
5. Provide reproduction steps.  
6. Await updated guidance.  

No further testing should occur until maintainers respond.

---

## 7. Support Invariants  
Support must always:

- classify defects deterministically  
- avoid speculation  
- avoid blame  
- avoid undocumented fixes  
- follow Change Control Protocol  
- update documentation when required  
- ensure invariants are restored  
- ensure no UB remains  

---

## 8. Resolution Requirements  
A defect is resolved only when:

- root cause is identified  
- invariants are restored  
- documentation is updated  
- test plan is updated  
- changelog is updated  
- behavior is verified  
- no UB remains  

---

###### End of Document <SUPPORT.md>
