const path = require('path');
const fs = require('fs');


const pathToDocDataSource = '../powerjinja/definition-doc.json';
const pathToDocDataDestination = './src/assets/definition-doc.json';


copyFile(path.resolve(pathToDocDataSource), path.resolve(pathToDocDataDestination), onFinished);

function copyFile(source, target, cb) {
    var cbCalled = false;

    var rd = fs.createReadStream(source);
    rd.on("error", function (err) {
        done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function (err) {
        done(err);
    });
    wr.on("close", function (ex) {
        done();
    });
    rd.pipe(wr);

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}

function onFinished(err) {
    if (err) {
        throw err;
    }
    process.stdout.write(`\nDone!`);
}