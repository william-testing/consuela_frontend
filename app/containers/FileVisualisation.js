var React = require('react')
var consuelaHelpers = require('../utils/consuelaHelpers');

var FileVisualisation = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: this.props.isLoading,
      result: this.props.result,
    }
  },
  render: function() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
})

module.exports = FileVisualisation;
