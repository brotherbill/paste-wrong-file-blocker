# OPERATIONS  
Purpose: Defines operator procedures for using, controlling, and recovering PasteShield.  
###### <C:/dev/repos/paste-shield/OPERATIONS.md>

---

## 1. Operator Responsibilities  
The operator must:

- Trigger paste actions intentionally.  
- Read modal dialogs fully before responding.  
- Follow override procedures exactly as written.  
- Avoid relying on implicit behavior.  
- Report any deviation from expected behavior.  
- Maintain a clean environment (no conflicting extensions).  
- Ensure `.md` documents contain valid header/footer structure.

PasteShield does not compensate for operator negligence.

---

## 2. Normal Operation  

### 2.1 Triggering Paste  
PasteShield is invoked when the operator performs:

- `Ctrl+V`  
- Edit → Paste  
- `paste-shield.paste` command  

### 2.2 Expected Behavior  
- If the paste does **not** replace the entire document, the paste proceeds normally.  
- If the paste **would** replace the entire document, a modal appears.  
- No background behavior occurs.  
- No clipboard mutation occurs.  
- Header/footer lines are normalized if present.

---

## 3. Blocked Paste Behavior  

### 3.1 Conditions for Blocking  
PasteShield blocks the paste when:

- Clipboard text would overwrite the entire file.  
- Clipboard text matches the full document exactly.  
- Clipboard text matches except for whitespace differences.  
- Clipboard text contains **multiple header lines**.  
- Clipboard text contains **multiple footer lines**.

### 3.2 Blocked Paste Guarantees  
When a paste is blocked:

- No mutation occurs.  
- No cursor movement occurs.  
- No partial writes occur.  
- Undo stack remains unchanged.  
- Operator must acknowledge the modal before continuing.  
- No background state is created.

---

## 4. Override Procedure  

### 4.1 When Overrides Are Allowed  
Overrides are allowed only when:

- The operator intentionally wants to replace the entire document.  
- The operator understands the risk.  
- The operator confirms the action manually.  
- The modal explicitly requests confirmation.

### 4.2 Override Steps  
1. Modal appears.  
2. Operator reads the modal.  
3. Operator types the exact string:  
   ```
   confirmPasteOverride
   ```  
4. PasteShield performs the paste atomically.  
5. PasteShield logs the event.  
6. Status bar displays confirmation.

### 4.3 Override Restrictions  
- No copy‑paste.  
- No autocomplete.  
- No autofill.  
- No shortcuts.  
- No bypassing the modal.  
- No repeated overrides; disable PasteShield instead.

---

## 5. Disabling PasteShield  
PasteShield may be disabled only when:

- Multiple overrides are required in a single session, or  
- The operator is performing bulk document replacement.

### 5.1 Disable Procedure  
1. Open VS Code Extensions panel.  
2. Locate “PasteShield (Internal)”.  
3. Select **Disable**.

### 5.2 Re‑Enable Procedure  
1. Open VS Code Extensions panel.  
2. Select **Enable**.  
3. PasteShield resumes full safety immediately.

---

## 6. Failure Recovery  

### 6.1 Modal Appears Unexpectedly  
- Verify clipboard contents.  
- Verify document contents.  
- Verify no duplicate header/footer lines exist.  
- Reattempt paste.  
- If behavior persists, file a defect.

### 6.2 Paste Does Not Occur  
- Confirm PasteShield is enabled.  
- Confirm modal was acknowledged.  
- Confirm no other extension overrides paste.  
- Retry operation.

### 6.3 Unexpected Mutation  
This is a critical defect.  
Stop using PasteShield immediately and document:

- steps taken  
- clipboard contents  
- document state  
- expected vs actual behavior  
- whether header/footer normalization occurred  

---

## 7. Success Condition  
PasteShield is operating correctly when:

- Normal pastes occur without modal.  
- Full‑document replacements trigger modal.  
- Overrides require typed confirmation.  
- Header/footer normalization behaves deterministically.  
- Duplicate header/footer lines cause rejection.  
- No UB is observed.  
- No background behavior exists.

---

###### End of Document <OPERATIONS.md>
