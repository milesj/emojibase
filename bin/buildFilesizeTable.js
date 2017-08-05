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

    const rows = files.map((file) => {
      const data = fs.readFileSync(file, 'utf8');

      return {
        file: file.replace(`${process.cwd()}/packages/${packageName}/`, ''),
        size: Buffer.byteLength(data),
        gzip: gzip.sync(data),
      };
    });

    rows.sort((a, b) => a.size - b.size);

    console.log('| File | Filesize | Gzipped |');
    console.log('| --- | --- | --- |');

    rows.forEach((row) => {
      if (row.file === 'package.json') {
        return;
      }

      console.log(`| ${row.file} | ${size(row.size)} | ${size(row.gzip)} |`);
    });

    console.log('');
  });
}

calculatePackage('emojibase-data');
calculatePackage('emojibase-regex');
