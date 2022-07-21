const path = require('path');
const CracoLessPlugin = require('craco-less')
const resolvePackage = relativePath => path.resolve(__dirname,relativePath);
module.exports = {
   webpack:{
      alias:{
         react:resolvePackage('./node_modules/react')
      }
   },
   plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {
                '@primary-color': '#FFFFFF'
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
}
