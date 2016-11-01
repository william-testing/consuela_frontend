var React = require('react')
var ListHistorical = require('../components/ListHistorical')
var consuelaHelpers = require('../utils/consuelaHelpers');

var HistoricalContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      historical: null
    }
  },
  componentDidMount: function() {
    consuelaHelpers.retrieveList()
      .then(function (result) {
        this.setState({
          isLoading: false,
          historical: result
        })
      }.bind(this))
  },
  render: function() {
    return (
        <ListHistorical
          isLoading={this.state.isLoading}
          historical={this.state.historical}
          columns={['id', 'path', 'status']}
        />
    )
  }
})

module.exports = HistoricalContainer;
