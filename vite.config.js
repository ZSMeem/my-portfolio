import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-readme',
      configureServer(server) {
        server.middlewares.use('/readme.md', (_req, res) => {
          const content = readFileSync(resolve(__dirname, 'README.md'), 'utf-8')
          res.setHeader('Content-Type', 'text/plain')
          res.end(content)
        })
      },
    },
  ],
  base: "/my-portfolio/",
})
