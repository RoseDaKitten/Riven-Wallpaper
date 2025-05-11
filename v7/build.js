const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');
const url = require('postcss-url');

const src = 'src/ClearVision-v7.theme.css';
const dst = 'dist/ClearVision-v7.theme.custom.css';

const css = fs.readFileSync(src, 'utf8');

const output = postcss()
  .use(atImport())
  .use(
    url({
      url: 'inline'
    })
  )
  .process(css, {
    from: src,
    to: dst
  });
