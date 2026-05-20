###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/MARKED_FILE_DOCTRINE.md\>
# MARKED_FILE_DOCTRINE.md
# Marked File Doctrine

This doctrine defines the structural, behavioral, and identity rules governing all Marked Files within the system.  
A Marked File is any file containing a valid identity wrapper (header + footer) and zero or more marked lines.  
All operations involving Marked Files must comply with this doctrine.

---

## 1. Definition of a Marked File

1.1 A Marked File is a file containing:
- one valid **Start of Document** header at byte‑0  
- one valid **End of Document** footer at the final byte  
- zero or more marked lines  

1.2 A file missing either header or footer is **not** a Marked File.  
1.3 A file containing multiple header or footer blocks is **invalid**.  
1.4 A file with mismatched header/footer identity is **invalid**.  
1.5 A file with corrupted or partial identity wrappers is **invalid**.  
1.6 A file with drift in header/footer syntax, placement, or identity is **invalid**.

---

## 2. Identity Wrapper Requirements

2.1 Header and footer must match **exactly** in:
- absolute path  
- filename  
- syntax  
- prefix  
- formatting  

2.2 Header must appear at **byte‑0** with no preceding whitespace.  
2.3 Footer must appear at the **final byte** with no trailing whitespace.  
2.4 Header/footer formatting is immutable across all files.  
2.5 No content may appear inside header or footer blocks.  
2.6 Identity wrappers must not drift across regenerations.  
2.7 Identity claims inside wrappers are untrusted and must be validated.

---

## 3. Marked Line Requirements

3.1 Marked lines must use the canonical prefix syntax.  
3.2 Marked lines must remain byte‑for‑byte identical across operations.  
3.3 Marked lines may not be wrapped, re‑indented, or reformatted.  
3.4 Marked lines may not appear inside header/footer blocks.  
3.5 Marked lines must not drift across sections.  
3.6 Marked lines must not be implicitly created or implicitly removed.  
3.7 Marked lines must not be reordered without explicit operator instruction.

---

## 4. Validity States

4.1 A **Valid Marked File** contains:
- a correct header  
- a correct footer  
- matching identity  
- no drift  
- no structural violations  

4.2 An **Invalid Marked File** contains any of:
- missing header or footer  
- mismatched identity  
- corrupted identity wrappers  
- extra identity wrappers  
- malformed marked lines  
- drift in wrapper or marked lines  
- structural violations  

4.3 Invalid Marked Files must not be used as replacement targets.  
4.4 Invalid Marked Files must not be used as replacement sources.  
4.5 Invalid states must not propagate.

---

## 5. Buffer Classification

5.1 A **Valid Marked Buffer** contains:
- one header  
- one footer  
- matching identity  
- no drift  
- no structural violations  

5.2 An **Invalid Marked Buffer** contains:
- corrupted header/footer  
- mismatched identity  
- drift  
- multiple headers or footers  
- partial wrappers  

5.3 An **Unmarked Buffer** contains:
- zero header  
- zero footer  
- no identity wrapper  

5.4 Buffer classification is deterministic and must not rely on heuristics.

---

## 6. Replacement Rules

6.1 Partial replacement into a Valid Marked File is permitted only when the buffer is structurally valid.  
6.2 Full‑file replacement is permitted only when:
- the buffer is a Valid Marked Buffer  
- the identity matches exactly  
- no drift exists  

6.3 Invalid buffers must never overwrite valid identity wrappers.  
6.4 Unmarked buffers may overwrite content only in unmarked regions.  
6.5 No replacement operation may create drift in identity or marked lines.  
6.6 No replacement operation may remove or alter header/footer blocks.

---

## 7. A‑Series and B‑Series Integration

7.1 A‑Series rules govern operations where the destination file is unmarked.  
7.2 B‑Series rules govern operations where the destination file is a Valid Marked File.  
7.3 All replacement operations must classify into exactly one A‑Series or B‑Series case.  
7.4 No operation may exist outside the A/B matrix.  
7.5 The A/B matrix is closed and complete.

---

## 8. Structural Integrity Requirements

8.1 No operation may remove or alter the header/footer blocks.  
8.2 No operation may introduce malformed structural markers.  
8.3 No operation may create ambiguous or partial identity states.  
8.4 No operation may produce a file lacking header/footer integrity.  
8.5 Structural integrity must be preserved across all transformations.  
8.6 Wrapper drift is a structural fault.

---

## 9. Determinism Requirements

9.1 All Marked File behavior must be deterministic.  
9.2 No probabilistic or heuristic behavior is permitted.  
9.3 All outcomes must be derivable from doctrine alone.  
9.4 No operator interpretation or improvisation is permitted.  
9.5 Regeneration must produce identical identity wrappers.  
9.6 Regeneration must not alter marked lines.

---

## 10. Prohibited States

10.1 Partially marked files.  
10.2 Files with mixed identity blocks.  
10.3 Files with orphaned structural markers.  
10.4 Files with ambiguous identity.  
10.5 Files with implicit or undefined behavior.  
10.6 Files with drift in header/footer or marked lines.

---

## 11. Enforcement

11.1 This doctrine governs all Marked Files.  
11.2 This doctrine governs all buffers used to modify Marked Files.  
11.3 This doctrine governs all replacement operations.  
11.4 Violations place the file or buffer into an invalid state.  
11.5 Invalid states must not propagate.

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/MARKED_FILE_DOCTRINE.md\>
