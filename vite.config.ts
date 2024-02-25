import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgSpritePlugin({
      include: '**/icons/**/*.svg',
      symbolId: '[name]'
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.develop.omgapp.ru/',
        changeOrigin: true
      },
      '/media': {
        target: 'https://api.develop.omgapp.ru/',
        changeOrigin: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/style/_mixins.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url))
    }
  }
});
