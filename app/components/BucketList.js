var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function BucketList (props) {
  var bucketNames = props.buckets.bucketList;
  return (
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
  )
}

module.exports = BucketList
