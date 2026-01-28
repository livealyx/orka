# 🌳 TREE 2.1 – The Reusable Engineering Ecosystem

### Command‑Driven AI Project Framework for Google Antigravity  
Created by **Ashish Saini (livealyx)**

---

## 🚀 What is TREE 2.1?

TREE 2.1 upgrades the framework with **true project initialization automation**.

TREE now combines:

- AI Skill Orchestration (Antigravity)
- File System Automation (`init.js`)
- Project Memory (`tree.config.md` + `.tree/state.md`)

You no longer write prompts like:

    Using TREE skills...

You simply run:

    tree init

And TREE prepares the entire project environment for you.

---

## 🧠 Core Components

| Component | Role |
|---|---|
| `tree-init` | Master controller skill |
| `init.js` | Automation bridge for file creation |
| `skills/` | Worker modules |
| `tree.config.md` | Project brain |
| `.tree/state.md` | Project memory & progress tracker |

All skills read config and state before generating anything.

---

## 📦 Repository Architecture

```
TREE/
├── tree-init/
│   └── scripts/
│        ├── init.js
│        ├── config.template
│        ├── state.template
│        ├── interview.prompt
│        └── orchestrator.prompt
│
└── skills/
```

---

## 🛠 Installation

### Step 1 - For create - .agent\skills (by deafult antigravity doesn't provide this folder)

```bash
cd C:\Users\YOUR_USERNAME\.antigravity
mkdir .agent
mkdir .agent\skills
```

### Step 2 — Clone into Antigravity

```bash
cd C:\Users\YOUR_USERNAME\.antigravity\.agent\skills
git clone https://github.com/livealyx/TREE.git
```

### Step 3 — Reload Skills

```bash
antigravity reload-skills
```

TREE 2.1 is now installed.

---

# 🚀 How to Start Any New Project (Follow Exactly)

Assume your project folder is:

```
D:\Projects\School-System
```

---

## ✅ STEP 1 — Create empty project folder

Open this folder in Antigravity.

---

## ✅ STEP 2 — Start TREE

In Antigravity chat, type:

```
tree init
```

TREE will begin the interview process.

---

## ✅ STEP 3 — Open project terminal

Open terminal in this project folder:

```bash
cd D:\Projects\School-System
```

---

## ✅ STEP 4 — Run the automation script

```bash
node C:\Users\YOUR_USERNAME\.antigravity\.agent\skills\TREE\tree-init\scripts\init.js
```

This automatically creates:

```
tree.config.md
.tree/state.md
```

---

## ✅ STEP 5 — Verify files

```
School-System/
 ├── tree.config.md
 └── .tree/state.md
```

---

## ✅ STEP 6 — Tell TREE to build

Return to Antigravity and type:

```
Build the project
```

TREE will now:

- Read configuration
- Read state
- Auto‑select correct skills
- Generate the full project

---

## ❗ Important Rule

Do NOT say:

```
Using TREE skills
```

That was TREE 1.0 behavior.

TREE 2.1 is command‑driven.

---

## 💻 Supported Technologies

Languages: PHP, HTML, CSS, Node.js, Perl  
Frameworks: Tailwind, Bootstrap, React, Vue, Astro, Next, Remix  
Databases: MySQL, MariaDB

---

## 📜 License

MIT License

---

## 📞 Contact

Ashish Saini (livealyx)  
https://creativealt.in  
ashish@creativealt.in

---

### 🌳 TREE 2.1 – Intelligent Projects, Structured by AI
