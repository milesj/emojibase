#! /usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const gzip = require('gzip-size');
const size = require('filesize');

function calculatePackage(packageName) {
  glob(path.resolve(__dirname, `../packages/${packageName}/**/*.{js,json}`), (error, files) => {
    if (error) {
      console.error(error.message, error.stack);

      return;
    }

    const rows = files.filter(file => !file.includes('tests')).map(file => {
      const data = fs.readFileSync(file, 'utf8');

      return {
        file: file.replace(`${process.cwd()}/packages/${packageName}/`, ''),
        gzip: gzip.sync(data),
        size: Buffer.byteLength(data),
      };
    });

    rows.sort((a, b) => a.size - b.size);

    console.log(`| emojibase-${packageName} | Filesize | Gzipped |`);
    console.log('| --- | --- | --- |');

    rows.forEach(row => {
      if (row.file === 'package.json' || row.file === 'tsconfig.json') {
        return;
      }

      console.log(`| ${row.file} | ${size(row.size)} | ${size(row.gzip)} |`);
    });

    console.log('');
  });
}

calculatePackage('data');
calculatePackage('regex');
