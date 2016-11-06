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
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
          <h2>Scan Results</h2>
        </div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div>
                <strong>ID:</strong> {props.result.id}
              </div>
              <div>
                <strong>Account ID:</strong> {props.result.account_id}
              </div>
              <div>
                <strong>Processed Date:</strong> {props.result.processed_date}
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
            Active Bucket: {props.activeBucket}
              <BucketList
                buckets={props.result.buckets}
                activeBucket={props.activeBucket}
                onClickBucket={props.onClickBucket}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div>

          </div>

          <CloudScanResult
            // treeMap={props.result.tree_map}
            // flatMap={props.result.flat_map}
            // dupedMap={props.result.dup_data_map}
            // activeBucket={props.activeBucket}
          />
        </div>
      </div>
}

module.exports = CloudScan
