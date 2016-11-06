var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HistoricalContainer = require('../containers/HistoricalContainer')

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
          <h1>Consuela</h1>
          <Link to='/path'>
            <button type="button" className='btn btn-default btn-lg'>Start New File Scan</button>
          </Link>
          <Link to='/processCloudScan'>
            <button type="button" className='btn btn-success btn-lg'>Start New Cloud Scan</button>
          </Link>
        </div>
        <div className="col-sm-12">
          <HistoricalContainer />
        </div>
      </div>
    )
  }
});

module.exports = Home;
