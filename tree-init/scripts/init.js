const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const scriptsDir = __dirname;

// Paths
const configTemplate = path.join(scriptsDir, 'config.template');
const stateTemplate = path.join(scriptsDir, 'state.template');

const treeConfigDest = path.join(projectRoot, 'tree.config.md');
const treeFolder = path.join(projectRoot, '.tree');
const stateDest = path.join(treeFolder, 'state.md');

// Create tree.config.md
if (!fs.existsSync(treeConfigDest)) {
  fs.copyFileSync(configTemplate, treeConfigDest);
  console.log('Created tree.config.md');
}

// Create .tree folder
if (!fs.existsSync(treeFolder)) {
  fs.mkdirSync(treeFolder);
  console.log('Created .tree folder');
}

// Create state.md
if (!fs.existsSync(stateDest)) {
  fs.copyFileSync(stateTemplate, stateDest);
  console.log('Created .tree/state.md');
}
