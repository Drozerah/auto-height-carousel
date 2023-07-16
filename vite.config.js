import { defineConfig } from 'vite'
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