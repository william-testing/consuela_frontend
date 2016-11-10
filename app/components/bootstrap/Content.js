var React = require('react');
var PropTypes = React.PropTypes;

var Content = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.activeTab.name === 'Tab 1' ?
        <section>
          <p className="panel-body">
            {this.props.activeTab.name} {this.props.content}
          </p>
         </section>
        :null}
        {this.props.activeTab.name === 'Tab 2' ?
        <section>
          <p className="panel-body">
            {this.props.activeTab.name} {this.props.content}
          </p>
        </section>
        :null}
        {this.props.activeTab.name === 'Tab 3' ?
        <section>
          <p className="panel-body">
            {this.props.activeTab.name} {this.props.content}
          </p>
        </section>
        :null}
      </div>
    );
  }
});

module.exports = Content;
