const path = require('path');
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      containers: path.resolve(__dirname, './src/containers'),
    },
  },
  plugins: [reactRefresh()],
});
