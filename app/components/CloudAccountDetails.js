var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

require('../less/main.less')

function CloudAccountDetails (props) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Account Details</h3>
      </div>
      <div className="panel-body">
        <div>
          <strong>Account ID:</strong> {props.accountId}
        </div>
        <div>
          <strong>Processed Date:</strong> {props.processedDate}
        </div>
      </div>
    </div>
  )
}

module.exports = CloudAccountDetails
