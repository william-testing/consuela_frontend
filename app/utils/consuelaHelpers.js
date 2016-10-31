var axios = require('axios');

function performScan (path) {
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

  console.log(path);
  return axios.post('http://127.0.0.1:3000/file_scans', {
    path: path
  })
  .then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  })
}

var helpers = {
  performScan: function(path) {
    return performScan(path)
  }
}

module.exports = helpers;
