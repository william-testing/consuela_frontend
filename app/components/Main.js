var React = require('react');
var Navbar = require('../components/Navbar')

require('../less/main.less')
require('../less/bootstrap-overrides.less')

var Main = React.createClass({
  render: function() {
    return (
      <div>
      <Navbar />
        <div className='main-container'>
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;
