var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function statusCodeToText (code) {
  if (code == 1) {
    return "Success"
  } else if (code == 0) {
    return "Provisional"
  } else {
    return "Error"
  }
}

function ProcessScan (props) {
  return props.isLoading === true
    ? <p>Loading ...</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Consuela Results
          <small> {props.scanResult.path}</small>
        </h1>
        <div className='col-sm-8 col-sm-offset-2'>
          Status: {statusCodeToText(props.scanResult.status)}
          {puke(props.scanResult.tree_map)}
        </div>
      </div>
}

module.exports = ProcessScan
