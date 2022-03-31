module.exports = {
  // options...
  publicPath: process.env.VUE_APP_ENVIRONMENT === 'prod' ? '/clickboard' : '',
};
