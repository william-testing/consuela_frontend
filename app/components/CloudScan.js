var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var CloudScanResult = require('../components/CloudScanResult')
var BucketList = require('../components/BucketList')

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function CloudScan (props) {
  return props.isLoading === true
    ? <p>Loading ...</p>
    : <div>
        <div className="col-sm-12">
          <div className="page-header">
            <h2>Scan Results <br/><small>for account '{props.result.account_id}'</small></h2>
          </div>
        </div>
        <div className="col-sm-12">
          <div style={styles.cloudScanResultContainer}>
            <CloudScanResult
              treeMap={props.result.tree_map}
              flatMap={props.result.flat_map}
              dupedDataMap={props.result.dup_data_map}
              buckets={props.result.buckets}
              activeBucket={props.activeBucket}
              onClickBucket={props.onClickBucket}
              accountId={props.result.account_id}
              processedDate={props.result.processed_date}
              pathName={props.pathName}
            />
          </div>
        </div>
      </div>
}

module.exports = CloudScan
