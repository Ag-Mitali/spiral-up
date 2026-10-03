# Implementation Plan — Two-Accent Color System

**Color constants used throughout:**
- Lime green: `#C8FF00` / `rgba(200,255,0,…)`
- Red (keep only on): section label text, heading periods, primary CTA buttons (WhatsApp, Continue, Send, Book a call)

---

## 1. PerformanceWork.tsx

**File:** `components/sections/PerformanceWork.tsx`

Keep as-is:
- `text-red-500` on section label span → KEEP
- `bg-red-500/60` underline div → KEEP
- `notList` X icon circle bg/border (`rgba(192,57,43,…)`) → KEEP (semantic "no")
- X icon color `#c0392b` → KEEP (semantic "no")

Change (video placeholder play button — not a CTA, it's an icon):

**Edit A — play circle border:**
```
OLD: style={{ border: '1.5px solid rgba(192,57,43,0.4)' }}
     (the div wrapping the play polygon in the youtubeId === null branch)
NEW: style={{ border: '1.5px solid rgba(200,255,0,0.4)' }}
```

**Edit B — play polygon fill:**
```
OLD: <polygon points="5,3 19,12 5,21" fill="rgba(192,57,43,0.6)" />
NEW: <polygon points="5,3 19,12 5,21" fill="rgba(200,255,0,0.6)" />
```

Verify: `npm run build` (no TypeScript errors); visual check shows lime play button in video placeholders.

---

## 2. TheProof.tsx

**File:** `components/sections/TheProof.tsx`

Keep as-is:
- `text-red-500` section label → KEEP
- `bg-red-500/60` underline → KEEP

Change (stat card borders and accent dot):

**Edit A — stat card border (default):**
```
OLD: className="bg-black border border-red-500/30 rounded-lg p-4 hover:border-red-500/60 transition-all duration-300 relative"
NEW: className="bg-black rounded-lg p-4 transition-all duration-300 relative"
     style={{ border: '1px solid rgba(200,255,0,0.25)' }}
     onMouseEnter/Leave handled separately — OR use the simpler Tailwind approach:
     className="bg-black border rounded-lg p-4 transition-all duration-300 relative"
     style={{ borderColor: 'rgba(200,255,0,0.25)' }}
```

Actually the cleanest str_replace (avoids adding JS event handlers):

```
OLD: className="bg-black border border-red-500/30 rounded-lg p-4 hover:border-red-500/60 transition-all duration-300 relative"
NEW: className="bg-black rounded-lg p-4 transition-all duration-300 relative" style={{ border: '1px solid rgba(200,255,0,0.25)' }}
```
> Note: hover border deepening is a nice-to-have; the static lime border is the requirement. If hover deepening is desired, wrap both classes in a group and add a CSS variable or keep inline.

**Edit B — accent dot:**
```
OLD: <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full" />
NEW: <div className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#C8FF00' }} />
```

Verify: `npm run build`; stat cards show lime borders and lime accent dot.

---

## 3. VideoPlaceholder.tsx

**File:** `components/sections/VideoPlaceholder.tsx`

Outer wrapper border is already `#C8FF00` with lime glow — KEEP.

Change play button circle and icon (currently red):

**Edit A — play circle bg and border:**
```
OLD:
  style={{
    backgroundColor: 'rgba(192,57,43,0.12)',
    border: '1.5px solid rgba(192,57,43,0.4)',
  }}
NEW:
  style={{
    backgroundColor: 'rgba(200,255,0,0.10)',
    border: '1.5px solid rgba(200,255,0,0.45)',
    boxShadow: '0 0 10px rgba(200,255,0,0.15)',
  }}
```

**Edit B — Play icon color and fill:**
```
OLD: <Play size={24} style={{ color: '#c0392b' }} fill="rgba(192,57,43,0.6)" />
NEW: <Play size={24} style={{ color: '#C8FF00' }} fill="rgba(200,255,0,0.6)" />
```

Verify: `npm run build`; play button shows lime icon with lime glow.

---

## 4. WhatElseWeDo.tsx

**File:** `components/sections/WhatElseWeDo.tsx`

Keep as-is:
- `text-red-500` section label → KEEP
- `bg-red-500/60` underline → KEEP
- `text-red-600` heading period → KEEP

Change (card numbers, arrow buttons, banner icon, hover glow):

**Edit A — service card number labels:**
```
OLD: <span className="text-xs font-semibold text-red-600">{s.number}</span>
NEW: <span className="text-xs font-semibold" style={{ color: '#C8FF00' }}>{s.number}</span>
```

**Edit B — card arrow button border:**
```
OLD:
  style={{ border: '1.5px solid rgba(192,57,43,0.5)' }}
  ...className="... group-hover:bg-red-600/20"
NEW:
  style={{ border: '1.5px solid rgba(200,255,0,0.45)' }}
  ...className="... group-hover:bg-[#C8FF00]/10"
```
Exact str_replace target:
```
OLD: className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-red-600/20"
                  style={{ border: '1.5px solid rgba(192,57,43,0.5)' }}
NEW: className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-[#C8FF00]/10"
                  style={{ border: '1.5px solid rgba(200,255,0,0.45)' }}
```

**Edit C — card arrow icon:**
```
OLD: <ArrowRight size={15} style={{ color: '#c0392b' }} />
     (the one inside the card arrow button div)
NEW: <ArrowRight size={15} style={{ color: '#C8FF00' }} />
```
> There are two `ArrowRight` usages; the card one is inside `px-5 pb-5` div, the banner one is in the bottom banner. Change both independently.

**Edit D — card hover glow (remove red, add subtle lime):**
```
OLD: style={{ background: 'radial-gradient(ellipse at bottom left, rgba(192,57,43,0.08) 0%, transparent 70%)' }}
NEW: style={{ background: 'radial-gradient(ellipse at bottom left, rgba(200,255,0,0.05) 0%, transparent 70%)' }}
```

**Edit E — bottom banner icon circle:**
```
OLD: style={{ backgroundColor: 'rgba(192,57,43,0.12)', border: '1.5px solid rgba(192,57,43,0.4)' }}
     (the BarChart2 icon wrapper in the bottom banner)
NEW: style={{ backgroundColor: 'rgba(200,255,0,0.08)', border: '1.5px solid rgba(200,255,0,0.4)' }}
```

**Edit F — bottom banner BarChart2 icon:**
```
OLD: <BarChart2 size={16} style={{ color: '#c0392b' }} />
NEW: <BarChart2 size={16} style={{ color: '#C8FF00' }} />
```

**Edit G — bottom banner arrow circle border:**
```
OLD: style={{ border: '1.5px solid rgba(192,57,43,0.5)' }}
     (the right-side ArrowRight wrapper div in bottom banner)
NEW: style={{ border: '1.5px solid rgba(200,255,0,0.45)' }}
```

**Edit H — bottom banner ArrowRight icon:**
```
OLD: <ArrowRight size={14} style={{ color: '#c0392b' }} />
     (the one in the bottom banner right section)
NEW: <ArrowRight size={14} style={{ color: '#C8FF00' }} />
```

> To disambiguate the two `ArrowRight size={15}` and `size={14}` usages, use the surrounding context (card vs banner) as str_replace anchor.

Verify: `npm run build`; card numbers and arrow buttons show lime, banner icon is lime.

---

## 5. Testimonials.tsx

**File:** `components/sections/Testimonials.tsx`

Keep as-is:
- `text-red-500` section label → KEEP
- `bg-red-500/60` underline → KEEP
- `text-red-600` heading period → KEEP

Change (quote marks, right-arrow nav button, page indicator):

**Edit A — avatar border (minor; neutral is fine, lime also acceptable):**
```
OLD: style={{ backgroundColor: '#1a1a1a', border: '1.5px solid rgba(192,57,43,0.3)' }}
NEW: style={{ backgroundColor: '#1a1a1a', border: '1.5px solid rgba(200,255,0,0.25)' }}
```

**Edit B — right arrow nav button (border + bg):**
```
OLD:
  style={{ border: '1.5px solid #c0392b', backgroundColor: 'rgba(192,57,43,0.1)' }}
NEW:
  style={{ border: '1.5px solid #C8FF00', backgroundColor: 'rgba(200,255,0,0.08)' }}
```

**Edit C — right arrow nav icon color:**
```
OLD: <ArrowRight size={16} style={{ color: '#c0392b' }} />
NEW: <ArrowRight size={16} style={{ color: '#C8FF00' }} />
```

**Edit D — page indicator current number:**
```
OLD: <span className="text-sm font-bold text-red-600">0{page + 1}</span>
NEW: <span className="text-sm font-bold" style={{ color: '#C8FF00' }}>0{page + 1}</span>
```

**Edit E — page indicator progress bar:**
```
OLD: <motion.div
       className="h-full bg-red-600"
       animate={{ width: `${((page + 1) / total) * 100}%` }}
       transition={{ duration: 0.4 }}
     />
NEW: <motion.div
       className="h-full"
       style={{ backgroundColor: '#C8FF00' }}
       animate={{ width: `${((page + 1) / total) * 100}%` }}
       transition={{ duration: 0.4 }}
     />
```

**Edit F — quote mark:**
```
OLD: <span className="text-4xl font-black leading-none" style={{ color: '#c0392b' }}>&ldquo;</span>
NEW: <span className="text-4xl font-black leading-none" style={{ color: '#C8FF00' }}>&ldquo;</span>
```

Verify: `npm run build`; quote marks, right nav arrow, and page indicator are lime.

---

## 6. FAQ.tsx

**File:** `components/sections/FAQ.tsx`

Keep as-is:
- `text-red-500` section label → KEEP
- `bg-red-500/60` underline → KEEP
- `text-red-600` heading period → KEEP

Change (accordion open state borders, number labels, hover text, open icon button):

**Edit A — accordion item open border and bg:**
```
OLD:
  border: `1px solid ${openIndex === i ? 'rgba(192,57,43,0.35)' : 'rgba(255,255,255,0.1)'}`,
  backgroundColor: openIndex === i ? 'rgba(192,57,43,0.04)' : 'transparent',
NEW:
  border: `1px solid ${openIndex === i ? 'rgba(200,255,0,0.30)' : 'rgba(255,255,255,0.1)'}`,
  backgroundColor: openIndex === i ? 'rgba(200,255,0,0.03)' : 'transparent',
```

**Edit B — FAQ number label:**
```
OLD: <span className="text-sm font-semibold w-6 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }}>
NEW: <span className="text-sm font-semibold w-6 flex-shrink-0 mt-0.5" style={{ color: '#C8FF00' }}>
```

**Edit C — question hover color:**
```
OLD: className="flex-1 text-base font-semibold text-white group-hover:text-red-400 transition-colors duration-200"
NEW: className="flex-1 text-base font-semibold text-white transition-colors duration-200"
     style={{ }}  // remove hover, or use a CSS class. Since Tailwind arbitrary values work:
```
Simpler: just remove `group-hover:text-red-400` and rely on white text on hover:
```
OLD: className="flex-1 text-base font-semibold text-white group-hover:text-red-400 transition-colors duration-200"
NEW: className="flex-1 text-base font-semibold text-white group-hover:text-[#C8FF00] transition-colors duration-200"
```

**Edit D — icon button open state bg and border:**
```
OLD:
  backgroundColor: openIndex === i ? 'rgba(192,57,43,0.12)' : 'transparent',
  borderColor: openIndex === i ? 'rgba(192,57,43,0.4)' : 'rgba(255,255,255,0.12)',
NEW:
  backgroundColor: openIndex === i ? 'rgba(200,255,0,0.10)' : 'transparent',
  borderColor: openIndex === i ? 'rgba(200,255,0,0.40)' : 'rgba(255,255,255,0.12)',
```

**Edit E — Minus icon (open state):**
```
OLD: <Minus size={14} style={{ color: '#c0392b' }} />
NEW: <Minus size={14} style={{ color: '#C8FF00' }} />
```

Verify: `npm run build`; open accordion shows lime border, lime number, lime minus icon.

---

## 7. GetStarted.tsx

**File:** `components/sections/GetStarted.tsx`

Keep as-is:
- `text-red-500` section label → KEEP
- Heading period `text-red-600` → KEEP
- WhatsApp button `backgroundColor: '#c0392b'` → KEEP (primary CTA)
- Continue button `backgroundColor: '#c0392b'` → KEEP (primary CTA)
- Send button `backgroundColor: '#c0392b'` → KEEP (primary CTA)
- Input focus `onFocus borderColor: '#c0392b'` → KEEP (UX feedback, tied to primary CTA color)

Change (section underline, step tab active indicator, success state):

**Edit A — section label underline:**
```
OLD: <div className="h-px w-12 mt-2 bg-red-500/60" />
     (inside the Label div, before the Heading)
NEW: <div className="h-px w-12 mt-2" style={{ backgroundColor: '#C8FF00' }} />
```
> Use surrounding JSX context to disambiguate from other files; the `09 · GET STARTED` span is the anchor.

**Edit B — step tab active number color:**
```
OLD: style={{ color: i <= step ? '#c0392b' : '#4b5563' }}
NEW: style={{ color: i <= step ? '#C8FF00' : '#4b5563' }}
```

**Edit C — step tab active indicator line:**
```
OLD: <div className="h-px w-8" style={{ backgroundColor: '#c0392b' }} />
NEW: <div className="h-px w-8" style={{ backgroundColor: '#C8FF00' }} />
```

**Edit D — success circle border and glow:**
```
OLD: style={{ border: '2px solid #c0392b', boxShadow: '0 0 24px rgba(192,57,43,0.2)' }}
NEW: style={{ border: '2px solid #C8FF00', boxShadow: '0 0 24px rgba(200,255,0,0.20)' }}
```

**Edit E — CheckCircle icon:**
```
OLD: <CheckCircle size={32} style={{ color: '#c0392b' }} />
NEW: <CheckCircle size={32} style={{ color: '#C8FF00' }} />
```

Verify: `npm run build`; step indicator line and success state show lime; primary buttons remain red.

---

## 8. WhoWeWorkWith.tsx

**File:** `components/sections/WhoWeWorkWith.tsx`

Keep as-is:
- `color: '#c0392b'` on "The right fit" label span → KEEP (section label equivalent)
- X icon circles (notFits): already `rgba(255,255,255,0.04)` border and `#6b7280` icon → KEEP neutral
- Bottom divider gradient uses red → change to lime (non-semantic decoration)

Change (check icon circles and check icon color):

**Edit A — check icon circle bg and border:**
```
OLD: style={{ backgroundColor: 'rgba(192,57,43,0.15)', border: '1px solid rgba(192,57,43,0.4)' }}
NEW: style={{ backgroundColor: 'rgba(200,255,0,0.10)', border: '1px solid rgba(200,255,0,0.40)' }}
```

**Edit B — check icon color:**
```
OLD: <Check size={13} style={{ color: '#c0392b' }} strokeWidth={2.5} />
NEW: <Check size={13} style={{ color: '#C8FF00' }} strokeWidth={2.5} />
```

**Edit C — bottom divider gradient:**
```
OLD: style={{ background: 'linear-gradient(90deg, rgba(192,57,43,0.3) 0%, rgba(192,57,43,0.05) 60%, transparent 100%)' }}
NEW: style={{ background: 'linear-gradient(90deg, rgba(200,255,0,0.25) 0%, rgba(200,255,0,0.05) 60%, transparent 100%)' }}
```

Verify: `npm run build`; good-fit checkmarks show lime circles and icons; not-fit X icons remain gray.

---

## 9. Navigation.tsx

**File:** `components/Navigation.tsx`

No color changes required:
- "Book a call" button: `border border-red-500 text-red-500 hover:bg-red-500/10` → KEEP (primary CTA per spec)
- Nav item hover: `hover:text-red-500` → KEEP (brand accent)
- Logo SVG: `className="text-red-500"` → KEEP

No active nav indicators exist in the current code; none to convert.

Verify: `npm run build` — confirm no regressions.

---

## 10. Footer.tsx

**File:** `components/Footer.tsx`

Keep as-is:
- `border-red-500/20` top border → KEEP ("borders" per spec)
- Logo SVG circles `stroke="#ff0000"` → KEEP ("logo circles" per spec)
- Glow `bg-red-500/20` on logo → KEEP (logo glow)
- Social icon hover: `hover:border-red-500 hover:text-red-500` → KEEP (brand accent on social)
- Nav link hover: `hover:text-red-500` → KEEP (brand accent)
- Get-in-touch link circle borders `border-red-500` and icon colors `text-red-500` → KEEP (CTA-adjacent)

Change (only the trailing ArrowRight icons in the Get in touch rows):

**Edit A — Book a call ArrowRight:**
```
OLD: <ArrowRight size={16} className="text-red-500 ml-auto group-hover:translate-x-1 transition-transform" />
     (inside the Book a call motion.a)
NEW: <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" style={{ color: '#C8FF00' }} />
```

**Edit B — WhatsApp us ArrowRight:**
```
OLD: <ArrowRight size={16} className="text-red-500 ml-auto group-hover:translate-x-1 transition-transform" />
     (inside the WhatsApp us motion.a)
NEW: <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" style={{ color: '#C8FF00' }} />
```

**Edit C — Email us ArrowRight:**
```
OLD: <ArrowRight size={16} className="text-red-500 ml-auto group-hover:translate-x-1 transition-transform" />
     (inside the Email us motion.a)
NEW: <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" style={{ color: '#C8FF00' }} />
```

> All three ArrowRight instances in the footer Get in touch block have identical JSX, so use the surrounding motion.a href context to disambiguate each str_replace, or replace all three in a single replace_all pass since they are identical strings and all three should change.

Verify: `npm run build`; Get in touch arrows are lime; logo, borders, and social hovers remain red.

---

## Execution order

Apply edits in file order 1–10. Each file edit is independent; no cross-file dependencies. After all edits, run:

```
npm run build
```

Expected: zero TypeScript/ESLint errors, build succeeds. Then push and deploy.
