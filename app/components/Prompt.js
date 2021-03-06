var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h2>{props.header}</h2>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitPath}>
          <div className="form-group">
            <input
            className="form-control"
            placeholder="Path"
            onChange={props.onUpdatePath}
            value={props.path}
            type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success" type="submit">
              Scan!
            </button>
          </div>
        </form>
      </div>
      <h1>{props.path}</h1>
    </div>
  )
}
Prompt.propTypes = {
  header: PropTypes.string.isRequired
}

module.exports = Prompt;
