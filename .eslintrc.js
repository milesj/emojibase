module.exports = {
	root: true,
	extends: ['moon', 'moon/node'],
	parserOptions: {
		project: 'tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		// All of the emoji mappings use numbers
		'no-magic-numbers': 'off',

		// Importing the datasets
		'unicorn/prefer-module': 'off',
	},
	overrides: [
		{
			files: ['*.test.ts'],
			rules: {
				'unicorn/prefer-module': 'off',
			},
		},
	],
};
