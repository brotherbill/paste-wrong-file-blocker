###### Start of Document \<C:/dev/repos/paste-shield/docs/doctrine/MARKED_LINE_RULES.md\>
# MARKED_LINE_RULES.md
# Marked Line Rules  
### Canonical Definition, Syntax, Behavior, and Invariants

Marked Lines are the smallest structural unit within a Marked File.  
They are immutable, byte‑stable, and must survive all paste operations without drift.  
These rules define the **only valid form** and **permitted behaviors** of Marked Lines.

---

## 1. Definition of a Marked Line

1.1 A Marked Line is any line beginning with the canonical prefix:

```
%%%
```

1.2 The prefix must appear at **byte‑0** of the line.  
1.3 No whitespace, indentation, or characters may precede the prefix.  
1.4 A Marked Line extends from the prefix to the end of the line.  
1.5 A Marked Line may contain arbitrary content after the prefix.  
1.6 A Marked Line is **not** a wrapper and carries no identity semantics.

---

## 2. Canonical Syntax

2.1 The Marked Line prefix is immutable:

```
%%%
```

2.2 No alternative prefixes are permitted.  
2.3 No suffix markers are permitted.  
2.4 No multi‑line marked blocks exist.  
2.5 A Marked Line must not be empty; at least one character must follow the prefix.  
2.6 Trailing whitespace is permitted but discouraged; if present, it becomes part of the immutable byte sequence.

---

## 3. Placement Rules

3.1 Marked Lines may appear anywhere **except** inside header/footer blocks.  
3.2 Marked Lines may appear consecutively or interspersed with unmarked content.  
3.3 Marked Lines may not appear before the header or after the footer.  
3.4 Marked Lines may not be used to simulate wrapper boundaries.

---

## 4. Drift Rules

4.1 Marked Lines must remain **byte‑for‑byte identical** across all operations.  
4.2 Any mutation in:
- prefix  
- spacing  
- indentation  
- capitalization  
- content  
- trailing whitespace  

→ **REJECT**

4.3 Reordering Marked Lines without explicit operator instruction → **REJECT**.  
4.4 Implicit creation or removal of Marked Lines → **REJECT**.

---

## 5. Behavioral Rules

5.1 Marked Lines must be preserved during:
- partial replacements  
- full‑file replacements  
- buffer merges  
- regeneration  
- formatting operations  

5.2 Marked Lines must not be:
- wrapped  
- reflowed  
- auto‑formatted  
- syntax‑highlighted into a different structure  
- collapsed or expanded  

5.3 Marked Lines are **content**, not metadata.  
They do not affect identity, structure, or classification.

---

## 6. Interaction with A‑Series and B‑Series

6.1 In A‑Series operations (unmarked destination), Marked Lines in the buffer are treated as plain text.  
6.2 In B‑Series operations (marked destination), Marked Lines must be preserved exactly.  
6.3 Marked Lines do not influence Series classification.  
6.4 Marked Lines do not override identity or wrapper rules.

---

## 7. Structural Integrity

7.1 Marked Lines must not appear inside header/footer blocks.  
7.2 Marked Lines must not be used to emulate structural markers.  
7.3 Marked Lines must not drift across sections.  
7.4 Marked Lines must not be split or merged.

---

## 8. Determinism Requirements

8.1 Marked Line handling must be deterministic.  
8.2 No probabilistic or heuristic behavior is permitted.  
8.3 All outcomes must be derivable from doctrine alone.  
8.4 Regeneration must not alter Marked Lines.  
8.5 POST‑PASTE VALUE must preserve all Marked Lines exactly once.

---

## 9. Closure

9.1 These rules define the complete Marked Line system.  
9.2 No additional Marked Line forms exist.  
9.3 No fallback logic exists.  
9.4 No implicit behavior exists.  
9.5 All Marked Line behavior must be derived from this doctrine alone.

###### End of Document \<C:/dev/repos/paste-shield/docs/doctrine/MARKED_LINE_RULES.md\>
