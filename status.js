'use strict';


const status = function(request) {
  return {
    status: 'running on status.js',
    port: parseInt(process.env.PORT),
    domain: request.hostname,
  };
};

module.exports = status;
