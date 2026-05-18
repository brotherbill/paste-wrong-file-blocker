###### Start of Document \<C:/dev/repos/paste-shield/docs/doctrine/HEADER_FOOTER_DOCTRINE.md\>
# HEADER_FOOTER_DOCTRINE.md
# Header and Footer Doctrine  
### Canonical Structure, Placement, Syntax, and Invariants

This document defines the **only valid structure** for headers and footers in all PasteShield‑governed files.  
These rules are authoritative, deterministic, and immutable.

A file is considered **marked** if it contains a valid header, a valid footer, or both.

---

## 1. Canonical Header Block

### 1.1 Definition  
A header is a **single multi‑line block** located at the **very top** of the file.

### 1.2 Delimitation  
The header block ends at the **first occurrence** of:

```
\n
```
or
```
\r\n
```

Everything before that delimiter is part of the header.  
Nothing after that delimiter is part of the header.

### 1.3 Required Header Lines  
A valid header contains **exactly these three lines**, in this order:

1. **Header Identity Line**  
   ```
   \<path/filename\>
   ```

2. **Header Purpose Line**  
   ```
   # Purpose: <purpose>
   ```

3. **Header Location Line**  
   ```
   ###### Start of Document \<absolute-path/filename\>
   ```

### 1.4 Header Content Rules  
- No additional lines may appear inside the header.  
- No blank lines may appear inside the header.  
- No trailing whitespace is permitted.  
- No leading whitespace is permitted.  
- No indentation is permitted.  
- No alternative syntax is permitted.  
- No reordering is permitted.  
- No partial headers are permitted.

### 1.5 Identity Claims in Header  
Any `\<...\>` appearing inside the header is treated as an **identity claim**, even if:

- empty  
- malformed  
- garbage  
- contradictory  
- duplicated  
- wrong case  

All identity claims are **untrusted**.

---

## 2. Canonical Footer Block

### 2.1 Definition  
A footer is a **single multi‑line block** located at the **very bottom** of the file.

### 2.2 Delimitation  
The footer block begins at the **last occurrence** of:

```
\n
```
or
```
\r\n
```

Everything after that delimiter is part of the footer.  
Nothing before that delimiter is part of the footer.

### 2.3 Required Footer Line  
A valid footer contains **exactly one line**, and it must include **absolute path + filename**:

```
###### End of Document \<absolute-path/filename\>
```

Example for this file:

```
###### End of Document \<C:/dev/repos/paste-shield/docs/doctrine/HEADER_FOOTER_DOCTRINE.md\>
```

### 2.4 Footer Content Rules  
- No additional lines may appear inside the footer.  
- No blank lines may appear inside the footer.  
- No trailing whitespace is permitted.  
- No leading whitespace is permitted.  
- No indentation is permitted.  
- No alternative syntax is permitted.  
- No partial footers are permitted.

### 2.5 Identity Claims in Footer  
Any `\<...\>` inside the footer is treated as an **identity claim**.  
All identity claims are **untrusted**.

---

## 3. Structural Invariants

### 3.1 Exactly One Header  
A file may contain **zero or one** header.  
Multiple headers → **REJECT**.

### 3.2 Exactly One Footer  
A file may contain **zero or one** footer.  
Multiple footers → **REJECT**.

### 3.3 Header Must Be First  
Header must begin at **byte‑0**.  
Any content before the header → **REJECT**.

### 3.4 Footer Must Be Last  
Footer must end at the **final byte**.  
Any content after the footer → **REJECT**.

### 3.5 No Overlap  
Header and footer must not overlap.  
Overlap → **REJECT**.

### 3.6 No Fragments  
Partial header/footer fragments → **REJECT**.

---

## 4. Drift Rules

### 4.1 Header Drift  
Any deviation in:

- line order  
- syntax  
- spacing  
- capitalization  
- prefix  
- suffix  
- indentation  
- whitespace  
- identity claim formatting  

→ **REJECT**

### 4.2 Footer Drift  
Any deviation in:

- syntax  
- spacing  
- capitalization  
- prefix  
- suffix  
- indentation  
- whitespace  
- identity claim formatting  
- **path omission**  
- **filename omission**  

→ **REJECT**

### 4.3 Wrapper Drift  
Any deviation in:

- header placement  
- footer placement  
- delimiter placement  

→ **REJECT**

---

## 5. Validation Rules

### 5.1 Header/Footer Count  
- 0 or 1 header  
- 0 or 1 footer  
- Never more than 1 of each

### 5.2 Identity Claim Validation  
Every identity claim must be validated against:

- editor_identity_path  
- editor_identity_filename  

Case mismatch → **REJECT**  
Path mismatch → **REJECT**  
Filename mismatch → **REJECT**

### 5.3 Structural Validation  
Header/footer must be:

- correctly placed  
- correctly delimited  
- correctly formatted  
- drift‑free  

Any violation → **REJECT**

---

## 6. Interaction with A‑Series and B‑Series

### 6.1 A‑Series  
Destination file has **no header** and **no footer**.  
Buffer header/footer is **ignored** except for structural violations.

### 6.2 B‑Series  
Destination file has **header and/or footer**.  
Buffer header/footer must be validated.

### 6.3 Global Structural Rejection  
Multiple headers or footers → **REJECT**  
Malformed header/footer → **REJECT**  
Drift → **REJECT**

---

## 7. Closure

7.1 This doctrine is complete.  
7.2 No additional header/footer forms exist.  
7.3 No fallback logic exists.  
7.4 No implicit behavior exists.  
7.5 All header/footer behavior must be derived from this doctrine alone.

###### End of Document \<C:/dev/repos/paste-shield/docs/doctrine/HEADER_FOOTER_DOCTRINE.md\>
