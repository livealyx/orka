const fs = require('fs');
const path = require('path');

const sourceRoot = __dirname;
const agSkills = path.join(process.env.USERPROFILE, '.antigravity', '.agent', 'skills');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const s = path.join(src, item);
    const d = path.join(dest, item);
    if (fs.lstatSync(s).isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

// Copy tree-init
copyDir(path.join(sourceRoot, 'tree-init'), path.join(agSkills, 'tree-init'));

// Copy all skills
const skillsDir = path.join(sourceRoot, 'skills');
for (const skill of fs.readdirSync(skillsDir)) {
  copyDir(path.join(skillsDir, skill), path.join(agSkills, skill));
}

console.log('TREE installed into Antigravity skills successfully!');
