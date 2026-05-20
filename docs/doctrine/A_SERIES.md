###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/A_SERIES.md\>
# A_SERIES.md
# A‑Series Doctrine  
### Paste Operations Into an Unmarked Destination File

The A‑Series governs all paste operations where the **destination file is unmarked**.  
An unmarked destination file contains:

- no Start‑of‑Document wrapper  
- no End‑of‑Document wrapper  
- no identity claims  
- no Marked Lines  

The destination file still has **real identity** (editor‑provided absolute path + filename), but contains **no identity claims**.

The A‑Series is closed, complete, and contains no fallback logic.

---

## 1. Classification Preconditions

A paste operation is classified into the A‑Series when **all** of the following are true:

1.1 Destination file contains **no Start‑of‑Document wrapper**.  
1.2 Destination file contains **no End‑of‑Document wrapper**.  
1.3 Destination file contains **no identity claims**.  
1.4 Destination file contains **no Marked Lines**.  
1.5 Destination file is structurally valid under global invariants.  
1.6 Paste buffer may be marked or unmarked.  
1.7 Destination identity (editor‑provided) is authoritative.

If **any** of these conditions fail, the operation must be classified into the B‑Series.

---

## 2. A‑Series State Space

The A‑Series contains exactly **three** cases:

- **A1** — Unmarked Buffer → Unmarked Destination  
- **A2** — Marked Buffer (Start‑of‑Document Only) → Unmarked Destination  
- **A3** — Marked Buffer (End‑of‑Document Only or Start+End) → Unmarked Destination  

No other A‑Series cases exist.  
No “otherwise” branches exist.  
The A‑Series is fully closed.

---

## 3. Case A1  
### Unmarked Buffer → Unmarked Destination

**Definition:**  
Paste buffer contains **no Start wrapper**, **no End wrapper**, **no identity claims**.

**Rules:**  
A1.1 Paste is always permitted.  
A1.2 No identity validation is required.  
A1.3 No structural validation is required.  
A1.4 POST‑PASTE VALUE is computed normally.  
A1.5 No identity claims exist on either side.  
A1.6 Observable result: **ACCEPT**.

**Rationale:**  
Pure text → pure text. No identity risk.

---

## 4. Case A2  
### Marked Buffer (Start‑of‑Document Only) → Unmarked Destination

**Definition:**  
Paste buffer contains a **Start‑of‑Document wrapper**, but **no End‑of‑Document wrapper**.

**Rules:**  
A2.1 Paste is permitted.  
A2.2 Identity claims in the buffer are ignored.  
A2.3 Destination identity is authoritative.  
A2.4 POST‑PASTE VALUE may contain a Start wrapper at the paste location.  
A2.5 No identity validation is required.  
A2.6 Observable result: **ACCEPT**.

**Rationale:**  
Destination is unmarked; buffer claims cannot override real identity.

---

## 5. Case A3  
### Marked Buffer (End‑of‑Document Only or Start+End) → Unmarked Destination

**Definition:**  
Paste buffer contains:

- an End‑of‑Document wrapper only, or  
- both Start‑of‑Document and End‑of‑Document wrappers  

**Rules:**  
A3.1 Paste is permitted.  
A3.2 Identity claims in the buffer are ignored.  
A3.3 Destination identity remains authoritative.  
A3.4 POST‑PASTE VALUE may contain Start/End wrappers at the paste location.  
A3.5 No identity validation is required.  
A3.6 Observable result: **ACCEPT**.

**Rationale:**  
Destination is unmarked; buffer claims cannot create or override identity.

---

## 6. Prohibited A‑Series States

6.1 Destination file containing partial Start/End wrapper fragments.  
6.2 Destination file containing malformed identity claims.  
6.3 Destination file containing mixed or ambiguous structural markers.  
6.4 Destination file containing any Marked Lines.  
6.5 Paste buffer containing multiple Start wrappers or multiple End wrappers (→ automatic REJECT per global rules).

---

## 7. Determinism Requirements

7.1 A‑Series classification must be deterministic.  
7.2 No probabilistic or heuristic behavior is permitted.  
7.3 All outcomes must be derivable from doctrine alone.  
7.4 No operator interpretation is permitted.  
7.5 POST‑PASTE VALUE must be computed exactly once.

---

## 8. Observable Outcomes

All valid A‑Series cases produce:

- does_dest_file_support_pasting_with_identity = **true**  
- does_paste_buffer_support_pasting_with_identity = **true**  
- Observable result = **ACCEPT**

No A‑Series case produces REJECT unless the paste buffer violates global structural rules (e.g., multiple Start wrappers, multiple End wrappers).

---

## 9. Closure

9.1 The A‑Series contains exactly three cases.  
9.2 No additional cases may be added without doctrinal revision.  
9.3 No fallback logic is permitted.  
9.4 No implicit behavior is permitted.  
9.5 The A‑Series is closed under all valid inputs.

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/A_SERIES.md\>
