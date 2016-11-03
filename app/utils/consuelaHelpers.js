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

function retrieveJobScan (id) {
  return axios.get('http://127.0.0.1:3000/scan_jobs/' + id)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
}

function retrieveList () {
  return axios.get('http://127.0.0.1:3000/file_scans/')
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
  return axios.post('http://127.0.0.1:3000/scan_jobs', {
    path: path
  })
  .then(function (response) {
    console.log(response)
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
  },
  retrieveJobScan: function (id) {
    return retrieveJobScan(id)
  },
  retrieveList: function (id) {
    return retrieveList()
  }
}

module.exports = helpers;
