# Design Styleguide — Minimal Typographic

A functional, text-first design system. No decoration for its own sake. Every visual decision earns its place by improving readability or communicating hierarchy.

---

## Philosophy

- **Typography is the interface.** Font weight, opacity, and size do all the work that color, icons, and borders would otherwise do.
- **Restraint over expression.** Default to removing rather than adding. If an element doesn't carry meaning, it shouldn't exist.
- **Content leads.** Layout serves content, not the other way around. Components are shaped around data, not the other way around.
- **One axis of motion.** Entrance animations are subtle and directional (fade + translate). No bounce, no scale, no decorative transitions.

---

## Stack Defaults

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS v4 |
| Font | Geist (via `next/font/google`) |
| Animation | Framer Motion — entrance only |
| Language | TypeScript |

---

## Color

A neutral palette with no accent color. Hierarchy is communicated through opacity layers on a single foreground color.

```css
--color-background:      #ffffff;   /* page background */
--color-foreground:      #0a0a0a;   /* primary text */
--color-muted:           #f5f5f5;   /* subtle fills */
--color-muted-foreground:#737373;   /* secondary / label text */
--color-border:          #e5e5e5;   /* dividers */
```

**In use (Tailwind):**

| Role | Class |
|---|---|
| Primary text | `text-foreground` or `text-black` |
| Body / secondary copy | `text-black/60` or `text-muted-foreground` |
| Labels / metadata | `text-black/40` |
| Dividers | `border-border` or `border-black/10` |
| Inverted (CTA) | `bg-black text-white` |

**Rules:**
- No color used for semantics (no red errors, no green success) in UI chrome — reserve color for data visualisation only.
- Hover states use opacity reduction (`hover:opacity-50`) or a shift from muted to foreground, never a color change.
- Dark mode is a deliberate future decision, not an afterthought. Design light-first.

---

## Typography

One font, one size, variable weight.

| Role | Class |
|---|---|
| All body text | `text-sm` (14px) |
| Section label / heading | `text-sm font-medium` |
| Name / primary identifier | `text-sm font-medium` (or `font-semibold` for a hero context) |
| Body copy | `text-sm leading-relaxed text-black/60` |
| Metadata / secondary | `text-sm text-black/40` |

**Rules:**
- No `text-base`, `text-lg`, `text-xl`, or above. A single text size forces hierarchy to come from weight and opacity, not scale.
- `leading-relaxed` on any paragraph longer than one line.
- Avoid bold for decoration — use it only to identify the primary label in a group.

---

## Layout

Single-column, centered, width-constrained. No grid, no sidebar.

```
max-w-lg mx-auto px-6 py-16
```

- `max-w-lg` (512px) — comfortable reading width, works from mobile upward.
- `px-6` — consistent horizontal breathing room.
- `py-16` — generous vertical space; the page doesn't need to feel dense.
- Top padding on the first content block is larger on desktop: `pt-16 md:pt-40`.

**Spacing scale (gap):**

| Context | Value |
|---|---|
| Between label and sub-label | `gap-1` – `gap-2` |
| Within a section (items) | `gap-2` – `gap-4` |
| Between bio paragraphs | `gap-4` |
| Between major sections | `gap-16` |
| Page-level vertical rhythm | `gap-16` |

Never use arbitrary spacing values. Every gap should map to a Tailwind step.

---

## Components

### Section

A titled group of content. Label sits above children, separated by `gap-3`.

```tsx
<Section title="Projects">
  {/* list of items */}
</Section>
```

- Label: `text-sm font-medium`
- No borders, no background, no padding

---

### Project Card (CTA)

Used for primary, navigable items the reader should act on. High contrast to stand out from the surrounding text.

```
bg-black text-white rounded-xl py-3 px-4
hover:bg-black/75 transition-colors
```

- Two lines: a bold label + a muted description (`text-white/50`)
- Full-width block, stacked vertically
- Rounded corners (`rounded-xl`) are the only decorative shape in the system

---

### Index Link

A horizontal row linking to secondary content. Communicates both the item title and its category without needing a column header.

```
[title] -------- [category]
```

- Title: `text-muted-foreground`, shifts to `text-foreground` on hover
- Fill: a `border-b` rule that lightens to `border-border` on hover
- Category: right-aligned, same color shift on hover
- Padding: `py-2.5` per row — touch-friendly without being spacious

---

### Motion Provider

All pages enter with a single entrance animation. No exit animations.

```ts
initial: { opacity: 0, y: 8 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.4, ease: "easeOut" }
```

- `y: 8` — barely perceptible lift, just enough to feel intentional
- 400ms — fast enough to not delay the user, slow enough to be felt
- Applied once at the page level, not to individual elements

---

## Interaction

| Pattern | Implementation |
|---|---|
| Hover on text links | `hover:opacity-50 transition-opacity` |
| Hover on index links | foreground/muted color shift via group |
| Hover on project cards | `hover:bg-black/75 transition-colors` |
| Focus states | Browser default — don't suppress them |

**Rules:**
- Transitions are always `transition-colors` or `transition-opacity`. No transform transitions on interactive elements (those are reserved for entrance).
- Never transition layout properties (height, width, margin).
- Cursor is `cursor-pointer` only on non-`<a>`/`<button>` elements that are interactive.

---

## What This System Excludes

Deliberately absent:

- Icons (use text labels instead)
- Navigation bar or persistent header
- Cards with borders or shadows
- Color accents or brand color
- Modals or overlays
- Tooltips
- Loaders or skeleton states
- Responsive breakpoints beyond a single `md:` padding adjustment

If any of these feel necessary, treat it as a signal to reconsider the information architecture first.

---

## Applying This to a New Application

This system scales to more complex apps by extending in one direction at a time:

1. **More data density** — introduce a second column layout, but keep `max-w-lg` for single-column sections. Never break the reading width.
2. **More hierarchy** — add a second text size (`text-xs` for metadata, `text-base` for a single hero headline) before reaching for color.
3. **Status / state** — use opacity and muted fills before color. Reserve color for data visualization (charts, maps, comparisons).
4. **Navigation** — a top-of-page text link (`← back`) or a plain list of routes at the same `text-sm` size. No nav bar unless the app has more than ~5 distinct top-level destinations.
5. **Dark mode** — swap the CSS custom properties only. No component-level changes should be needed if the token system is used consistently.
