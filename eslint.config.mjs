import { defineConfig, globalIgnores } from 'eslint/config';
import moonConfig from 'eslint-config-moon';
import moonBrowserConfig from 'eslint-config-moon/browser';
import moonNodeConfig from 'eslint-config-moon/node';

export default defineConfig([
	globalIgnores([
		'**/build/',
		'**/cjs/',
		'**/coverage/',
		'**/dist/',
		'**/dts/',
		'**/esm/',
		'**/lib/',
		'**/mjs/',
		'**/node_modules/',
		'**/umd/',
		'**/*.min.js',
		'**/*.map',
		'**/*.snap',
	]),
	...moonConfig,
	...moonNodeConfig,
	{
		// Lint TypeScript files when passing directories
		files: ['**/*.ts', '**/*.tsx'],
	},
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			// All of the emoji mappings use numbers
			'no-magic-numbers': 'off',

			// Importing the datasets
			'unicorn/prefer-module': 'off',

			// TypeScript already reports unresolved modules, and the
			// node resolver doesn't support `exports`-only packages
			'import/no-unresolved': 'off',
		},
	},
	{
		files: ['packages/core/**'],
		extends: [moonBrowserConfig],
		rules: {
			// Overloads
			'no-redeclare': 'off',

			// Browser package, so web APIs like fetch and storage are expected
			'node/no-unsupported-features/node-builtins': 'off',
		},
	},
	{
		files: ['packages/generator/**'],
		settings: {
			// Private package that only runs on the repo's Node.js version
			node: { version: '>=22.0.0' },
		},
		rules: {
			// Code generation
			'no-param-reassign': 'off',
		},
	},
	{
		files: ['website/**'],
		rules: {
			'no-restricted-globals': 'off',
			'import/no-default-export': 'off',
		},
	},
]);
