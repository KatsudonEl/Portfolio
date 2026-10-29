const cp = require('child_process');
const fs = require('fs');
const path = require('path');

const token = cp.execSync('bin\\gh.exe auth token', { encoding: 'utf8' }).trim();
const gitPath = 'C:\\Users\\John Dave M. Justo\\Downloads\\MinGit\\cmd\\git.exe';
const authedUrl = `https://oauth2:${token}@github.com/KatsudonEl/Portfolio.git`;

try {
  console.log('Committing changes to main branch...');
  cp.execSync(`"${gitPath}" add .`);
  try {
    cp.execSync(`"${gitPath}" commit -m "fix: resolve relative video asset URLs and enhance cinema modal playback"`);
  } catch (e) {
    console.log('No new commit needed or already committed');
  }

  console.log('Pushing to main branch...');
  cp.execSync(`"${gitPath}" remote set-url origin "${authedUrl}"`);
  cp.execSync(`"${gitPath}" push origin main`);
  console.log('Successfully pushed main!');

  // Push dist to gh-pages
  const distDir = path.join(__dirname, 'dist');
  const distGit = path.join(distDir, '.git');
  if (fs.existsSync(distGit)) {
    fs.rmSync(distGit, { recursive: true, force: true });
  }

  console.log('Deploying dist to gh-pages...');
  cp.execSync(`"${gitPath}" init -b gh-pages`, { cwd: distDir });
  cp.execSync(`"${gitPath}" config user.name "John Dave M. Justo"`, { cwd: distDir });
  cp.execSync(`"${gitPath}" config user.email "jdjusto.creatives@gmail.com"`, { cwd: distDir });
  cp.execSync(`"${gitPath}" add .`, { cwd: distDir });
  cp.execSync(`"${gitPath}" commit -m "deploy: fix cinema view and video asset paths on live site"`, { cwd: distDir });
  cp.execSync(`"${gitPath}" push "${authedUrl}" gh-pages:gh-pages --force`, { cwd: distDir });
  console.log('Successfully deployed to gh-pages!');
} catch (err) {
  console.error('Error during deploy:', err.message);
} finally {
  try {
    cp.execSync(`"${gitPath}" remote set-url origin "https://github.com/KatsudonEl/Portfolio.git"`);
  } catch (e) {}
  try {
    fs.unlinkSync(__filename);
  } catch (e) {}
}
