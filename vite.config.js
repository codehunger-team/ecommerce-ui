import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/main.js'],
            refresh: true,
        }),

        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),

        vuetify({
            styles: {
              configFile: 'resources/styles/variables/_vuetify.scss',
            },
        }),

        AutoImport({
            eslintrc: {
              enabled: true,
              filepath: './.eslintrc-auto-import.json',
            },
            imports: ['vue', 'vue-router'],
            vueTemplate: true,
        }),
    ],

    define: { 'process.env': {} },

    optimizeDeps: {
        exclude: ['vuetify'],
        entries: [
          './resources/js/**/*.vue',
        ],
    },
});
