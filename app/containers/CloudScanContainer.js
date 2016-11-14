var React = require('react')
var consuelaHelpers = require('../utils/consuelaHelpers');
var CloudScan = require('../components/CloudScan')

var CloudScanContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      result: '',
      activeBucket: ''
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    consuelaHelpers.retrieveCloudScan(query.id)
      .then(function (result) {
        this.setState({
          isLoading: false,
          result: result
        })
      }.bind(this))
  },
  handleClickBucket: function(e) {
    var bucketValue = e.currentTarget.textContent;
    if (bucketValue === 'Clear') {
      bucketValue = ''
    };

    this.setState({
      activeBucket: bucketValue
    })
  },
  render: function() {
    return (
      <CloudScan
        isLoading={this.state.isLoading}
        result={this.state.result}
        onClickBucket={this.handleClickBucket}
        activeBucket={this.state.activeBucket}
        pathName={this.props.location.pathname}
      />
    )
  }
})

module.exports = CloudScanContainer;
