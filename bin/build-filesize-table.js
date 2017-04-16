#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const gzip = require('gzip-size');
const size = require('filesize');

new Promise((resolve, reject) => {
  fs.readdir(path.join(__dirname, '../data'), (error, files) => {
    if (error) {
      reject(error);
    } else {
      resolve(files);
    }
  });
})
  .then((files) => (
    Promise.all(files.map(file => (
      new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, `../data/${file}`), (error, data) => {
          if (error) {
            reject(error);
            return;
          }

          resolve({
            file,
            size: Buffer.byteLength(data),
            gzip: gzip.sync(data),
          });
        });
      })
    )))
  ))
  .then((rows) => {
    console.log('| Dump | Filesize | Gzipped |');

    rows.sort((a, b) => a.size - b.size);

    rows.forEach((row) => {
      console.log(`| ${row.file} | ${size(row.size)} | ${size(row.gzip)} |`);
    });
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate filesize table'));
    console.log(chalk.gray(error.message));
  });
