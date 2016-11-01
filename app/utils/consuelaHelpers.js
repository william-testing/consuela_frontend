var axios = require('axios');

function retrieveScan (id) {
  return axios.get('http://127.0.0.1:3000/file_scans/' + id)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
}

function performScan (path) {
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

  console.log(path);
  return axios.post('http://127.0.0.1:3000/file_scans', {
    path: path
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
}

var helpers = {
  performScan: function (path) {
    return performScan(path)
  },
  retrieveScan: function (id) {
    return retrieveScan(id)
  }
}

module.exports = helpers;
