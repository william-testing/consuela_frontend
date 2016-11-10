var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var BucketMetadata = require('../components/BucketMetadata')
var BucketList = require('../components/BucketList')
var CloudAccountDetails = require('../components/CloudAccountDetails')
var DupedCloudDataContainer = require('../containers/DupedCloudDataContainer')

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
          flatMap={props.flatMap}
          activeBucket={props.activeBucket}
        />
        <BucketList
          buckets={props.buckets}
          activeBucket={props.activeBucket}
          onClickBucket={props.onClickBucket}
        />
      </div>
      <div className="col-md-9 col-xs-12">
        <DupedCloudDataContainer
          dupedDataMap={props.dupedDataMap}
          activeBucket={props.activeBucket}
          pathName={props.pathName}
        />
      </div>
    </div>
  )
}

module.exports = CloudScanResult;
