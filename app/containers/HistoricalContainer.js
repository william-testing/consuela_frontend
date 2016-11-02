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
      showUnsuccessful: false,
      historical: null
    }
  },
  handleSuccessChange: function(e) {
    this.setState({
      showUnsuccessful: e.target.checked
    })
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
          showUnsuccessful={this.state.showUnsuccessful}
          onSuccessChange={this.handleSuccessChange}
        />
    )
  }
})

module.exports = HistoricalContainer;
