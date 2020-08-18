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

    // Load, sort, and stat files
    const rows = files
      .filter((file) => !file.includes('tests') && !file.includes('raw'))
      .map((file) => {
        const data = fs.readFileSync(file, 'utf8');

        return {
          file: file.replace(`${process.cwd()}/packages/${packageName}/`, ''),
          gzip: gzip.sync(data),
          size: Buffer.byteLength(data),
        };
      });

    rows.sort((a, b) => a.size - b.size);

    // Group by type
    const groups = [
      [], // All
      [], // Data
      [], // Data: compact
      [], // Shortcodes
    ];

    rows.forEach((row) => {
      if (row.file === 'package.json' || row.file === 'tsconfig.json') {
        return;
      }

      if (row.file.endsWith('compact.json')) {
        groups[2].push(row);
      } else if (row.file.endsWith('data.json')) {
        groups[1].push(row);
      } else if (row.file.includes('shortcodes/')) {
        groups[3].push(row);
      } else {
        groups[0].push(row);
      }
    });

    // Print groups
    groups.forEach((items) => {
      if (items.length === 0) {
        return;
      }

      console.log('| File | Size | Gzipped |');
      console.log('| --- | ---:| --: |');

      items.forEach((row) => {
        console.log(`| ${row.file} | ${size(row.size)} | ${size(row.gzip)} |`);
      });

      console.log('');
    });
  });
}

calculatePackage('data');
calculatePackage('regex');
