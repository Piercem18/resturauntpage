import path from 'path';

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(new URL('.', import.meta.url).pathname, 'dist')
    
  }
};
