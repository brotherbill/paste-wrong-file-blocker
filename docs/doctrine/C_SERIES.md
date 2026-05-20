###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/C_SERIES.md\>
# C_SERIES.md
### Purpose  
Defines the C‑series doctrine governing paste‑range normalization anomalies.

---------------------------------------------------------------------

## 12. C‑Series Paste‑Range Normalization Doctrine

### 12.0 Mission Context  
VS Code may internally normalize a paste operation by expanding the paste range to the
entire current line. This behavior is editor‑driven and not user‑driven. The extension
currently treats full‑line replacement as equivalent to full‑document replacement.

Violation classification:  
```
CRITICAL: Misclassified Replacement (MR)
```

---------------------------------------------------------------------

## 12.1 C1 — Full‑Line Replacement Misclassified as Full‑Document Replacement

### 12.1.0 Definition  
A paste operation where the user intends a partial insertion, but VS Code internally
normalizes the paste range to replace the entire current line. The extension interprets
this expanded range as a destructive full‑document overwrite, resulting in a false
positive block.

### 12.1.1 Trigger Conditions  
A C1 condition exists when all of the following are true:

- Cursor positioned at column 0 or at a line boundary  
- Multi‑line clipboard content pasted into a non‑empty line  
- VS Code expands the paste range to:  
  ```
  start‑of‑line → end‑of‑line
  ```  
- Extension interprets the expanded range as a full‑document replacement  

### 12.1.2 Observed Behavior  
- Ctrl‑V is blocked by the extension  
- Edit > Paste succeeds (bypasses extension)  
- User perceives the operation as a partial insertion  
- Extension perceives the operation as a destructive overwrite  

### 12.1.3 Safety Model Impact  
This condition produces a **false positive block**.  
The extension prevents a safe operation due to misclassification.

This is not UB.  
This is a deterministic misinterpretation of editor‑normalized ranges.

### 12.1.4 Required Invariants  
A correct implementation must:

1. Distinguish full‑line replacement from full‑document replacement  
2. Treat full‑line replacement as a **partial** replacement  
3. Block only when the entire document is replaced  
4. Preserve determinism across all paste vectors  

### 12.1.5 Postconditions  
When a C1 condition occurs:

- Document remains unchanged when using Ctrl‑V  
- Document updates normally when using menu‑paste  
- No mutation occurs under guarded paste paths  
- No cursor movement or undo pollution occurs  

---------------------------------------------------------------------

### 12.2 Next Steps  
- Define C1 E2E test procedure  
- Implement range‑classification fix  
- Validate against A‑series and B‑series invariants  
- Update CHANGELOG and RELEASE notes  

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/doctrine/C_SERIES.md\>
