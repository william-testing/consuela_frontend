var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ProcessScan(props) {
  return props.isLoading === true
    ? <p>Loading ({props.path})</p>
    : puke(props.scanResult)
}

module.exports = ProcessScan
