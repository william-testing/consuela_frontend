var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TableRow = require('../components/TableRow');

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ListHistorical (props) {
  return props.isLoading === true
    ? <p>Loading ...</p>
    : <div className="row">
        <div className="col-xs-12">
          <h4>Last Successful File Scans</h4>
          <input
            type="checkbox"
            name="showUnsuccessful"
            defaultChecked={props.showUnsuccessful}
            onChange={props.onSuccessChange}
          /> Show Unsuccessful

          <table className="table table-striped">
            <thead>
              <tr>
              {
                props.columns.map(function (name, idx) {
                  return <th key={idx}>{name}</th>
                })
              }
              </tr>
            </thead>
            <tbody>
              {
                props.historical.map(function (item, idx) {
                  if (props.showUnsuccessful) {
                    return <TableRow key={idx} data={item} columns={props.columns}/>
                  } else {
                    if (item.status == 1) {
                      return <TableRow key={idx} data={item} columns={props.columns}/>
                    }
                  }
                })
              }
            </tbody>
          </table>
        </div>
      </div>
}

module.exports = ListHistorical;
