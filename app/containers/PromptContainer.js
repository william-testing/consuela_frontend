var React = require('react')
var Prompt = require('../components/Prompt');
var consuelaHelpers = require('../utils/consuelaHelpers');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      path: ''
    }
  },
  handleUpdatePath: function(e) {
    this.setState({
      path: e.target.value
    })
  },
  handleSubmitPath: function(e) {
    e.preventDefault();
    var path = this.state.path;
    this.setState({
      path: path
    })
    consuelaHelpers.performScan(path)
      .then(function (result) {
        if (result) {
          this.context.router.push({
            pathname: '/process',
            query: {
              id: result.id
            }
          })
        }
      }.bind(this))
  },

  render: function() {
    return (
      <Prompt
      onSubmitPath={this.handleSubmitPath}
      onUpdatePath={this.handleUpdatePath}
      header={this.props.route.header}
      path={this.state.path}
      />
    )
  }
})

module.exports = PromptContainer;
