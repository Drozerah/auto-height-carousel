import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import {config} from 'dotenv'
config()

// export default defineConfig({
//   server: {
//     port: process.env.PORT || 3000
//   },
//   build: {
//     minify: true,
//     base: './'
//   },
// })

export default defineConfig(({ command }) => {

  if (command === 'build') {
    return {
      plugins: [
        // input https://www.npmjs.com/package/html-minifier-terser options
        ViteMinifyPlugin({
          collapseWhitespace: true
        }),
      ],
      base: './'
    }
  } else {
    return {
      server: {
        port: process.env.PORT || 3000
      }
    }
  }
})