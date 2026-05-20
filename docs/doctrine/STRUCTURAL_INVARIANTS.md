###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/STRUCTURAL_INVARIANTS.md\>
# STRUCTURAL_INVARIANTS.md
# Structural Invariants  
### Non‑Negotiable Rules Governing All Marked and Unmarked Files

Structural invariants define the **immutable, safety‑critical rules** that govern how files are recognized, validated, and transformed within the Paste Wrong File Blocker system.  
These invariants apply globally across all doctrines, all Series classifications, and all replacement operations.

No tool, operator, or regeneration step may violate these invariants.

---

## 1. Wrapper Placement Invariants

1.1 **Header must begin at byte‑0.**  
No whitespace, BOM, or characters may precede it.

1.2 **Footer must end at the final byte.**  
No trailing whitespace or characters may follow it.

1.3 **Header and footer must not overlap.**  
Any overlap → **REJECT**.

1.4 **Header and footer must appear exactly once each** in a valid Marked File.  
Zero or one of each is allowed; more than one → **REJECT**.

1.5 **Wrapper drift is a structural fault.**  
Any deviation in placement, spacing, indentation, or prefix → **REJECT**.

---

## 2. Wrapper Syntax Invariants

2.1 All wrappers must use the canonical Ugly‑Betty syntax:

```
###### Start of Document \<absolute-path/filename\>
###### End of Document \<absolute-path/filename\>
```

2.2 Angle brackets must be **escaped** (`\<...\>`).  
Unescaped `<...>` is invalid wrapper syntax.

2.3 Wrapper prefix (`###### Start of Document` / `###### End of Document`) is immutable.  
Any variation → **REJECT**.

2.4 Path and filename must match exactly between header and footer.  
Mismatch → **REJECT**.

2.5 No additional content may appear inside wrapper lines.  
Extra tokens → **REJECT**.

---

## 3. Identity Invariants

3.1 Identity is defined exclusively by the wrapper path + filename.  
No other mechanism may define identity.

3.2 Identity claims inside wrappers are **untrusted** and must be validated against the editor‑provided identity.

3.3 Identity must match exactly in:
- case  
- slashes  
- drive letter  
- directory structure  
- filename  

3.4 Identity drift across regenerations is prohibited.  
Any drift → **REJECT**.

---

## 4. Marked Line Invariants

4.1 Marked lines must use the canonical prefix syntax (defined elsewhere).  
Deviation → **REJECT**.

4.2 Marked lines must remain byte‑for‑byte identical across operations.  
Any mutation → **REJECT**.

4.3 Marked lines may not appear inside header/footer blocks.  
Violation → **REJECT**.

4.4 Marked lines must not be implicitly created or removed.  
Implicit behavior → **REJECT**.

4.5 Marked lines must not drift in:
- indentation  
- spacing  
- prefix  
- ordering  

Drift → **REJECT**.

---

## 5. Structural Integrity Invariants

5.1 No operation may produce a file lacking header/footer integrity.  
Missing wrapper → **REJECT**.

5.2 No operation may introduce malformed structural markers.  
Malformed wrapper → **REJECT**.

5.3 No operation may create ambiguous or partial identity states.  
Partial wrapper → **REJECT**.

5.4 No operation may produce a file with mixed identity blocks.  
Multiple identities → **REJECT**.

5.5 No operation may produce orphaned structural markers.  
Orphaned header/footer → **REJECT**.

5.6 Structural invariants override all other rules.  
If structure fails, the file fails.

---

## 6. Determinism Invariants

6.1 All structural validation must be deterministic.  
No heuristics.

6.2 All structural outcomes must be derivable from doctrine alone.  
No operator interpretation.

6.3 POST‑PASTE VALUE must be computed exactly once.  
No multi‑pass or probabilistic behavior.

6.4 Regeneration must produce identical wrappers and marked lines.  
No drift allowed.

---

## 7. Closure

7.1 These invariants are complete.  
7.2 No additional structural rules exist outside this document.  
7.3 No fallback logic exists.  
7.4 No implicit behavior exists.  
7.5 All structural behavior must be derived from these invariants alone.

