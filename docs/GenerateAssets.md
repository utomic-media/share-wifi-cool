# Generating PWA assets

## CLI TOOL
I've used a CLI-Tool to generate all the needed assets. Simply run

``
npx vue-pwa-asset-generator -a {path to source file}  -o {path to output folder}
``

## ADD FILES
1. Generate `vue.config.js` (if it does not exists)
2. Add icon-Path object like this:
```// vue.config.js
module.exports = {
  // options...

  pwa: {
    name: 'Abendgestaltungen',
    workboxOptions: {
      //
    },
    themeColor: '24949d',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
  },
};
```
3. Copy `favico.ico` to `/public`
4. Copy generated images to `public/img/icons`
