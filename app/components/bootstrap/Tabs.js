var React = require('react');
var PropTypes = React.PropTypes;
var Tab = require('../../components/bootstrap/Tab.js')

var Tabs = React.createClass({
  getInitialState: function() {
    console.log(this.props)
    return {
      activeBucket: this.props.activeBucket,
      dupedDataMap: this.props.dupedDataMap,
      tabs: this.props.tabs
    }
  },
  render: function() {
    return (
      <ul className="nav nav-tabs">
        {this.state.tabs.map(function(tab, idx){
          return (
            <Tab key={idx} data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(null,tab)} />
          );
        }.bind(this))}
      </ul>
    );
  }
});

module.exports = Tabs;
