# SECURITY  
Purpose: Defines the security boundaries, guarantees, and prohibitions for Paste Wrong File Blocker.  
###### <C:/dev/repos/paste-wrong-file-blocker/SECURITY.md>

---

## 1. Security Model  
Paste Wrong File Blocker operates entirely within the VS Code extension sandbox.  
It performs:

- no network operations  
- no file I/O (beyond operator‑initiated writes)  
- no background execution  
- no hidden state  

All behavior is triggered explicitly by the operator through the `paste-wrong-file-blocker.paste` command.

Paste Wrong File Blocker is a **local, deterministic safety system**, not a monitoring tool or security scanner.

---

## 2. Threat Model  

### 2.1 Threats Paste Wrong File Blocker Mitigates  
Paste Wrong File Blocker protects against:

- accidental full‑document replacement  
- unintended buffer mutation  
- operator error under time pressure  
- clipboard misuse leading to data loss  
- malformed header/footer structures during paste  
- duplicate header/footer injection  

### 2.2 Threats Out of Scope  
Paste Wrong File Blocker does **not** protect against:

- malicious extensions  
- compromised VS Code installations  
- clipboard tampering by external processes  
- OS‑level attacks  
- supply‑chain attacks outside this repository  
- privilege escalation  
- sandbox escape attempts  

These are explicitly out of scope.

---

## 3. Security Guarantees  

### 3.1 No External Communication  
Paste Wrong File Blocker performs:

- no HTTP requests  
- no telemetry  
- no analytics  
- no remote logging  
- no external API calls  

### 3.2 No File System Writes  
Paste Wrong File Blocker never writes to disk except through:

- operator‑initiated file saves  
- VS Code’s own editor operations  

Paste Wrong File Blocker itself does not mutate files automatically.

### 3.3 No Clipboard Mutation  
Clipboard contents are:

- read  
- never modified  
- never replaced  
- never sanitized  

### 3.4 No Background Behavior  
Paste Wrong File Blocker contains:

- no timers  
- no background listeners  
- no idle tasks  
- no scheduled tasks  
- no hidden activation events  

### 3.5 No Privilege Escalation  
Paste Wrong File Blocker cannot:

- modify VS Code settings  
- modify system configuration  
- access privileged APIs  
- alter workspace trust  

### 3.6 Deterministic Modal Behavior  
Modal appears **only** when full‑document replacement is detected.  
Modal behavior is deterministic and documented.

---

## 4. Attack Surface Minimization  
Paste Wrong File Blocker minimizes attack surface by:

- using a single command (`paste-wrong-file-blocker.paste`)  
- avoiding global state  
- avoiding dynamic imports  
- avoiding reflection  
- avoiding `eval` or code generation  
- avoiding unbounded data structures  
- containing all logic in a single file (`extension.js`)  
- enforcing header/footer validation deterministically  

No additional entry points exist.

---

## 5. Override Security  
Override behavior is governed by Section 10 of MY_RULES.md.

Security requirements:

- Overrides require typed confirmation  
- No copy‑paste allowed  
- No autocomplete  
- No autofill  
- No shortcuts  
- No bypassing the modal  
- No partial writes  
- Paste is atomic  
- Override events are logged locally in VS Code’s output channel only  

Multiple overrides in a session require disabling Paste Wrong File Blocker.

---

## 6. Prohibited Behavior  
Paste Wrong File Blocker must never:

- send data off‑machine  
- store data persistently  
- modify files without operator action  
- introduce hidden state  
- run code outside the VS Code API  
- bypass the modal confirmation  
- perform automatic overrides  
- weaken header/footer validation rules  
- introduce background behavior  

Any violation is classified as:

```
CRITICAL: Loss of Determinism (LOD)
```

---

## 7. Security Review Requirements  
Every change to Paste Wrong File Blocker must undergo a security review verifying:

- no new attack surface was introduced  
- no new background behavior exists  
- no new external communication exists  
- all invariants remain intact  
- override rules remain intact  
- header/footer validation remains deterministic  
- no UB was introduced  

Security review is mandatory for:

- code changes  
- documentation changes affecting behavior  
- dependency changes  
- architectural changes  

---

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/tmp/extension/SECURITY.md\>
