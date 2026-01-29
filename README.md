# 🌳 TREE 2.2 – The Reusable Engineering Ecosystem

### Command-Driven AI Project Framework for Google Antigravity  
Created by **Ashish Saini (livealyx)**

---

## 🚀 What is TREE 2.2?

TREE 2.2 is a command-driven AI development framework for Google Antigravity that combines:

- AI Skill Orchestration
- Automated Project Initialization
- Installer Bridge for Antigravity Compatibility

You no longer write prompts like:

    Using TREE skills...

You simply use:

    tree init

TREE prepares and builds your project using structured automation.

---

## 🧠 The Important Concept in 2.2

GitHub structure and Antigravity structure are different.

TREE solves this using:

install.js

This script converts the framework layout into the flat skill layout required by Antigravity.

---

## 📦 GitHub Repository Structure (Framework Layout)

TREE/
├── install.js
├── tree-init/
└── skills/

This is clean, modular, and version-controlled.

---

## ⚙️ Antigravity Runtime Structure (Auto-created)

After running installer, Antigravity gets:

.antigravity/.agent/skills/
├── tree-init/
├── html-builder/
├── css-designer/
├── php-backend/
└── ...

This is what Antigravity needs to detect skills.

---

# 🛠 Installation (Very Important)

### Step 1 - For create - .agent\skills (by deafult antigravity doesn't provide this folder)

```bash
cd C:\Users\YOUR_USERNAME\.antigravity
mkdir .agent
mkdir .agent\skills
```

### Step 2 — Clone TREE

cd C:\Users\YOUR_USERNAME\.antigravity
git clone https://github.com/livealyx/TREE.git

### Step 3 — Run Installer

cd TREE
node install.js

### Step 4 — Reload Skills

antigravity reload-skills

TREE is now properly installed.

---

# 🚀 How to Start Any Project

Assume project folder:

D:\Projects\School-System

### STEP 1 — Open folder in Antigravity

### STEP 2 — Type

tree init

### STEP 3 — Open terminal in project

cd D:\Projects\School-System

### STEP 4 — Run automation

node C:\Users\YOUR_USERNAME\.antigravity\TREE\tree-init\scripts\init.js

This creates:

tree.config.md
.tree/state.md

### STEP 5 — Go back to Antigravity

Type:

Build the project

TREE will generate everything automatically.

---

## 💻 Supported Technologies

PHP, HTML, CSS, Node.js, Perl  
Tailwind, Bootstrap, React, Vue, Astro, Next, Remix  
MySQL, MariaDB

---

## 📜 License

MIT License

---

## 📞 Contact

Ashish Saini (livealyx)  
https://creativealt.in  
ashish@creativealt.in

---

### 🌳 TREE 2.2 – From Framework to Fully Installable System
