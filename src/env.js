if (process.env.NODE_ENV === 'development') {
  module.exports = {
    baseUrl: window.MC && window.MC.HOST !== '' ? window.MC.HOST : 'http://112.74.26.228:8080'
  };
}
else { //production
  module.exports = {
    baseUrl: window.MC && window.MC.HOST !== '' ? window.MC.HOST : ''
  };
}
