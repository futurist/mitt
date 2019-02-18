import buble from 'rollup-plugin-buble';
// import flow from 'rollup-plugin-flow';
// import fs from 'fs';

// const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
	entry: 'src/index.js',
	useStrict: false,
	sourceMap: true,
	plugins: [
		// flow(),
		buble()
	],
	targets: [
		{ dest: 'dist/cjs.js', format: 'cjs' },
		{ dest: 'dist/es.js', format: 'es' },
		{ dest: 'dist/umd.js', format: 'umd', moduleName: 'esMitt' }
	]
};
