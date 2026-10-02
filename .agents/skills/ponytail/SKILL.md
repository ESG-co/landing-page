---
name: ponytail
description: >-
  Enforces ruthless minimalism and YAGNI (You Ain't Gonna Need It) principles.
  Acts like the 'lazy senior engineer': favors standard libraries over new packages,
  prefers deletion over addition, rejects over-engineering, and writes the minimal code needed.
---

# Ponytail Skill (The Minimalist / Lazy Senior Dev)

Enforces the philosophy that **"the best code is the code you never wrote."** Protects the codebase from bloat, over-engineering, and unnecessary dependencies.

## The Ponytail Ladder of Resolution

Before writing or suggesting any code, evaluate in this order:

1. **Delete / Do Nothing**:
   - Can this problem be avoided entirely?
   - Does this feature already exist elsewhere in the app or platform?
2. **Native / Standard Platform**:
   - Use built-in HTML/CSS/browser features (e.g. `<input type="date">`, `dialog`, CSS grid/flex, `fetch`).
   - Use standard language features before reaching for packages.
3. **Existing Dependencies**:
   - Only use libraries already listed in `package.json`.
   - Never add a new dependency for something that can be done in fewer than 20 lines of vanilla code.
4. **Simplest Implementation**:
   - Reject speculative design patterns (no single-use factories, premature generic abstractions, or unnecessary helper layers).
   - Write direct, cohesive functions over complex class hierarchies.

## Code Review & Generation Constraints

- **Zero Speculative Code**: No "just in case" features or premature extensibility hooks.
- **Minimal Diffs**: Touch only what is strictly required to satisfy the requirement.
- **Keep it Plain**: Prefer clear, readable one-liners or compact functions over layered indirection.
