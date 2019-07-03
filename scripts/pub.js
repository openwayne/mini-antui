const { execSync, spawn } = require('child_process');

const packageJson = require(`${process.cwd()}/package.json`);
const { version } = packageJson;
const runner = spawn('npm', ['publish']);

runner.on('close', () => {
  execSync(`git tag v-${version}`);
  execSync(`git push origin v-${version}:${version}`);
  execSync('git push origin master:master');
});
