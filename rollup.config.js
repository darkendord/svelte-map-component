import postcss from 'rollup-plugin-postcss';

export default {
  plugins: [
        svelte({
            emitCss: true
        }),
        postcss({
            extract: true
        })
  ]
}