var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Tabs = require('../components/bootstrap/Tabs.js')
var Content = require('../components/bootstrap/Content.js')

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
      tabData: tabData,
      activeTab: tabData[0],
      content: 'Loading...'
    }
  },
  componentWillMount: function() {
    var contentBody = this.getContentForActiveTab(this.state.activeTab.name)
    this.setState({
      content: contentBody
    });
  },
  handleClick: function(tab) {
    this.setState({
      activeTab: tab,
      content: this.getContentForActiveTab(tab.name)
    });
  },
  getContentForActiveTab: function(name) {
    if (name === 'Duplicated Files') {
      var code = this.state.dupedDataMap.metadata.file_count > 0
      ? 'panel-danger' : 'panel-default'
      var panelClasses = "panel " + code;

      var color = this.state.dupedDataMap.metadata.file_count > 0
      ? 'text-danger' : ''
      var contentMainClasses = "panel-content-main " + color;

      console.log('here')
      console.log(this.props.activeBucket)

      return (
        <div>
          <h4>Files</h4>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className={panelClasses}>
                <div className="panel-body">
                  <div className={contentMainClasses}>
                    {this.state.dupedDataMap.metadata.file_count}
                  </div>
                  <div className="panel-content-title">
                    Duplicated File Count
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className={panelClasses}>
                <div className="panel-body">
                  <div className={contentMainClasses}>
                    {this.state.dupedDataMap.metadata.total_storage_size}
                  </div>
                  <div className="panel-content-title">
                    Total Storage Lost
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body">

                    {
                      Object.keys(this.state.dupedDataMap.files).map(function(fileKey, idx) {
                        return (this.state.dupedDataMap.files[fileKey].map(function(key, val) {
                          return (
                            <div>
                              {this.state.activeBucket === key ?
                              <div>{key}</div>
                              :null}
                            </div>
                          )}.bind(this)))
                        }.bind(this))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
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
