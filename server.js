

// Import the cors-anywhere module
var cors_proxy = require('cors-anywhere');

// Define the host and port from environment variables or use defaults
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;

// Create and start the CORS proxy server
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

