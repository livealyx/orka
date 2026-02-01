
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scripts = __dirname;

const configTemplate = path.join(scripts, 'orka.config.template');
const stateTemplate  = path.join(scripts, 'orka.state.template');

const configDest = path.join(root, 'orka.config.md');
const orkaFolder = path.join(root, '.orka');
const stateDest  = path.join(orkaFolder, 'state.md');

if (!fs.existsSync(configDest)) {
    fs.copyFileSync(configTemplate, configDest);
    console.log('Created orka.config.md');
}

if (!fs.existsSync(orkaFolder)) {
    fs.mkdirSync(orkaFolder);
    console.log('Created .orka folder');
}

if (!fs.existsSync(stateDest)) {
    fs.copyFileSync(stateTemplate, stateDest);
    console.log('Created .orka/state.md');
}

console.log('ORKA project initialized successfully!');
