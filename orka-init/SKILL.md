---
name: orka-init
description: Entry point for ORKA project initialization
trigger: orka init
---

# Goal

When the user types `orka init`, this skill takes control of the project setup.

# Behavior

1. Create a file called `orka.config.md` in the project root.
2. Start an interactive interview with the user.
3. Collect project requirements.
4. Based on answers, invoke the correct ORKA skills.
5. Prepare the correct project structure before development begins.

# Steps

- Copy config.template to project root as orka.config.md
- Ask questions from interview.prompt
- Use orchestrator.prompt to decide which skills to run

Run the script: node orka-init/scripts/init.js
