var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var BucketMetadata = require('../components/BucketMetadata')
var BucketList = require('../components/BucketList')
var CloudAccountDetails = require('../components/CloudAccountDetails')
var DupedCloudData = require('../components/DupedCloudData')

require('../less/main.less')

function CloudScanResult (props) {
  return (
    <div className="row">
      <div className="col-md-3 col-xs-12">
        <CloudAccountDetails
          accountId={props.accountId}
          processedDate={props.processedDate}
        />
        <BucketMetadata
          treeMap={props.treeMap}
          activeBucket={props.activeBucket}
        />
        <BucketList
          buckets={props.buckets}
          activeBucket={props.activeBucket}
          onClickBucket={props.onClickBucket}
        />
      </div>
      <div className="col-md-9 col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Cloud Storage Information</h3>
          </div>
          <div className="panel-body">
            <DupedCloudData
              dupedDataMap={props.dupedDataMap}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = CloudScanResult;
