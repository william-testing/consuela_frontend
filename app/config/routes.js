var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ProcessScanContainer = require('../containers/ProcessScanContainer');
var CloudPromptContainer = require('../containers/CloudPromptContainer');
var CloudScanContainer = require('../containers/CloudScanContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='path' header='Enter Path to Scan' component={PromptContainer}/>
      <Route path='process' component={ProcessScanContainer}/>
      <Route path='cloudScan' component={CloudScanContainer}/>
      <Route path='processCloudScan' component={CloudPromptContainer}/>
    </Route>
  </Router>
)

module.exports = routes;
