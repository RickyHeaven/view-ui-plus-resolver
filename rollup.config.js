import ts from 'rollup-plugin-typescript2'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'lib/index.js',
			format: 'umd',
			name: 'ViewUiPlusResolver'
		}, {
			file: 'lib/index.mjs',
			format: 'es',
			name: 'ViewUiPlusResolver'
		}, {
			file: 'lib/index.cjs',
			format: 'cjs',
			name: 'ViewUiPlusResolver'
		}
	],
	plugins: [ts()]
}