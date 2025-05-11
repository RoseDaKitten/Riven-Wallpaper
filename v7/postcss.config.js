module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('postcss-urlrewrite')({
          imports: true,
          rules: [
            {
              from: /^https:\/\/clearvision\.github\.io\/ClearVision-v7\//,
              to: './'
            },
            {
              from: /^https:\/\/clearvision\.github\.io\/icons\//,
              to: './icons/'
            }
          ]
        })
      ]
    }),
    require('postcss-url')({
      url: 'inline'
    })
  ]
};
