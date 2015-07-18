'use strict';

const React = require('react');
const Router = require('react-router')
const RouteHandler = Router.RouteHandler;
const Link = Router.Link;

class App extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Server-Side React</title>
          <meta charSet="utf-8" />
        </head>
        <body>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="ip">Ip</Link></li>
          </ul>
          <RouteHandler />
        </body>
      </html>
    );
  }
}

module.exports = App;
