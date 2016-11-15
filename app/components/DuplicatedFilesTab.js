var React = require('react');
var DuplicatedFileMetadata = require('../components/DuplicatedFileMetadata');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

require('../less/main.less')
require('../less/bootstrap-overrides.less')

var DuplicatedFilesTab = React.createClass({
  render: function(props) {
    console.log(this.props)

    var code = this.props.dupedDataMap.metadata.file_count > 0
    ? 'panel-danger' : 'panel-default'
    var panelClasses = "panel " + code;

    var color = this.props.dupedDataMap.metadata.file_count > 0
    ? 'text-danger' : ''
    var contentMainClasses = "panel-content-main " + color;

    console.log(this.props.dupedDataMap)


    return (
      <div>
        <h4>Files</h4>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className={panelClasses}>
              <div className="panel-body">
                <div className={contentMainClasses}>
                  {this.props.dupedDataMap.metadata.file_count}
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
                  {this.props.dupedDataMap.metadata.total_storage_size}
                </div>
                <div className="panel-content-title">
                  Total Storage Lost {this.props.activeBucket}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Accordion>
              {
                Object.keys(this.props.dupedDataMap.files).map(function(fileKey, idx) {
                  return (
                    <Panel key={idx} header={fileKey}>
                    {
                      this.props.dupedDataMap.files[fileKey].map(function(fileKey, val) {
                      return (
                        !this.props.activeBucket ||
                            (this.props.activeBucket === fileKey.bucket)
                        ? <div key={val} className="row">
                            <div className={"col-md-3 col-sm-6 col-xs-12"}>
                              <DuplicatedFileMetadata
                                bucket={fileKey.bucket}
                                fileLocation={fileKey.file_location}
                                fileName={fileKey.file_name}
                                lastModified={fileKey.last_modified}
                                owner={fileKey.owner.display_name}
                                region={fileKey.region}
                                size={fileKey.size}
                                idx={val}
                              />
                            </div>
                          </div>
                        : null
                      )}.bind(this))
                    }
                    </Panel>
                  )
                }.bind(this))
              }
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DuplicatedFilesTab;
