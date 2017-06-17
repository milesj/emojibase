#! /usr/bin/env node
/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import glob from 'glob';
import gzip from 'gzip-size';
import size from 'filesize';

new Promise((resolve, reject) => {
  glob(path.join(__dirname, '../../{data,regex}/**/*.{js,json}'), (error, files) => {
    if (error) {
      reject(error);
    } else {
      resolve(files);
    }
  });
})
  .then(files => (
    Promise.all(files.map(file => (
      new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
          if (error) {
            reject(error);

            return;
          }

          resolve({
            file: file.replace(`${process.cwd()}/`, ''),
            size: Buffer.byteLength(data),
            gzip: gzip.sync(data),
          });
        });
      })
    )))
  ))
  .then((rows) => {
    console.log('| File | Filesize | Gzipped |');
    console.log('| --- | --- | --- |');

    rows.sort((a, b) => a.size - b.size);

    rows.forEach((row) => {
      console.log(`| ${row.file} | ${size(row.size)} | ${size(row.gzip)} |`);
    });
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate filesize table'));
    console.log(chalk.gray(error.message));
  });
