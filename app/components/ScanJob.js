var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var scanJobHelpers = require('../utils/scanJobHelpers');


function Prompt (props) {
  return (
      <div className="col-sm-12">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>{props.id}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{scanJobHelpers.statusCodeToText(props.status)}</td>
                </tr>
                <tr>
                  <td>Path</td>
                  <td>{props.path}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 col-sm-12">
          <button
            className="btn btn-block btn-success"
            type="submit"
            onClick={props.onRefreshScan}>
            Refresh
          </button>
          </div>
        </div>
      </div>
  )
}

module.exports = Prompt;
