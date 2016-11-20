var React = require('react')
var consuelaHelpers = require('../utils/consuelaHelpers');
var FileVisualisation = require('../containers/FileVisualisation')

var VisualisationsContainer = React.createClass({
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
  render: function() {
    return (
      <FileVisualisation
        isLoading={this.state.isLoading}
        result={this.state.result}
      />
    )
  }
})

module.exports = VisualisationsContainer;
