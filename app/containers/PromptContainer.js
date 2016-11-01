var React = require('react')
var Prompt = require('../components/Prompt');

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

    if (this.state.path) {
      console.log(this.state.path)
      this.context.router.push({
        pathname: '/process',
        query: {
          path: this.state.path
        }
      })
    } else {
      console.log('here')
    }
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
