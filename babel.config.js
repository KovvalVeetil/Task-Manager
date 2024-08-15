module.exports = {
    presets: [
      '@babel/preset-env',      // Transpile ES6+ to ES5
      '@babel/preset-typescript' // Transpile TypeScript to JavaScript
    ],
    plugins: [
      '@babel/plugin-transform-runtime' // Optimize code and reduce duplication
    ],
    // Optional: If you're using dynamic imports or other advanced features
    // you may need additional plugins or configurations
    // e.g., for proposal-class-properties or proposal-private-methods
    // plugins: [
    //   '@babel/plugin-proposal-class-properties',
    //   '@babel/plugin-proposal-private-methods'
    // ]
  };
  