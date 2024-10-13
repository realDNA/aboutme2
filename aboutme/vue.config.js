module.exports = {
  lintOnSave: false,  // Disable ESLint during development
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
};
