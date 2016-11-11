var React = require('react');
var PropTypes = React.PropTypes;

var Content = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.activeTab.name === 'Duplicated Files' ?
        <section>
          <div className="panel-body">
            {this.props.content}
          </div>
         </section>
        :null}
        {this.props.activeTab.name === 'Storage Visualisations' ?
        <section>
          <div className="panel-body">
            {this.props.content}
          </div>
        </section>
        :null}
      </div>
    );
  }
});

module.exports = Content;
