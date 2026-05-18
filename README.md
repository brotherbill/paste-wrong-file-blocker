###### Start of Document \<C:/dev/repos/paste-wrong-file-blocker/README.md\>
# Paste Wrong File Blocker (Internal Only)  
Purpose: Prevent catastrophic full‑document replacement during paste operations inside VS Code.

---

## 1. Overview  
Paste Wrong File Blocker is an internal‑only VS Code extension that intercepts paste operations and prevents accidental full‑document replacement.  
It functions as a deterministic safety diode for operator workflows on Windows and on the System76 machine when accessed through VS Code.

Paste Wrong File Blocker contains:

- no telemetry  
- no dependencies  
- no background behavior  
- no network communication  
- no hidden state  

This version implements the **core safety model**, including:

- full‑document replacement detection  
- override‑modal enforcement  
- header/footer normalization  
- duplicate header/footer rejection  

It does **not** implement the full sovereign‑grade protocol (hashing, invariants, identity matrix, multi‑cursor safety).

---

## 2. Scope  

Paste Wrong File Blocker applies only to:

- VS Code on Windows  
- VS Code on Ubuntu (via RustDesk)

Paste Wrong File Blocker does **not** apply to:

- Benny’s machine  
- Rider  
- system‑wide clipboard operations  
- sovereign‑access workflows  
- public release scenarios  

---

## 3. Features  

- Intercepts `Ctrl+V` inside VS Code  
- Detects full‑document replacement attempts  
- Detects duplicate header/footer lines  
- Normalizes header/footer whitespace  
- Prompts operator for override confirmation  
- Blocks paste unless explicitly approved  
- Performs atomic paste on override  
- Does not modify clipboard contents  
- Does not run background services  
- Zero telemetry  
- Zero dependencies  
- Zero external communication  

---

## 4. Directory Structure  

```
paste-wrong-file-blocker/
├── build.ts
├── esbuild.config.ts
├── generate-tsconfig-json.js
├── generate-tsconfig-json.ts
├── tsconfig.ts
├── out/
└── src/
    └── extension.ts
```

This repository uses a **deterministic build pipeline**:

- TypeScript source‑of‑truth  
- deterministic `tsconfig.json` emitter  
- deterministic esbuild bundling  
- no dynamic imports  
- no runtime dependencies  

All generated artifacts are stable and reproducible.

---

## 5. Installation (Internal Only)

### Option A — Run in Extension Host  
1. Open the `paste-wrong-file-blocker` folder in VS Code.  
2. Press **F5** to launch the Extension Host environment.

### Option B — Install as a packaged extension  
1. Package the extension:

   ```
   vsce package
   ```

2. Install the generated `.vsix`:

   ```
   code --install-extension paste-wrong-file-blocker-X.Y.Z.vsix
   ```

3. Restart VS Code.

Paste Wrong File Blocker activates automatically.

---

## 6. Usage  

Paste Wrong File Blocker replaces the default paste command.  
Pressing **Ctrl+V** inside an editor triggers the shield.

### Behavior  
- If the paste does **not** replace the entire document → paste proceeds normally  
- If the paste **would** replace the entire document → modal appears  
- If operator cancels → paste is blocked  
- If operator types the override string → paste proceeds atomically  

Header/footer behavior:

- Whitespace‑tolerant header/footer lines are normalized  
- Multiple header lines → paste blocked  
- Multiple footer lines → paste blocked  

---

## 7. Expected Behavior  

1. Paste operations are intercepted only inside VS Code editors.  
2. Full‑document replacement attempts trigger a modal.  
3. Operator must explicitly approve destructive pastes.  
4. No background processes are created.  
5. No system‑level changes occur.  
6. No telemetry or network communication is performed.  
7. No clipboard mutation occurs.  
8. No file mutation occurs unless operator approves.  
9. Header/footer validation is deterministic.  

---

## 8. Notes  

This is a temporary internal tool.  
A future version may implement the full sovereign‑grade protocol, including:

- header/body/tail segmentation  
- invariant enforcement  
- hashing  
- identity matrix  
- multi‑cursor safety  
- sovereign‑grade protection  

This version exists only to protect the operator during early development.

---

###### End of Document \<C:/dev/repos/paste-wrong-file-blocker/README.md\>
