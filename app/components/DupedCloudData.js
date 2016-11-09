var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

require('../less/main.less')

function DupedCloudData (props) {
  console.log(props.dupedDataMap)
  return (
    <div>
      <pre>{JSON.stringify(props.dupedDataMap)}</pre>
    </div>
  )
}

module.exports = DupedCloudData;
