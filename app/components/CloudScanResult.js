var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var BucketMetadata = require('../components/BucketMetadata')
require('../less/main.less')

function CloudScanResult (props) {
  return (
    <div className="row">
      <div className="col-md-3 col-xs-12">
        <BucketMetadata
          treeMap={props.treeMap}
          activeBucket={props.activeBucket}
        />
      </div>
      <div className="col-md-9 col-xs-12">
        <h4 className="test-component">Tree Map</h4>
      </div>
    </div>
  )
}

module.exports = CloudScanResult
