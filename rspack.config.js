// rspack.config.js
import { defineConfig } from '@rspack/cli';
import rspack from '@rspack/core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  entry: {
    main: './src/main.jsx',
  },
  output: {
    publicPath: isProd ? '/<your-repository-name>/' : '/',
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                  jsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                  },
                },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        type: 'css',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
  // 🚀 FIXED: Turn off lazy barrel sorting to resolve lucide-react module resolution bugs
  experiments: {
    lazyBarrel: false,
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
});
