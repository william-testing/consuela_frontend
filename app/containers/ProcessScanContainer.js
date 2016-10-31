var React = require('react')
var ProcessScan = require('../components/ProcessScan')

var ProcessScanContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    var query = this.props.location.query;

    return {
      isLoading: true,
      path: query.path,
      scanResult: []
    }
  },
  render: function() {
    return (
      <ProcessScan
        isLoading={this.state.isLoading}
        scanResult={this.state.scanResult}
        path={this.state.path}
      />
    )
  }
})

module.exports = ProcessScanContainer;
