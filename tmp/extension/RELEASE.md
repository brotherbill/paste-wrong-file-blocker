# RELEASE  
Purpose: Defines the procedures, requirements, and invariants for releasing new versions of Paste Wrong File Blocker.  
###### <C:/dev/repos/paste-wrong-file-blocker/RELEASE.md>

---

## 1. Release Philosophy  
Paste Wrong File Blocker releases must prioritize:

- stability  
- determinism  
- safety  
- zero UB  
- zero drift from doctrine  
- minimalism  
- structural correctness (Mandatory Elements, header/footer rules)  

A release is not a feature dump.  
A release is a **verified, deterministic state transition**.

---

## 2. Release Preconditions  
A release may occur only when:

1. All documentation is up to date.  
2. All invariants remain intact.  
3. All tests pass deterministically.  
4. No background behavior exists.  
5. No new dependencies were introduced.  
6. CHANGELOG.md reflects all changes.  
7. Version number is incremented correctly.  
8. All `.md` files pass header/footer validation.  
9. No UB is present in any component.

If any precondition fails, the release is blocked.

---

## 3. Versioning Rules  
Paste Wrong File Blocker uses deterministic semantic versioning:

```
MAJOR.MINOR.PATCH
```

- **MAJOR** — doctrinal change or architectural change  
- **MINOR** — new safety feature or modal behavior change  
- **PATCH** — bug fix, documentation update, or internal correction  

Rules:

- No version may be skipped.  
- No version may be reused.  
- No version may be published without CHANGELOG.md entry.  
- No version may introduce drift from MY_RULES.md.

---

## 4. Release Steps  

### 4.1 Preparation  
1. Update CHANGELOG.md.  
2. Update version in package.json.  
3. Verify all documentation is aligned with MY_RULES.md.  
4. Verify header/footer correctness across all `.md` files.  
5. Run full test matrix.  
6. Perform formal self‑review.  
7. Confirm no UB exists.

### 4.2 Packaging  
1. Build extension package (`.vsix`).  
2. Verify package integrity.  
3. Confirm no extraneous files are included.  
4. Confirm no sensitive data is included.  
5. Confirm no generated artifacts violate Mandatory Elements.

### 4.3 Verification  
1. Install the `.vsix` locally.  
2. Restart VS Code.  
3. Perform normal paste tests.  
4. Perform full‑document replacement tests.  
5. Perform override tests.  
6. Confirm modal behavior.  
7. Confirm header/footer normalization.  
8. Confirm duplicate header/footer rejection.  
9. Confirm no regressions.

### 4.4 Publication  
Paste Wrong File Blocker is internal‑only.  
Publication consists of:

- storing the `.vsix` in the internal repository  
- tagging the release in version control  
- updating release notes  
- verifying release metadata is deterministic  

No external distribution is permitted.

---

## 5. Emergency Release Protocol  
If a critical defect is discovered:

1. Stop all development.  
2. Document the defect.  
3. Identify the violated invariant.  
4. Fix the defect.  
5. Update CHANGELOG.md.  
6. Increment PATCH version.  
7. Run full test matrix.  
8. Package and publish emergency release.  
9. Notify operators.  
10. Verify no UB remains.

Emergency releases must be minimal, isolated, and fully traceable.

---

## 6. Release Invariants  
Every release must:

- preserve determinism  
- preserve safety  
- preserve architecture  
- preserve security boundaries  
- preserve override rules  
- preserve header/footer validation rules  
- preserve operator expectations  
- introduce no UB  
- introduce no drift  

Any release that violates an invariant is invalid.

---

## 7. Release Authority  
Only maintainers may perform releases.  
Maintainers must:

- follow this document exactly  
- document rationale for each release  
- ensure no drift from doctrine  
- ensure no UB is introduced  
- ensure all Mandatory Elements remain correct  

No exceptions.

---

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/tmp/extension/RELEASE.md\>
