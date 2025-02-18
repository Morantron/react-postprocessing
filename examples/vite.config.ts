import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@react-three/postprocessing',
        replacement: path.resolve(__dirname, '../src'),
      },
    ],
  },
  plugins: [reactRefresh()],
  build: {
    outDir: 'build',
    rollupOptions: {
      external: ['three'],
    },
  },
  optimizeDeps: {
    exclude: ['@react-three/postprocessing', 'three'],
  },
})
