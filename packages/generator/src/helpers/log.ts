/* eslint-disable no-console */

// eslint-disable-next-line import/no-unresolved
import chalk from 'chalk';

export const log = {
	error(type: string, ...messages: string[]) {
		this.log(type, chalk.red('✖'), ...messages.map((message) => chalk.red(message)));
	},

	info(type: string, ...messages: string[]) {
		this.log(type, ...messages);
	},

	log(type: string, ...messages: string[]) {
		console.log(chalk.gray(`[${type}]`.padEnd(8, ' ')), ...messages);
	},

	success(type: string, ...messages: string[]) {
		this.log(type, chalk.green('✔'), ...messages.map((message) => chalk.green(message)));
	},

	title(type: string, ...messages: string[]) {
		this.log(type, ...messages.map((message) => chalk.cyan(message)));
	},

	warn(type: string, ...messages: string[]) {
		this.log(type, chalk.yellow('✖'), ...messages.map((message) => chalk.yellow(message)));
	},
};
