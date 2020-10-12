module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-prettier',
      'stylelint-config-sass-guidelines'
    ],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
      'max-nesting-depth': 3,
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['v-deep']
        }
      ]
    },
    ignoreFiles: [
      './node_modules/**/*.{css,scss,sass}',
      './dist/**/*.{css,scss,sass}',
      './src/assets/css/*.css'
    ]
  }
  