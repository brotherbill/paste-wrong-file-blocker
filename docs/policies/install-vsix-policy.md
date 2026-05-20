###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/policies/install-vsix-policy.md\>
# install-vsix-policy.md
### Policy: Install `.vsix` Extensions Only Using External PowerShell

---------------------------------------------------------------------

## 0. Policy ID and Status

**Policy ID:** PWFB-POL-CLI-01
**Status:** Mandatory
**Effective Date:** 2026-05-20
**Enforcement Level:** CRITICAL

---------------------------------------------------------------------

## 1. Policy Statement

All installation of `.vsix` packages SHALL be performed **exclusively from external PowerShell**.
Installation from within VS Code (integrated terminal, command palette, tasks, debug terminals) is **prohibited**.

Violation classification:
```
CRITICAL: Nondeterministic Installation Path (NIP)
```

---------------------------------------------------------------------

## 2. Rationale

VS Code may launch under multiple identities:

- taskbar pin
- Start Menu
- file association
- workspace link
- integrated terminal

These identities do **not** guarantee shared:

- extension host
- extension registry
- profile
- user‑data directory

Installing from inside VS Code can silently:

- fail
- install into a detached instance
- install into a different profile
- produce no output
- leave the extension invisible

External PowerShell installation is deterministic and reproducible.

---------------------------------------------------------------------

## 3. Required Procedure

Operators SHALL install `.vsix` packages using:

```powershell
code --install-extension <file>.vsix
```

Example:

```powershell
code --install-extension paste-wrong-file-blocker-0.0.5.vsix
```

---------------------------------------------------------------------

## 4. Compliance

Failure to follow this policy may result in:

- invisible extensions
- phantom installs
- mismatched profiles
- inconsistent behavior
- corrupted testing environments

Compliance is mandatory for all PWFB development and release workflows.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/policies/install-vsix-policy.md\>
