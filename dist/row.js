'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var Row = _react2['default'].createClass({
  displayName: 'Row',

  propTypes: {
    align: _propTypes2['default'].string },

  // left or right
  getDefaultProps: function getDefaultProps() {
    return {
      align: 'left'
    };
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.props.align === 'left' ? 'flexbox' : 'flexbox-right' },
      this.props.children
    );
  }
});
exports.Row = Row;