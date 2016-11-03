var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ScanJob = require('../components/ScanJob')

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ProcessScan (props) {
  return props.isLoading === true
    ? <p>Loading ...</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h2>Scan Results</h2>
        <ScanJob
          id={props.scanResult.id}
          status={props.scanResult.status}
          path={props.scanResult.path}
          onRefreshScan={props.onRefreshScan}
        />
      </div>
}

module.exports = ProcessScan
