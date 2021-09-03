/* eslint-disable import/no-extraneous-dependencies */
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  plugins: [
    createVuePlugin(),
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
};
