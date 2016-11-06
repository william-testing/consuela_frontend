var React = require('react')
var CloudPrompt = require('../components/CloudPrompt');
var consuelaHelpers = require('../utils/consuelaHelpers');

var CloudPromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      account: ''
    }
  },
  handleUpdatePath: function(e) {
    this.setState({
      account: e.target.value
    })
  },
  handleSubmitPath: function(e) {
    e.preventDefault();
    var account = this.state.account;
    this.setState({
      account: account
    });
    consuelaHelpers.performCloudScan(account)
      .then(function (result) {
        if (result) {
          console.log(result);
          this.context.router.push({
            pathname: '/cloudScan',
            query: {
              id: result.id
            }
          })
        }
      }.bind(this))
  },

  render: function() {
    return (
      <CloudPrompt
        onSubmitPath={this.handleSubmitPath}
        onUpdatePath={this.handleUpdatePath}
        header={this.props.route.header}
        account={this.state.account}
      />
    )
  }
})

module.exports = CloudPromptContainer;
