###### Start of Document \<C:/dev/repos/paste-wrong-file-blocker/ARCHITECTURE.md>

# Architecture Overview

Paste Wrong File Blocker is a deterministic VS Code extension designed to prevent accidental or unsafe paste operations.  
The architecture is intentionally minimal, explicit, and operator‑grade.

---

## 1. High‑Level Flow

```
User presses Ctrl+V
        ↓
Command: pasteShield.pasteWithValidation
        ↓
Clipboard text is retrieved
        ↓
validateHeaderFooter() runs full structural analysis
        ↓
If valid → perform actual paste
If invalid → block and show modal error
```

---

## 2. Components

### **2.1 extension.ts**
- Registers the command `pasteShield.pasteWithValidation`
- Reads clipboard contents
- Calls `validateHeaderFooter()`
- Displays modal error messages with deterministic error codes
- Executes the real paste only when validation passes

### **2.2 validation.ts**
- Contains all header/footer validation logic
- Implements strict rule set:
  - A1, A2, A3 (header errors)
  - B1, B2, B3, B4, B5, B6 (footer errors)
- Normalizes line endings
- Ensures footer is last line
- Ensures no duplicates
- Ensures exact match vs. trimmed match

### **2.3 .vscodeignore**
- Ensures VSIX packaging includes only compiled output
- Excludes TypeScript, maps, tests, and development artifacts

### **2.4 tsconfig.json**
- Compiles TypeScript from `src/` to `out/`
- Enforces strict mode
- Uses ES2020 target and CommonJS module format

---

## 3. Deterministic Error Codes

Each validation failure maps to a stable, documented code:

| Code | Meaning |
|------|---------|
| A1 | Missing header |
| A2 | Incorrect header |
| A3 | Malformed header |
| B1 | Missing footer |
| B2 | Incorrect footer |
| B3 | Malformed footer |
| B4 | Duplicate footer |
| B5 | Footer not last line |
| B6 | Footer present but header missing |

These codes are modal, user‑visible, and must never change without a major version bump.

---

## 4. Design Principles

### **4.1 Determinism**
Every paste attempt must produce the same result given the same clipboard content.

### **4.2 Zero Ambiguity**
Validation rules must be explicit, not heuristic.

### **4.3 Operator‑Grade Behavior**
- No silent failures  
- No hidden transformations  
- No auto‑correction  
- No guessing  

### **4.4 Minimal Surface Area**
The extension intentionally avoids:
- Network access  
- Background tasks  
- Telemetry  
- State persistence  

---

## 5. Extension Activation

The extension activates only when the command is invoked.  
There is no idle overhead and no background listeners.

---

## 6. Security Model

- No external communication  
- No file writes  
- No data storage  
- Clipboard is read once per paste attempt  
- All validation is local and synchronous  

---

## 7. Future Enhancements (Optional)

These are allowed but not required:

- Configurable header/footer strings  
- Workspace‑level policy files  
- Multi‑line header/footer blocks  
- Automated tests for validation rules  

All enhancements must preserve determinism and operator‑grade clarity.

---

###### End of Document \<C:/dev/repos/paste-wrong-file-blocker/ARCHITECTURE.md>
