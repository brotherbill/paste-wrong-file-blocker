# TEST_PLAN  
Purpose: Defines deterministic procedures for verifying all PasteShield behaviors.  
###### <C:/dev/repos/paste-shield/TEST_PLAN.md>

---

## 1. Preconditions  
All tests require:

- PasteShield installed and enabled  
- VS Code stable with no pending updates  
- No other paste‑intercepting extensions active  
- A clean workspace  
- Clipboard containing only the test input  
- All `.md` files in workspace contain valid header/footer structure  

Failure to meet preconditions invalidates the test.

---

## 2. Test Environment  
- VS Code latest stable  
- Windows, macOS, or Linux  
- Fresh editor window  
- One active text editor unless otherwise specified  
- No background tasks running  

---

## 3. Core Invariants Under Test  
All tests verify:

- determinism  
- reproducibility  
- zero UB  
- zero background behavior  
- correct modal behavior  
- correct override behavior  
- correct header/footer validation  
- correct normalization rules  
- correct duplicate‑header/footer rejection  
- correct full‑document replacement detection  

---

## 4. Normal Paste Behavior Tests  

### 4.1 Simple Paste  
**Steps:**  
1. Type `abc`.  
2. Copy `xyz`.  
3. Paste.

**Expected:**  
- `xyz` inserted at cursor  
- No modal  
- No warnings  
- No UB  

---

### 4.2 Multi‑Line Paste  
**Steps:**  
1. Type `hello`.  
2. Copy:  
   ```
   one
   two
   three
   ```  
3. Paste.

**Expected:**  
- Lines inserted exactly  
- No modal  
- No UB  

---

## 5. Blocked Paste Behavior Tests  

### 5.1 Full‑Document Replacement Detection  
**Steps:**  
1. Document contains:  
   ```
   alpha
   beta
   gamma
   ```  
2. Copy the entire document  
3. Select the entire document  
4. Paste

**Expected:**  
- Modal appears  
- No mutation  
- No cursor movement  
- No undo entry  

---

### 5.2 Blocked Paste Without Override  
**Steps:**  
1. Trigger full‑document replacement  
2. Press `Esc` or close modal  

**Expected:**  
- Paste blocked  
- Document unchanged  
- No UB  

---

## 6. Override Behavior Tests  

### 6.1 Successful Override  
**Steps:**  
1. Trigger full‑document replacement  
2. In modal, type:  
   ```
   confirmPasteOverride
   ```  
3. Submit  

**Expected:**  
- Paste occurs atomically  
- Status bar shows override message  
- Event logged  
- No UB  

---

### 6.2 Failed Override  
**Steps:**  
1. Trigger full‑document replacement  
2. Type anything except `confirmPasteOverride`  

**Expected:**  
- Paste blocked  
- No mutation  
- No UB  

---

## 7. Modal Content Tests  

### 7.1 Modal Fields  
Modal must display:

- expected file identity  
- actual file identity  
- reason for block  
- violated invariant  
- override instructions  

**Expected:**  
- All fields present  
- No missing or extra fields  
- No drift  

---

## 8. Header/Footer Validation Tests  
(Aligned with MY_RULES.md Section 11)

### 8.1 Whitespace‑Tolerant Header  
**Clipboard:**  
```
   <C:/dev/repos/paste-shield/MY_RULES.md>    
```

**Steps:**  
1. Paste into empty `.md` file  

**Expected:**  
- Paste allowed  
- Header normalized to:  
  ```
  <C:/dev/repos/paste-shield/MY_RULES.md>
  ```  
- No UB  

---

### 8.2 Whitespace‑Tolerant Footer  
**Clipboard:**  
```
######    End   of   Document    <MY_RULES.md>     
```

**Steps:**  
1. Paste into `.md` file containing a valid header  

**Expected:**  
- Paste allowed  
- Footer normalized to:  
  ```
  ###### End of Document <MY_RULES.md>
  ```  
- No UB  

---

### 8.3 Duplicate Header Rejection  
**Clipboard:**  
```
<C:/dev/repos/paste-shield/MY_RULES.md>
<C:/dev/repos/paste-shield/OTHER.md>

(body)

###### End of Document <MY_RULES.md>
```

**Steps:**  
1. Paste into empty `.md` file  

**Expected:**  
- Paste blocked  
- Error: “Multiple header lines detected.”  
- No mutation  
- No cursor movement  
- No undo entry  

---

### 8.4 Duplicate Footer Rejection  
**Clipboard:**  
```
<C:/dev/repos/paste-shield/MY_RULES.md>

(body)

###### End of Document <MY_RULES.md>
###### End of Document <OTHER.md>
```

**Steps:**  
1. Paste into empty `.md` file  

**Expected:**  
- Paste blocked  
- Error: “Multiple footer lines detected.”  
- No mutation  
- No UB  

---

### 8.5 Header/Footer Mixed Whitespace and Validity  
**Clipboard:**  
```
   <C:/dev/repos/paste-shield/TEST_PLAN.md>

(body)

######   End   of   Document   <TEST_PLAN.md>
```

**Steps:**  
1. Paste into empty `.md` file  

**Expected:**  
- Paste allowed  
- Header normalized  
- Footer normalized  
- No UB  

---

## 9. Regression Tests  

### 9.1 No Background Behavior  
**Steps:**  
1. Leave VS Code idle for 5 minutes  

**Expected:**  
- No logs  
- No events  
- No timers  
- No UB  

---

### 9.2 No Hidden State  
**Steps:**  
1. Perform several pastes  
2. Restart VS Code  
3. Paste again  

**Expected:**  
- Behavior identical  
- No state carried across sessions  

---

## 10. Success Criteria  
PasteShield passes the test suite when:

- all normal pastes succeed  
- all blocked pastes block  
- all overrides require typed confirmation  
- all header/footer rules behave deterministically  
- duplicate header/footer lines are rejected  
- normalization is correct  
- no UB occurs  
- no drift from doctrine exists  

---

###### End of Document <TEST_PLAN.md>
