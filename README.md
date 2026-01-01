# Bible Study

Personal study notes through Scripture, one chapter at a time.

## Structure

```
PROJECT ARCHITECTURE
    │
    ├─ pages/
    │   ├─ index.mdx              → Home
    │   ├─ reading-plan.mdx       → Reading schedule
    │   │
    │   ├─ genesis/               → Beginnings
    │   │   ├─ index.mdx          → Book overview
    │   │   └─ 01.mdx ... 06.mdx  → Chapter studies
    │   │
    │   ├─ matthew/               → The King
    │   │   ├─ index.mdx          → Book overview
    │   │   ├─ 01.mdx ... 025.mdx → Chapter studies
    │   │   └─ deep-dives/        → Topic studies
    │   │
    │   ├─ proverbs/              → Wisdom
    │   │   ├─ index.mdx          → Book overview
    │   │   └─ 01.mdx             → Chapter studies
    │   │
    │   └─ psalms/                → Prayerbook
    │       └─ index.mdx          → Book overview
    │
    └─ public/
        └─ manifest.json          → PWA config
```

## Study Format

Each chapter follows a consistent structure:

| Section | Function |
|---------|----------|
| Overview | One-paragraph thesis |
| Table of Contents | Navigation |
| Conceptual Flow | ASCII decision tree of chapter structure |
| Section Analysis | Verse-by-verse with Hebrew/Greek |
| Unified Framework | Chapter architecture diagram |
| Diagnostic Summary | Self-examination questions |
| One Sentence | Chapter compressed |
| Cross-References | Related passages |
| Personal Notes | Application and insight |

## Primitives

```
STUDY METHOD
    │
    ├─ STRUCTURE before details
    │   └─► Outline the flow first
    │       Then fill in exegesis
    │
    ├─ HEBREW/GREEK where it matters
    │   └─► Key words with transliteration
    │       Root meanings exposed
    │
    ├─ DECISION TREES for concepts
    │   └─► Visual logic flows
    │       Not paragraphs of explanation
    │
    └─ DIAGNOSTIC questions
        └─► Each section asks:
            "What does this expose in me?"
```

## Current Progress

| Book | Chapters | Status |
|------|----------|--------|
| Matthew | 25/28 | In progress |
| Genesis | 6/50 | In progress |
| Proverbs | 1/31 | Started |
| Psalms | 0/150 | Overview only |

## Development

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Start production
npm start
```

## Stack

- [Next.js](https://nextjs.org/) - React framework
- [Nextra](https://nextra.site/) - Documentation theme
- MDX - Markdown with components

## PWA

Installable as a Progressive Web App. Works offline after first visit.
