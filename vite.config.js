import { defineConfig } from 'vite';

export default defineConfig({
    base: './', 
    server: {
        open: true, 
    },
    resolve: {
        alias: {
            phaser: 'phaser/src/phaser.js', 
        },
    },
});