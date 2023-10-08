// import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';

const babel = require('rollup-plugin-babel');
const rollupResolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/sparrow.js',
      format: 'cjs',
    },
    {
      file: 'esm/sparrow.js',
      format: 'es',
    },
    {
      file: 'dist/sparrow.min.js',
      name: 'sp',
      format: 'umd',
    },
  ],
  plugins: [rollupResolve(), babel()],
};
