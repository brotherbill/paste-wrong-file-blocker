###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/B_SERIES.md\>
# B_SERIES.md
# B‑Series Doctrine  
### Paste Operations Into a Marked Destination File

The B‑Series governs all paste operations where the **destination file is marked**.  
A marked destination file contains a valid identity wrapper:

- `###### Start of Document \<absolute-path/filename\>` at byte‑0  
- `###### End of Document \<absolute-path/filename\>` at final byte  

The destination file has **real identity** (editor‑provided absolute path + filename).  
Identity claims inside the paste buffer are **untrusted** and must be validated.

The B‑Series is closed, complete, and contains no fallback logic.

---

## 1. Classification Preconditions

A paste operation is classified into the B‑Series when **any** of the following are true:

1.1 Destination file contains a valid Start‑of‑Document wrapper.  
1.2 Destination file contains a valid End‑of‑Document wrapper.  
1.3 Destination file contains one or more identity claims.  
1.4 Destination file contains one or more Marked Lines.  
1.5 Destination file is structurally valid under all invariants.  
1.6 Paste buffer may be marked or unmarked.  
1.7 Destination identity is authoritative and must be used for validation.

If none of these conditions are true, the operation must be classified into the A‑Series.

---

## 2. B‑Series State Space

The B‑Series contains exactly **six** cases:

- **B1** — Unmarked Buffer → Marked Destination  
- **B2** — Marked Buffer (Header Only) → Marked Destination  
- **B3** — Marked Buffer (Footer Only) → Marked Destination  
- **B4** — Marked Buffer (Header+Footer, Matching Identity) → Marked Destination  
- **B5** — Marked Buffer (Header+Footer, Conflicting Identity) → Marked Destination  
- **B6** — Marked Buffer (Header+Footer, Matching Identity, No Drift) → ACCEPT (Terminal Case)

No other B‑Series cases exist.  
No “otherwise” branches exist.  
The B‑Series is fully closed.

---

## 3. Case B1  
### Unmarked Buffer → Marked Destination

**Definition:**  
Paste buffer contains **no Start‑of‑Document wrapper**, **no End‑of‑Document wrapper**, **no identity claims**.

**Rules:**  
B1.1 Paste is permitted.  
B1.2 No identity validation is required.  
B1.3 Destination identity remains authoritative.  
B1.4 POST‑PASTE VALUE must preserve all Marked Lines.  
B1.5 Observable result: **ACCEPT**.

**Rationale:**  
Pure text cannot violate identity invariants.

---

## 4. Case B2  
### Marked Buffer (Header Only) → Marked Destination

**Definition:**  
Paste buffer contains a **Start‑of‑Document wrapper**, but **no End‑of‑Document wrapper**.

**Rules:**  
B2.1 Paste is permitted.  
B2.2 Identity claims in the buffer must be validated.  
B2.3 If any claim conflicts with destination identity → **REJECT**.  
B2.4 If all claims match destination identity → **ACCEPT**.  
B2.5 POST‑PASTE VALUE must preserve all Marked Lines.

**Rationale:**  
Header‑only claims cannot override destination identity.

---

## 5. Case B3  
### Marked Buffer (Footer Only) → Marked Destination

**Definition:**  
Paste buffer contains an **End‑of‑Document wrapper**, but **no Start‑of‑Document wrapper**.

**Rules:**  
B3.1 Paste is permitted.  
B3.2 Identity claims in the buffer must be validated.  
B3.3 If any claim conflicts with destination identity → **REJECT**.  
B3.4 If all claims match destination identity → **ACCEPT**.  
B3.5 POST‑PASTE VALUE must preserve all Marked Lines.

**Rationale:**  
Footer‑only claims cannot override destination identity.

---

## 6. Case B4  
### Marked Buffer (Header+Footer, Matching Identity) → Marked Destination

**Definition:**  
Paste buffer contains both wrappers.  
All identity claims match destination identity.

**Rules:**  
B4.1 Paste is permitted.  
B4.2 Identity claims must be validated.  
B4.3 If all claims match → proceed.  
B4.4 POST‑PASTE VALUE must preserve all Marked Lines.  
B4.5 Observable result: **ACCEPT**.

**Rationale:**  
Matching identity claims are allowed but not authoritative.

---

## 7. Case B5  
### Marked Buffer (Header+Footer, Conflicting Identity) → Marked Destination

**Definition:**  
Paste buffer contains both wrappers.  
One or more identity claims **conflict** with destination identity.

**Rules:**  
B5.1 Paste is rejected.  
B5.2 Conflicting identity claims cannot be merged.  
B5.3 POST‑PASTE VALUE must not be applied.  
B5.4 Observable result: **REJECT**.

**Rationale:**  
Conflicting identity claims represent a structural safety violation.

---

## 8. Case B6 (Terminal Case)  
### Marked Buffer (Header+Footer, Matching Identity, No Drift) → ACCEPT

**Definition:**  
Paste buffer contains both wrappers.  
All identity claims match destination identity.  
No drift exists in:

- Start‑of‑Document wrapper  
- End‑of‑Document wrapper  
- Marked Lines  
- identity claims  
- canonical formatting  

**Rules:**  
B6.1 Paste is permitted.  
B6.2 No further validation is required.  
B6.3 POST‑PASTE VALUE is accepted without modification.  
B6.4 Observable result: **ACCEPT** (terminal).

**Rationale:**  
This is the ideal case: identity‑aligned, drift‑free, structurally valid.

---

## 9. Prohibited B‑Series States

9.1 Destination file containing malformed Start/End wrappers.  
9.2 Destination file containing corrupted identity claims.  
9.3 Paste buffer containing multiple Start wrappers or multiple End wrappers.  
9.4 Paste buffer containing malformed identity claims.  
9.5 Any drift in identity, structure, or Marked Lines.  
9.6 Any wrapper drift in placement, syntax, or formatting.

---

## 10. Determinism Requirements

10.1 B‑Series classification must be deterministic.  
10.2 No probabilistic or heuristic behavior is permitted.  
10.3 All outcomes must be derivable from doctrine alone.  
10.4 No operator interpretation is permitted.  
10.5 POST‑PASTE VALUE must be computed exactly once.

---

## 11. Observable Outcomes

Valid B‑Series cases produce:

- **ACCEPT** for B1, B2 (matching), B3 (matching), B4, B6  
- **REJECT** for B2 (conflict), B3 (conflict), B5  

No other outcomes exist.

---

## 12. Closure

12.1 The B‑Series contains exactly six cases.  
12.2 No additional cases may be added without doctrinal revision.  
12.3 No fallback logic is permitted.  
12.4 No implicit behavior is permitted.  
12.5 The B‑Series is closed under all valid inputs.

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/B_SERIES.md\>
