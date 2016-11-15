var React = require('react');

require('../less/main.less')
require('../less/bootstrap-overrides.less')

var DuplicatedFileMetadata = React.createClass({
  render: function(props) {
    return (
      <div key={this.props.idx}>
        <div>Bucket: {this.props.bucket}</div>
        <div>File Location: {this.props.fileLocation}</div>
        <br/>
      </div>
    )
  }
});

module.exports = DuplicatedFileMetadata;
