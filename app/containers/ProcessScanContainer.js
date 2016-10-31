var React = require('react')
var ProcessScan = require('../components/ProcessScan')
var consuelaHelpers = require('../utils/consuelaHelpers');

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
  componentDidMount: function() {
    var query = this.props.location.query;
    consuelaHelpers.performScan(query.path)
      .then(function (result) {
        console.log(result);
        
        this.setState({
          isLoading: false,
          scanResult: [result]
        })
      }.bind(this))
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
