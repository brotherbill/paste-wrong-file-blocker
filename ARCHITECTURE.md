###### Start of Document \<C:/dev/repos/paste-shield/ARCHITECTURE.md\>
# ARCHITECTURE  
Purpose: Defines the structural components and operational invariants of PasteShield.

---

## 1. System Overview  
PasteShield is a deterministic VS Code extension that intercepts paste operations and prevents accidental full‑document replacement.  
The system contains:

- no background processes  
- no telemetry  
- no timers  
- no implicit behavior  
- no hidden state  

All behavior is explicitly triggered by operator action.

---

## 2. Components  

### 2.1 Command Layer  
**File:** `extension.js`  
**Responsibilities:**  
- Register the `paste-shield.paste` command.  
- Intercept paste operations.  
- Evaluate invariants.  
- Normalize header/footer lines.  
- Reject duplicate header/footer lines.  
- Detect full‑document replacement.  
- Present modal dialogs when invariants are violated.  
- Perform atomic paste on override.

**Inputs:**  
- Active editor  
- Clipboard contents  
- Document contents  

**Outputs:**  
- Normal paste  
- Blocked paste  
- Override modal  
- Status bar confirmation  

---

### 2.2 Manifest Layer  
**File:** `package.json`  
**Responsibilities:**  
- Declare extension metadata  
- Define activation events  
- Define commands and keybindings  
- Contain no logic  
- Contain no side effects  

---

### 2.3 Doctrine Layer  
**File:** `MY_RULES.md`  
**Responsibilities:**  
- Define repository‑wide invariants  
- Define safety model  
- Define audience model  
- Define UB boundaries  
- Define header/footer validation rules  
- Override all other artifacts  

---

### 2.4 Documentation Layer  
**Files:**  
- `README.md`  
- `CONTRIBUTING.md`  
- `CHANGELOG.md`  
- `TEST_PLAN.md`  
- `ARCHITECTURE.md`  
- `SECURITY.md`  
- `OPERATIONS.md`  
- `MAINTENANCE.md`  
- `SUPPORT.md`  
- `RELEASE.md`  
- `INSTALLATION.md`  

**Responsibilities:**  
- Provide operator‑grade clarity  
- Document behavior, constraints, and procedures  
- Contain no hidden rules  
- Contain no drift from MY_RULES.md  
- Follow Mandatory Elements exactly  

---

## 3. Operational Flow  

### 3.1 Activation  
1. VS Code loads the extension.  
2. `paste-shield.paste` becomes available.  
3. No background behavior occurs.  
4. No state is initialized beyond command registration.

---

### 3.2 Paste Interception  
1. Operator triggers paste.  
2. PasteShield reads:  
   - clipboard text  
   - document text  
3. PasteShield performs:  
   - header/footer normalization  
   - duplicate header/footer detection  
   - full‑document replacement detection  
4. PasteShield selects one of three paths:  
   - **Normal Paste**  
   - **Blocked Paste**  
   - **Override Paste (atomic)**  

---

### 3.3 Modal Behavior  
Modal appears only when full‑document replacement is detected.  
Modal requires explicit operator confirmation.  
No mutation occurs until override is confirmed.  
Override requires exact typed string:  
```
confirmPasteOverride
```

---

## 4. Invariants  

### 4.1 Safety Invariants  
- No background execution  
- No clipboard mutation  
- No automatic overrides  
- No partial writes  
- No cursor movement on blocked paste  
- No undo‑stack pollution on blocked paste  
- No UB introduced by extension behavior  

---

### 4.2 Structural Invariants  
- All `.md` files contain correct header and footer  
- Header/footer lines accept whitespace‑tolerant normalization  
- Duplicate header/footer lines are rejected  
- JSON files remain pure JSON  
- All documentation follows Mandatory Elements  
- All behavior is deterministic  
- All components obey MY_RULES.md  

---

## 5. Prohibited Architecture  
The following are forbidden:

- Hidden state  
- Implicit activation  
- Telemetry  
- Network access  
- Background timers  
- Mutation outside explicit operator action  
- Behavior not documented in MY_RULES.md  
- Any feature that introduces UB  

---

## 6. Future Expansion Boundary  
Any new feature must:

1. Define rules in MY_RULES.md **before** implementation  
2. Preserve all existing invariants  
3. Avoid introducing UB  
4. Be testable using deterministic procedures  
5. Maintain zero background behavior  
6. Maintain operator‑grade clarity  

---

###### End of Document \<C:/dev/repos/paste-shield/ARCHITECTURE.md\>
