var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Tabs = require('../components/bootstrap/Tabs.js')
var Content = require('../components/bootstrap/Content.js')

require('../less/main.less')

var tabData = [
  { name: 'Tab 1', isActive: true },
  { name: 'Tab 2', isActive: false },
  { name: 'Tab 3', isActive: false }
]

var DupedCloudDataContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      activeBucket: this.props.activeBucket,
      dupedDataMap: this.props.dupedDataMap,
      tabData: tabData,
      activeTab: tabData[0]
    }
  },
  handleClick: function(tab) {
    this.setState({activeTab: tab});
  },
  render: function() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} tabs={this.state.tabData} changeTab={this.handleClick} />
        <Content activeTab={this.state.activeTab} content={'Test Content'} />
      </div>
    );
  }
})

module.exports = DupedCloudDataContainer;
