module.exports = {
	root: true,
	extends: ['moon', 'moon/react', 'moon/node'],
	parserOptions: {
		project: 'tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		// All of the emoji mappings use numbers
		'no-magic-numbers': 'off',
	},
};
