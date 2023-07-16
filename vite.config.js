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
  server: {
    port: process.env.PORT || 3000
  }
  if (command === 'build') {
    return {
      base: './'
    }
  }
})