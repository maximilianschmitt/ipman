'use strict';

const React = require('react');

class Ip extends React.Component {
  render() {
    return <div>Your ip is: {this.props.ip || 'undefined'}</div>;
  }
}

module.exports = Ip;
