# Project Rules: Efficiency & Code Standards

This project adheres to **Ponytail**, **Caveman**, **Humanizer**, **Design-Taste-Frontend**, and **Minimalist UI** principles to maximize token efficiency, communication density, and design quality.

## 1. Ponytail Principles (Architecture & Code)
- **Ruthless YAGNI**: Never write speculative code or premature abstractions.
- **Native First**: Prefer built-in language and web platform APIs over adding new dependencies.
- **Minimal Diffs**: Keep changes focused only on what is strictly needed. Prefer deletion and simplification over new layers.

## 2. Caveman Principles (Communication)
- **Zero Fluff**: Cut pleasantries, conversational filler, and verbose play-by-play narrations.
- **Direct & Terse**: Communicate directly using technical, compact sentences.
- **Preserve Accuracy**: Keep all file paths, symbols, code blocks, diffs, and commands 100% accurate and complete.

## 3. Humanizer Principles (Content & Copywriting)
- **Zero AI Tells**: Eliminate throat-clearing openers ("Let's dive in", "Here's what you need to know"), staged defenses, and dramatic one-liner aphorisms.
- **Direct Assertions**: Avoid "not X, but Y" constructions; use direct, factual phrasing.
- **Natural Rhythm**: Break artificial triads (lists of exactly 3 items), vary sentence rhythm, and eliminate LLM buzzwords (*delve, tapestry, pivotal, seamless, unleash*).

## 4. Design-Taste-Frontend Principles (Visual Strategy & Anti-Slop)
- **Design Read First**: Infer page kind, audience, and aesthetic before coding. Output one-line Design Read: `"Reading this as: <page kind> for <audience>, with a <vibe> language, leaning toward <design system/aesthetic>."`
- **Calibrate Dials**: Set `DESIGN_VARIANCE` (1-10), `MOTION_INTENSITY` (1-10), and `VISUAL_DENSITY` (1-10) to guide layout asymmetry and motion.
- **Anti-Default Discipline**: Reject AI-slop defaults (purple gradients, centered hero on dark mesh, 3 identical feature cards, Inter + slate-900).

## 5. Minimalist UI Protocol (Editorial Design System)
- **Palette**: Strictly aligned with project design tokens from `globals.css`:
  - **Body / Foreground**: `#090c13` (Off-black charcoal for crisp legibility, avoiding pure `#000000`).
  - **Secondary Surface**: `#f6f6f6` (Light neutral for subtle card backgrounds, dividers, and micro-surfaces; paired with `--secondary-foreground` `oklch(0.208 0.042 265.755)`).
  - **Primary Accent / CTA**: `#003ca6` (Deep cobalt/royal blue reserved strictly for key interactive CTAs, active indicators, and high-value accents; text paired with `--primary-foreground` `oklch(0.984 0.003 247.858)`). No full-bleed saturated hero backgrounds.
- **Typography**: High-contrast pairings. Primary sans (Geist, SF Pro, Helvetica Neue), editorial serif for titles (Newsreader, Instrument Serif, Playfair Display) with tight tracking (`-0.02em` to `-0.04em`), and monospace for data/kbd.
- **Crisp Geometry**: Asymmetrical bento grids, subtle/non-existent shadows (< 0.05 opacity), crisp radius (`4px`-`12px`), no pill buttons, no emojis as UI icons.
