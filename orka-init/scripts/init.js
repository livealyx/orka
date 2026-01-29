const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const scriptsDir = __dirname;

// Paths
const configTemplate = path.join(scriptsDir, 'config.template');
const stateTemplate = path.join(scriptsDir, 'state.template');

const orkaConfigDest = path.join(projectRoot, 'orka.config.md');
const orkaFolder = path.join(projectRoot, '.orka');
const stateDest = path.join(orkaFolder, 'state.md');

// Create orka.config.md
if (!fs.existsSync(orkaConfigDest)) {
  fs.copyFileSync(configTemplate, orkaConfigDest);
  console.log('Created orka.config.md');
}

// Create .orka folder
if (!fs.existsSync(orkaFolder)) {
  fs.mkdirSync(orkaFolder);
  console.log('Created .orka folder');
}

// Create state.md
if (!fs.existsSync(stateDest)) {
  fs.copyFileSync(stateTemplate, stateDest);
  console.log('Created .orka/state.md');
}
