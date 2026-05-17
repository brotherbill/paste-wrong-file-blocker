# CHANGELOG  
Purpose: Documents all intentional, reviewed, traceable changes to PasteShield.  
###### <C:/dev/repos/paste-shield/CHANGELOG.md>

---

## Versioning Rules  
PasteShield uses deterministic semantic versioning:

```
MAJOR.MINOR.PATCH
```

- **MAJOR** — doctrinal or architectural change  
- **MINOR** — new safety feature or modal behavior change  
- **PATCH** — bug fix, documentation update, or internal correction  

Every entry must include:

- reason for change  
- rule or invariant affected  
- expected impact  
- preserved invariants  
- intentionally altered invariants (if any)  

No silent changes.  
No skipped versions.  
No retroactive edits.

---

## 0.1.0 — Initial Internal Release  
**Date:** YYYY‑MM‑DD  
**Type:** MINOR  
**Summary:**  
Initial internal‑only release of PasteShield.

**Changes:**  
- Added deterministic paste interception  
- Added full‑document replacement detection  
- Added override modal with typed confirmation  
- Added header/footer normalization  
- Added duplicate header/footer rejection  
- Added atomic override paste  
- Added zero‑background‑behavior guarantee  
- Added internal‑only packaging and activation rules  

**Invariants Preserved:**  
- determinism  
- zero UB  
- no background behavior  
- no clipboard mutation  
- no external communication  
- no dependencies  
- operator‑initiated behavior only  

**Impact:**  
Enables safe paste operations during early development on Windows and System76 environments.

---

## 0.1.1 — Documentation Alignment Update  
**Date:** YYYY‑MM‑DD  
**Type:** PATCH  
**Summary:**  
Aligned documentation with MY_RULES.md and ARCHITECTURE.md.

**Changes:**  
- Updated README.md  
- Updated INSTALLATION.md  
- Updated OPERATIONS.md  
- Updated SECURITY.md  
- Updated SUPPORT.md  
- Updated TEST_PLAN.md  
- Added missing invariants  
- Added header/footer validation doctrine references  

**Invariants Preserved:**  
- determinism  
- documentation consistency  
- zero drift  
- zero UB  

**Impact:**  
Documentation now fully reflects actual behavior and doctrinal requirements.

---

## 0.1.2 — Header/Footer Validation Refinement  
**Date:** YYYY‑MM‑DD  
**Type:** PATCH  
**Summary:**  
Refined whitespace‑tolerant normalization and duplicate detection.

**Changes:**  
- Improved normalization logic  
- Strengthened duplicate header/footer rejection  
- Updated modal messaging for clarity  
- Updated TEST_PLAN.md to include new cases  

**Invariants Preserved:**  
- determinism  
- safety  
- zero UB  
- operator clarity  

**Impact:**  
Ensures consistent behavior across all `.md` documents.

---

## Future Versions  
All future versions must follow:

- Change Control Protocol  
- Release Protocol  
- Documentation Alignment Rules  
- Deterministic Versioning Rules  

No release may occur without updating this file.

---

###### End of Document <CHANGELOG.md>
