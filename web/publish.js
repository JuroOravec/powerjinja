const spawnSync = require('child_process').spawnSync;
const path = require('path');

const localPathToAppDir = path.dirname(require.main.filename);

const distDirName = 'dist';
const tarExt = '.tar.gz';

const user = 'juro';
const server = 'powerjinja.com';

const serverPathToAppDir = 'apps/powerjinja';




// Build dist version
process.stdout.write(`(1/5) Building distribution...\n`);
const buildCmd = spawnSync('npm', ['run', 'build']);
if (buildCmd.error) {
    throw Error(buildCmd.error);
}

// Archive the distribution
process.stdout.write(`(2/5) Archiving distribution...\n`);
const archiveCmd = spawnSync('tar', ['-zcvf', distDirName + tarExt, distDirName]);
if (archiveCmd.error) {
    throw Error(archiveCmd.error);
}

// Send the file to the server (uses ssh key, so will work only on this machine with current credentials)
process.stdout.write(`(3/5) Uploading distribution to server...\n`);
const uploadCmd = spawnSync('scp', [distDirName + tarExt, `${user}@${server}:${serverPathToAppDir}`]);
if (uploadCmd.error) {
    throw Error(uploadCmd.error);
}

// Login to the server unpack the distribution and clean the leftovers
process.stdout.write(`(4/5) Unpacking distribution on server...\n`);
const serverCommands = `cd ${serverPathToAppDir}; tar xvf ${distDirName}${tarExt}; rm ${distDirName}${tarExt}`;
const unpackCmd = spawnSync('ssh', ['-t', `${user}@${server}`, serverCommands]);
if (unpackCmd.error) {
    throw Error(unpackCmd.error);
}

// Remove the locally stored zipped distribution
process.stdout.write(`(5/5) Removing local temporary files...\n`);
const cleanupCmd = spawnSync('rm', [distDirName + tarExt]);
if (cleanupCmd.error) {
    throw Error(cleanupCmd.error);
}
process.stdout.write(`\nDone!`);