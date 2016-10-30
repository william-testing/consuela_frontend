var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
  render: function() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Consuela</h1>
        <p className='lead'>
          Get started!
        </p>
        <Link to='/path'>
          <button type="button" className='btn btn-success btn-lrg'>Start!</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
