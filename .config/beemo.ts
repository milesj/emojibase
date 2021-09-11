export default {
	module: '@beemo/dev',
	drivers: [
		'babel',
		'eslint',
		'jest',
		'prettier',
		[
			'typescript',
			{
				buildFolder: 'dts',
				declarationOnly: true,
				globalTypes: true,
			},
		],
	],
	// "eslint": {
	// 	"ignore": [
	// 		"website/"
	// 	],
	// 	"rules": {
	// 		"no-magic-numbers": "off",
	// 		"no-param-reassign": "off",
	// 		"require-unicode-regexp": "off"
	// 	}
	// },
	// "prettier": {
	// 	"ignore": [
	// 		"packages/generator/src/resources/*.ts",
	// 		"packages/test-utils/test-data.json"
	// 	]
	// },
	settings: {
		node: false,
		react: true,
	},
};
