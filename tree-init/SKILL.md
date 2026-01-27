---
name: tree-init
description: Entry point for TREE project initialization
trigger: tree init
---

# Goal

When the user types `tree init`, this skill takes control of the project setup.

# Behavior

1. Create a file called `tree.config.md` in the project root.
2. Start an interactive interview with the user.
3. Collect project requirements.
4. Based on answers, invoke the correct TREE skills.
5. Prepare the correct project structure before development begins.

# Steps

- Copy config.template to project root as tree.config.md
- Ask questions from interview.prompt
- Use orchestrator.prompt to decide which skills to run
