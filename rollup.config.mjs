import typescript from '@rollup/plugin-typescript'
import { del } from '@kineticcafe/rollup-plugin-delete'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/index.ts',

  output: [
    {
      file: './dist/index.js',
      format: 'cjs'
    },
    {
      file: './dist/index.esm.js',
      format: 'es'
    },
  ],

  plugins: [
    commonjs(),
    typescript(),
    del({ targets: 'dist/*' })
  ],

  external: [
    'axios',
    'sharp',
    'string-similarity'
  ]
}
