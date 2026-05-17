# CONTRIBUTING  
Purpose: Defines the required procedures and invariants for contributing to PasteShield.  
###### <C:/dev/repos/paste-shield/CONTRIBUTING.md>

---

## 1. Doctrine Alignment Requirement  
All contributions must comply with MY_RULES.md.  
If any artifact conflicts with MY_RULES.md, the artifact is incorrect and must be corrected before merging.  
No contribution may introduce ambiguity, drift, or undefined behavior.

---

## 2. Change Control Requirements  
Every change must be:

1. **Intentional** — no casual edits.  
2. **Reviewed** — formal self‑review is mandatory.  
3. **Traceable** — commit messages must document:  
   - the reason for the change  
   - the rule or behavior being modified  
   - the expected impact  
   - preserved invariants  
   - intentionally altered invariants (if any)  
4. **Stable** — no change may weaken safety guarantees.  
5. **Reversible** — rollback must be trivial.

No silent changes are permitted.

---

## 3. Code Contribution Requirements  
All code must be:

- Minimal  
- Deterministic  
- Free of hidden behavior  
- Free of undocumented assumptions  
- Consistent with the safety model  
- Aligned with MY_RULES.md  

Comments must explain **why** when the why is not obvious.  
Comments must never contradict behavior.  
No background behavior is permitted.

---

## 4. Documentation Requirements  
Documentation must:

- Use operator‑grade language  
- Avoid humor, filler, or metaphor  
- State conditions and consequences explicitly  
- Assume zero prior knowledge  
- Follow Mandatory Elements exactly  
- Contain no hidden rules  
- Contain no drift from MY_RULES.md  

All `.md` files must include correct header and footer lines.

---

## 5. File Structure Requirements  
All non‑exempt code files (`.js`, `.ts`, `.d`, `.cs`, `.e`, `.yaml`, `.yml`, `.toml`, `.ini`) must include:

- Header Identity Line  
- Footer Termination Line  

JSON and other syntax‑restricted formats are exempt.

Header/footer lines must follow:

- whitespace‑tolerant normalization  
- duplicate header/footer rejection  

A valid document contains exactly one header and exactly one footer.

---

## 6. Prohibited Contributions  
The following are not permitted:

- Introducing UB  
- Adding features without defining rules in MY_RULES.md first  
- Modifying MY_RULES.md without full change‑control protocol  
- Adding undocumented behavior  
- Adding background processes  
- Adding telemetry  
- Adding network access  
- Adding implicit activation  
- Adding external communication  
- Adding hidden state  

Any contribution that weakens determinism is rejected.

---

## 7. Merge Preconditions  
A change may be merged only when:

1. All invariants are preserved.  
2. All documentation is updated.  
3. All safety rules remain intact.  
4. No ambiguity or drift is introduced.  
5. Tests are updated when behavior changes.  
6. The contributor can state the operational impact of the change.  
7. The change is fully aligned with MY_RULES.md.

---

###### End of Document <CONTRIBUTING.md>
