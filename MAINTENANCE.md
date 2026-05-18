###### Start of Document \<C:/dev/repos/paste-wrong-file-blocker/MAINTENANCE.md\>
# MAINTENANCE  
Purpose: Defines long‑term maintenance procedures and stability requirements for Paste Wrong File Blocker.

---

## 1. Maintenance Philosophy  
Paste Wrong File Blocker is a safety‑critical extension.  
Maintenance must prioritize:

- stability  
- determinism  
- minimalism  
- zero UB  
- zero drift from doctrine  
- strict adherence to Mandatory Elements  
- strict adherence to header/footer validation rules  

New features are discouraged unless they strengthen safety or reduce UB risk.

---

## 2. Update Procedures  

### 2.1 Pre‑Update Requirements  
Before updating any component:

1. Read MY_RULES.md in full.  
2. Verify all invariants remain applicable.  
3. Review ARCHITECTURE.md, SECURITY.md, and OPERATIONS.md.  
4. Confirm no background behavior will be introduced.  
5. Confirm no new dependencies are required.  
6. Confirm all `.md` files pass header/footer validation.  
7. Confirm TEST_PLAN.md covers all affected behaviors.

### 2.2 Update Steps  
1. Modify code or documentation.  
2. Update CHANGELOG.md.  
3. Update TEST_PLAN.md if behavior changed.  
4. Run the full test matrix.  
5. Perform formal self‑review.  
6. Commit with traceable rationale.  
7. Verify no drift from MY_RULES.md.

### 2.3 Post‑Update Requirements  
- Verify extension loads without warnings.  
- Verify paste behavior remains deterministic.  
- Verify modal behavior remains correct.  
- Verify header/footer validation behaves correctly.  
- Verify no new side effects exist.  
- Verify no UB was introduced.

---

## 3. Dependency Management  
Paste Wrong File Blocker must avoid dependencies unless absolutely required.

Rules:

- No runtime dependencies.  
- No network dependencies.  
- No dynamic imports.  
- No optional features.  
- No auto‑updating components.  
- No hidden state.  

If a dependency becomes necessary, MY_RULES.md must be updated first.

---

## 4. Regression Prevention  
To prevent regressions:

- Never modify paste logic without updating TEST_PLAN.md.  
- Never modify modal behavior without updating OPERATIONS.md.  
- Never modify invariants without updating MY_RULES.md.  
- Never modify architecture without updating ARCHITECTURE.md.  
- Never modify security boundaries without updating SECURITY.md.  
- Never modify header/footer rules without updating MY_RULES.md.  

Regression = UB.

---

## 5. Failure Handling  
If a maintenance action introduces unexpected behavior:

1. Stop all work.  
2. Document the failure.  
3. Identify the violated invariant.  
4. Revert the change.  
5. Update MY_RULES.md if doctrine was unclear.  
6. Re‑apply the change only after full review.  
7. Re‑run the full test matrix.

---

## 6. Long‑Term Stability Requirements  
Paste Wrong File Blocker must remain:

- small  
- deterministic  
- predictable  
- testable  
- auditable  
- structurally consistent  
- free of drift  
- compliant with header/footer validation rules  

Any change that increases complexity must be justified in writing and must strengthen safety.

---

## 7. Decommissioning Procedure  
If Paste Wrong File Blocker is ever retired:

1. Document the reason.  
2. Archive the repository.  
3. Preserve MY_RULES.md for historical reference.  
4. Disable the extension in VS Code.  
5. Remove from operator workflows.  
6. Ensure all historical artifacts remain readable and structurally valid.

---

###### End of Document \<C:/dev/repos/paste-wrong-file-blocker/MAINTENANCE.md\>
