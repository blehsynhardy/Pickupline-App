const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use [
        createProxyMiddleware('/lines/random',
        {
            target: 'https://getpickuplines.herokuapp.com',
            changeOrigin : true
        })
    ]
}