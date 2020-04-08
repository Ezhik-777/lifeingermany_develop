import plugin_gridsome_plugin_tailwindcss_5 from "/Users/evgenij/Desktop/dev/lifeingermany_develop/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelist":["svg-inline--fa","table","table-striped","table-bordered","table-hover","table-sm","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{},{},{},{}],"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"]},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}},"shouldPurge":false,"shouldImport":true,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true,"importUrlConfig":{"modernBrowser":true}}
  }
]
