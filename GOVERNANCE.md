###### Start of Document \<C:/dev/repos/paste-wrong-file-blocker/GOVERNANCE.md>

# Project Governance

Paste Wrong File Blocker is maintained according to deterministic, operator‑grade principles.  
This document defines how decisions are made, who has authority, and how changes enter the project.

---

## 1. Maintainer Authority

The project has a single maintainer:

**Brother Bill (@brotherbill)**  
MissionCriticalSoftware.dev

The maintainer has final authority over:

- Architectural decisions  
- Validation rule definitions  
- Error code taxonomy  
- Documentation standards  
- Release cadence  
- Acceptance or rejection of contributions  

All decisions must preserve determinism, clarity, and operator‑grade behavior.

---

## 2. Decision‑Making Model

### **2.1 Deterministic Governance**
All decisions must be:

- Explicit  
- Reproducible  
- Documented  
- Justified with observable behavior  

No decisions may rely on intuition, guesswork, or implicit assumptions.

### **2.2 Change Proposals**
Significant changes require:

1. A GitHub issue describing the proposal  
2. A justification grounded in deterministic behavior  
3. A clear description of impact  
4. Updated documentation if accepted  

The maintainer reviews and approves or rejects proposals.

---

## 3. Release Process

Releases follow this sequence:

1. All changes merged into `main`  
2. Version bump in `package.json`  
3. Update `CHANGELOG.md`  
4. Build VSIX  
5. Manual validation of paste behavior  
6. Publish to the VS Code Marketplace  

No automated publishing is permitted.

---

## 4. Scope of Maintainer Responsibilities

The maintainer is responsible for:

- Ensuring zero drift in validation logic  
- Maintaining documentation accuracy  
- Reviewing contributions  
- Enforcing the Code of Conduct  
- Managing security disclosures  
- Preserving architectural integrity  

---

## 5. Contributor Responsibilities

Contributors must:

- Follow deterministic coding practices  
- Avoid formatting churn  
- Provide reproducible steps for any reported issue  
- Update documentation when behavior changes  
- Respect the maintainer’s final decisions  

---

## 6. Conflict Resolution

If disagreements arise:

1. Discussion occurs in the relevant GitHub issue or PR  
2. Arguments must be technical, not personal  
3. The maintainer makes the final decision  
4. Decision is documented for future reference  

---

## 7. Amendments

This governance document may be updated by the maintainer.  
Changes must be documented in `CHANGELOG.md`.

---

###### End of Document \<C:/dev/repos/paste-wrong-file-blocker/GOVERNANCE.md>
