var React = require('react');
var PropTypes = React.PropTypes;

var Tab = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.handleClick} className={this.props.isActive ? "active" : null}>
        <a href={this.props.pathname}>{this.props.data.name}</a>
      </li>
    );
  }
});

module.exports = Tab;
