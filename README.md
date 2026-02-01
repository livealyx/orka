# 🐋 ORKA v3.0 – Orchestrated Resource & Knowledge Automation

### A Project‑Local AI Skills Framework for Google Antigravity
Created by **Ashish Saini (livealyx)**

---

## 🚀 What is ORKA?

ORKA is a **portable AI skills kit** that lives **inside every project** and turns Antigravity into a structured project generator.

Unlike previous approaches, ORKA is **not installed globally**.  
It is **included inside the project** so the AI can see and follow the skills.

---

## 🧠 Core Principle (Very Important)

Antigravity AI can only read files that exist **inside the current project workspace**.

That is why ORKA v3 uses a **project‑local `.agent/skills` structure**.

---

## 📁 ORKA Repository Structure

```
ORKA/
└── .agent/
    └── skills/
        ├── orka-init/
        ├── html-builder/
        ├── css-designer/
        ├── php-backend/
        ├── mysql-manager/
        ├── node-backend/
        ├── react-app/
        ├── vue-app/
        ├── nextjs-app/
        ├── astro-site/
        ├── remix-app/
        └── deployment/
```

This folder is copied directly into any new project.

---

## 🛠 How to Use ORKA in a New Project

### Step 1 — Create a new empty project folder

Example:

```
D:\Projects\MyWebsite
```

### Step 2 — Copy `.agent` folder from ORKA into this project

Now your project looks like:

```
MyWebsite/
└── .agent/
    └── skills/
```

### Step 3 — Open this project in Antigravity

### Step 4 — Start ORKA

In the chat box, type:

```
Using ORKA, initialize this project
```

---

## 🗂 What Happens Next

ORKA will:

1. Ask you interview questions (from `interview.prompt`)
2. Ask you to run:

```
node .agent/skills/orka-init/scripts/init.js
```

3. This creates:

```
orka.config.md
.orka/state.md
```

4. Then you say:

```
Continue with ORKA
```

And ORKA will start generating your project using the correct skills.

---

## 💻 Supported Technologies

**Languages**  
PHP, HTML, CSS, Node.js, Perl

**Frameworks**  
Tailwind, Bootstrap, React, Vue, Astro, Next, Remix

**Databases**  
MySQL, MariaDB

---

## 🎯 Why ORKA Works

Because the skills are visible to the AI inside the project, Antigravity follows the defined SKILL.md rules instead of improvising.

---

## 📜 License

MIT License

---

## 📞 Contact

Ashish Saini (livealyx)  
https://creativealt.in  
ashish@creativealt.in

---

### 🐋 ORKA – Orchestrate Your Projects with AI
