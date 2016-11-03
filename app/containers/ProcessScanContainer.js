var React = require('react')
var ProcessScan = require('../components/ProcessScan')
var consuelaHelpers = require('../utils/consuelaHelpers');

var ProcessScanContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      path: '',
      scanResult: null
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    consuelaHelpers.retrieveJobScan(query.id)
      .then(function (result) {
        this.setState({
          isLoading: false,
          scanResult: result
        })
      }.bind(this))
  },
  handleRefreshScan: function () {
    consuelaHelpers.retrieveJobScan(this.state.scanResult.id)
      .then(function (result) {
        this.setState({
          isLoading: false,
          scanResult: result
        })
      }.bind(this))
  },
  render: function() {
    return (
      <ProcessScan
        isLoading={this.state.isLoading}
        scanResult={this.state.scanResult}
        path={this.state.path}
        onRefreshScan={this.handleRefreshScan}
      />
    )
  }
})

module.exports = ProcessScanContainer;
