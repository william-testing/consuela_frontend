var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Tabs = require('../components/bootstrap/Tabs.js')
var Content = require('../components/bootstrap/Content.js')
var DuplicatedFilesTab = require('../components/DuplicatedFilesTab');

require('../less/main.less')

var tabData = [
  { name: 'Duplicated Files', isActive: true },
  { name: 'Storage Visualisations', isActive: false }
]

var DupedCloudDataContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      dupedDataMap: this.props.dupedDataMap,
      activeBucket: this.props.activeBucket,
      tabData: tabData,
      activeTab: tabData[0],
      content: 'Loading...'
    }
  },
  componentWillMount: function() {
    this.updateContentState();
  },
  componentWillReceiveProps: function(props) {
    this.setState({activeBucket: props.activeBucket}, function() {
      this.updateContentState();
    });
  },
  handleClick: function(tab) {
    this.setState({
      activeTab: tab,
      content: this.getContentForActiveTab(tab.name)
    });
  },
  updateContentState: function() {
    this.setState({
      content: this.getContentForActiveTab(this.state.activeTab.name)
    });
  },
  getContentForActiveTab: function(name) {
    if (name === 'Duplicated Files') {
      return (
          <DuplicatedFilesTab
            activeBucket={this.state.activeBucket}
            dupedDataMap={this.state.dupedDataMap}
          />
      )
    } else {
      return <h4>Visualisations</h4>
    }
  },
  render: function() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} tabs={this.state.tabData} changeTab={this.handleClick} />
        <Content activeTab={this.state.activeTab} content={this.state.content} />
      </div>
    );
  }
})

module.exports = DupedCloudDataContainer;
