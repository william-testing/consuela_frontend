var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var scanJobHelpers = require('../utils/scanJobHelpers');
require('../less/main.less');

function BucketMetadata (props) {
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Buckets</h3>
          </div>
          <div className="panel-body">
            {Object.keys(props.treeMap).map(function(bucketKey, idx) {
              return (
                <div key={idx}>
                  <h4 className={props.activeBucket == bucketKey ? 'active-bucket' : ''}>
                    {bucketKey}
                  </h4>
                  <div>
                    Files: {props.treeMap[bucketKey].file_count} (
                      {scanJobHelpers.bytesToMb(
                        props.treeMap[bucketKey].total_storage_size)} MB)
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = BucketMetadata
