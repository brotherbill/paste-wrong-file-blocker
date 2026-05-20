###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/INSTALLATION.md\>
# INSTALLATION  
Purpose: Defines deterministic installation and environment‑validation procedures for Paste Wrong File Blocker.

---

## 1. Preconditions  
Before installing Paste Wrong File Blocker:

- VS Code must be installed.  
- Operator must have permission to install extensions.  
- No other paste‑intercepting extensions may be active.  
- Environment must be stable (no pending VS Code updates).  
- Clipboard must contain safe test data.

---

## 2. Installation Procedure  

### 2.1 From Internal `.vsix` Package  
1. Obtain the approved `.vsix` file from the internal repository.  
2. Open VS Code.  
3. Open the Command Palette.  
4. Run:  
   ```
   Extensions: Install from VSIX...
   ```  
5. Select the Paste Wrong File Blocker `.vsix` file.  
6. Wait for installation to complete.  
7. Restart VS Code.

### 2.2 Verification After Installation  
After restart:

1. Open an editable text file.  
2. Type a few characters.  
3. Copy the entire document.  
4. Press `Ctrl+V`.  
5. Confirm that the modal appears.  
6. Press `Esc` to cancel.  
7. Confirm no mutation occurred.

If any step fails, installation is invalid.

---

## 3. Environment Validation  
Paste Wrong File Blocker requires a clean environment.

### 3.1 Conflicting Extensions  
Disable any extension that:

- overrides paste  
- modifies clipboard behavior  
- performs background text transformations  
- injects content automatically  

### 3.2 VS Code Settings  
The following settings must remain default:

- `editor.formatOnPaste`  
- `editor.formatOnType`  
- `editor.autoIndent`  

Paste Wrong File Blocker does not modify these settings.

---

## 4. Updating Paste Wrong File Blocker  

### 4.1 Update Procedure  
1. Disable the existing version.  
2. Uninstall it.  
3. Install the new `.vsix` using the procedure above.  
4. Restart VS Code.  
5. Perform verification steps.

### 4.2 Update Validation  
After updating:

- modal behavior must remain correct  
- paste behavior must remain deterministic  
- no new warnings may appear  
- no new dependencies may exist  

If any deviation occurs, the update is invalid.

---

## 5. Reinstallation Procedure  
Reinstall only when:

- installation is corrupted  
- modal behavior is inconsistent  
- VS Code updated unexpectedly  
- operator suspects UB  

Steps:

1. Uninstall Paste Wrong File Blocker.  
2. Restart VS Code.  
3. Install the `.vsix` again.  
4. Perform verification steps.

---

## 6. Uninstallation Procedure  
To uninstall:

1. Open Extensions panel.  
2. Locate “Paste Wrong File Blocker (Internal)”.  
3. Select **Uninstall**.  
4. Restart VS Code.  
5. Confirm paste behavior returns to default.

---

## 7. Installation Invariants  
Installation must always:

- produce deterministic behavior  
- introduce no background processes  
- introduce no dependencies  
- preserve modal behavior  
- preserve override rules  
- preserve operator safety  

Any installation that violates an invariant is invalid.

---

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/INSTALLATION.md\>
