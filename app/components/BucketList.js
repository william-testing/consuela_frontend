var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function BucketList (props) {
  var bucketNames = props.buckets.bucketList;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Active Bucket: {props.activeBucket}</h3>
      </div>
      <div className="panel-body">
        <ul className="nav nav-pills">
          {bucketNames.map(function(name, idx) {
            return <li
              key={idx}
              role="presentation"
              className={props.activeBucket === name ? 'active' : ''}>
                <a onClick={props.onClickBucket}>{name}</a>
            </li>
          })}
          <li role="presentation"><a onClick={props.onClickBucket}>Clear</a></li>
        </ul>
      </div>
    </div>

  )
}

module.exports = BucketList