###### End of Document \<C:/dev/repos/paste-wrong-file-blocker/docs/doctrine/STRUCTURAL_INVARIANTS.md\>
###### Start of Document \<C:/dev/repos/paste-wrong-file-blocker/docs/doctrine/STRUCTURAL_INVARIANTS.md\>
# STRUCTURAL_INVARIANTS.md
# Structural Invariants  
### Non‑Negotiable Rules Governing All Marked and Unmarked Files

Structural invariants define the **immutable, safety‑critical rules** that govern how files are recognized, validated, and transformed within the Paste Wrong File Blocker system.  
These invariants apply globally across all doctrines, all Series classifications, and all replacement operations.

No tool, operator, or regeneration step may violate these invariants.

---

## 1. Wrapper Placement Invariants

1.1 **Header must begin at the first semantic line of operator‑authored content.**  
Compiler‑inserted preamble lines (e.g., `"use strict";`, shebangs, bundler boilerplate) do **not** count as content and must be ignored during header detection.

1.2 **Footer must appear at the last semantic line of operator‑authored content.**  
Trailing whitespace, CRLF, sourcemap pragmas, or compiler‑inserted footer lines must be ignored during footer detection.

1.3 **Header and footer must not overlap.**  
Any overlap → **REJECT**.

1.4 **Header and footer must appear exactly once each** in a valid Marked File.  
Zero or one of each is allowed; more than one → **REJECT**.

1.5 **Wrapper drift is a structural fault.**  
Any deviation in placement, spacing, indentation, or prefix → **REJECT**.

---

## 2. Wrapper Syntax Invariants

2.1 All wrappers must use the canonical Ugly‑Betty syntax:

```
###### Start of Document \<absolute-path/filename\>
###### End of Document \<absolute-path/filename\>
```

2.2 Angle brackets must be **escaped** (`\<...\>`).  
Unescaped `<...>` is invalid wrapper syntax.

2.3 Wrapper prefix (`###### Start of Document` / `###### End of Document`) is immutable.  
Any variation → **REJECT**.

2.4 Path and filename must match exactly between header and footer.  
Mismatch → **REJECT**.

2.5 No additional content may appear inside wrapper lines.  
Extra tokens → **REJECT**.

---

## 3. Identity Invariants

3.1 Identity is defined exclusively by the wrapper path + filename.  
No other mechanism may define identity.

3.2 Identity claims inside wrappers are **untrusted** and must be validated against the editor‑provided identity.

3.3 Identity must match exactly in:
- case  
- slashes  
- drive letter  
- directory structure  
- filename  

3.4 Identity drift across regenerations is prohibited.  
Any drift → **REJECT**.

---

## 4. Marked Line Invariants

4.1 Marked lines must use the canonical prefix syntax (defined elsewhere).  
Deviation → **REJECT**.

4.2 Marked lines must remain byte‑for‑byte identical across operations.  
Any mutation → **REJECT**.

4.3 Marked lines may not appear inside header/footer blocks.  
Violation → **REJECT**.

4.4 Marked lines must not be implicitly created or removed.  
Implicit behavior → **REJECT**.

4.5 Marked lines must not drift in:
- indentation  
- spacing  
- prefix  
- ordering  

Drift → **REJECT**.

---

## 5. Structural Integrity Invariants

5.1 No operation may produce a file lacking header/footer integrity.  
Missing wrapper → **REJECT**.

5.2 No operation may introduce malformed structural markers.  
Malformed wrapper → **REJECT**.

5.3 No operation may create ambiguous or partial identity states.  
Partial wrapper → **REJECT**.

5.4 No operation may produce a file with mixed identity blocks.  
Multiple identities → **REJECT**.

5.5 No operation may produce orphaned structural markers.  
Orphaned header/footer → **REJECT**.

5.6 Structural invariants override all other rules.  
If structure fails, the file fails.

---

## 6. Determinism Invariants

6.1 All structural validation must be deterministic.  
No heuristics.

6.2 All structural outcomes must be derivable from doctrine alone.  
No operator interpretation.

6.3 POST‑PASTE VALUE must be computed exactly once.  
No multi‑pass or probabilistic behavior.

6.4 Regeneration must produce identical wrappers and marked lines.  
No drift allowed.

---

## 7. Closure

7.1 These invariants are complete.  
7.2 No additional structural rules exist outside this document.  
7.3 No fallback logic exists.  
7.4 No implicit behavior exists.  
7.5 All structural behavior must be derived from these invariants alone.

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/STRUCTURAL_INVARIANTS.md\>
