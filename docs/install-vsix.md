###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/install-vsix.md\>
# install-vsix.md
### Purpose: Defines the mandatory procedure for installing `.vsix` extensions using external PowerShell only

---------------------------------------------------------------------

## 0. Scope and Authority

### 0.0 Mission Context
VS Code maintains multiple process identities depending on launch method.
These identities do **not** guarantee shared user‑data directories, profiles, or extension registries.
Installing `.vsix` files from inside VS Code introduces nondeterminism.

Violation classification:
```
CRITICAL: Loss of Determinism (LOD)
```

---

### 0.1 Total Coverage
This doctrine governs all `.vsix` installation workflows for:

- Paste Wrong File Blocker
- Any future extensions in this repository

---

### 0.2 Doctrinal Supremacy
If any installation method conflicts with this document:

1. This document wins
2. The method is invalid
3. The workflow must be corrected
4. No exceptions exist

---

## 1. Mandatory Rule

All `.vsix` installation operations SHALL be performed **exclusively from external PowerShell**, never from:

- VS Code’s integrated terminal
- VS Code’s command palette
- VS Code tasks
- VS Code debug terminals
- Any shell launched inside VS Code

Violation classification:
```
CRITICAL: Nondeterministic Installation Path (NIP)
```

---------------------------------------------------------------------

## 2. Rationale

Installing from inside VS Code can silently:

- install into a detached instance
- install into a different profile
- fail without error
- open a phantom window
- produce no output
- leave the extension invisible

External PowerShell installation is:

- deterministic
- reproducible
- verifiable
- stable

---------------------------------------------------------------------

## 3. Operator Procedure

### 3.1 Preconditions
- External PowerShell session
- `.vsix` file present in working directory
- VS Code installed and accessible via `code` CLI

### 3.2 Installation Command
```powershell
code --install-extension paste-wrong-file-blocker-\<version\>.vsix
```

Example:
```powershell
code --install-extension paste-wrong-file-blocker-0.0.5.vsix
```

### 3.3 Expected Output
```
Installing extensions...
Extension 'paste-wrong-file-blocker-0.0.5.vsix' was successfully installed.
```

If this output does **not** appear, the installation did **not** occur.

---------------------------------------------------------------------

## 4. Verification

### 4.1 List Installed Extensions
```powershell
code --list-extensions
```

The extension SHALL appear in the list.

### 4.2 Success Condition
- Extension visible in VS Code
- Commands registered
- Activation events functional

---------------------------------------------------------------------

## 5. Postconditions

Operators must know:

1. `.vsix` installs from inside VS Code are prohibited
2. External PowerShell installation is mandatory
3. Verification is required
4. Deviations produce LOD or NIP

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/install-vsix.md\>
