var React = require('react');

var TableRow = React.createClass({
  render: function() {
    var columns = this.props.columns;
    var data = this.props.data;

    var td = function (item) {
      return columns.map(function(c, i) {
        return <td key={i}>{item[c]}</td>;
        }, this);
      }.bind(this);

    return (
      <tr key={data}>{td(data)}</tr>
    )
  }
});
module.exports = TableRow;
