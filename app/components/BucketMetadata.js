var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var scanJobHelpers = require('../utils/scanJobHelpers');


function BucketMetadata (props) {
console.log(props)
  return (
    <div className="row">
      <div className="col-xs-12">
        <h4>Buckets</h4>
        {Object.keys(props.treeMap).map(function(bucketKey, idx) {
          return (
            <div key={idx}>
              <h5>{bucketKey}</h5>
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
  )
}

module.exports = BucketMetadata
