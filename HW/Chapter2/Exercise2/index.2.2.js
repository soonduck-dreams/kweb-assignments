const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function printJSFiles(dirname) {
    const items = await readdir(dirname);
    for (let item of items) {
        const item_path = path.join(dirname, item);
        const stats = await stat(item_path);
        if (stats.isDirectory()) {
            await printJSFiles(item_path);
        } else if (path.extname(item_path) === '.js') {
            console.log(item_path);
        }
    }
};

printJSFiles('test');