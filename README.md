# 🐋 ORKA v4.0 – Autonomous Skill Orchestration for IDE AI

**A Project‑Local AI Skill Runtime for IDEs**  
Created by **Ashish Saini (livealyx)**

---

## 🚀 What is ORKA v4?

ORKA v4 transforms IDE AI from a chat assistant into an **interview‑driven, rule‑bound, skill‑orchestrated project builder**.

ORKA works because IDE AI is forced to read files that exist **inside the project workspace**.  
By placing `.agent` and `.orka` inside the project, ORKA controls how the AI thinks, asks questions, plans, and generates code.

---

## 🧠 What’s New in v4

| Feature | Description |
|---|---|
| ORKA Brain | `.orka/brain.md` controls how AI behaves |
| Activation Mode | ORKA activates only when user types **"Use ORKA"** |
| Interview Mode | AI must ask questions before planning |
| plan.md | AI writes execution plan before coding |
| state.md | Persistent project memory |
| graph.json | Skill relationship mapping |
| SKILL.meta.json | Self‑describing skills for auto‑selection |
| Design Rules | UI/UX/Style intelligence inside skills |
| Skill Chaining | Automatic multi‑skill execution |
| Deterministic Builds | No hallucinated architecture |

---

## 📦 Installation

1. Copy **`.agent`** and **`.orka`** folders into your project root.

```
your-project/
├── .agent/
├── .orka/
```

2. Open project in IDE.

3. In chat, type:

```
Use ORKA
```

4. ORKA will start asking interview questions.  
5. After answers, ORKA creates `plan.md` and begins execution.

---

## 🔄 ORKA v4 Workflow

```
You say: "Use ORKA"
        ↓
ORKA Brain activates
        ↓
Interview Questions
        ↓
plan.md created
        ↓
Skills auto‑selected via SKILL.meta.json
        ↓
Skill chaining via graph.json
        ↓
Code generation from templates
        ↓
state.md updated after each step
```

---

## 🗂 Required Structure

```
project/
├── .agent/
│   └── skills/
│       └── <skill-name>/
│           ├── SKILL.md
│           ├── SKILL.meta.json
│           ├── templates/
│           ├── prompts/
│           └── design-rules/
└── .orka/
    ├── brain.md
    ├── plan.md
    ├── state.md
    └── graph.json
```

---

## 🎯 What ORKA v4 Solves

- No architecture hallucination
- No framework mixing
- Proper requirement gathering
- Deterministic multi‑step builds
- Consistent UI/UX via design rules
- Persistent AI memory

---

## 👨‍💻 Developer Info

**Name:** Ashish Saini (livealyx)  
**Organization:** Creative ALT Media Group  
**Website:** https://creativealt.in  
**Email:** ashish@creativealt.in

---

## 🐋 ORKA – Don’t prompt the AI. Orchestrate it.
