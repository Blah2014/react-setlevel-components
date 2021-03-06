'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GridColumn = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    transition: width 0.3s;\n\n    height: 100%;\n    width: ', ';\n    ', '\n    display: flex;\n    flex-direction: row;\n    flex: ', ';\n    justify-content: ', ';\n    align-items: ', ';\n    -webkit-overflow-scrolling: touch;\n    overflow: ', ';\n    ', ';\n    ', ';\n'], ['\n    transition: width 0.3s;\n\n    height: 100%;\n    width: ', ';\n    ', '\n    display: flex;\n    flex-direction: row;\n    flex: ', ';\n    justify-content: ', ';\n    align-items: ', ';\n    -webkit-overflow-scrolling: touch;\n    overflow: ', ';\n    ', ';\n    ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Column = _styledComponents2.default.div.attrs({
    className: function className(props) {
        return props.className;
    },
    style: function style(props) {
        return props.style;
    }
})(_templateObject, function (props) {
    return props.collapsible ? 'auto' : '100%';
}, function (props) {
    return props.close ? 'width: 0' : '';
}, function (props) {
    return props.collapsible ? '0 0 auto' : '1 1 auto';
}, function (props) {
    return props.verticalAlign === 'middle' ? 'center' : props.verticalAlign === 'bottom' ? 'flex-end' : 'flex-start';
}, function (props) {
    return props.horizontalAlign === 'center' ? 'center' : props.horizontalAlign === 'right' ? 'flex-end' : 'flex-start';
}, function (props) {
    return props.overflow === 'auto' ? 'auto' : 'hidden';
}, function (props) {
    return props.overflowX === 'auto' ? 'overflow-x: auto' : props.overflowX === 'hidden' ? 'overflow-x: hidden' : '';
}, function (props) {
    return props.overflowY === 'auto' ? 'overflow-y: auto' : props.overflowY === 'hidden' ? 'overflow-y: hidden' : '';
});

var GridColumn = function GridColumn(props) {
    return _react2.default.createElement(
        Column,
        props,
        props.children
    );
};

exports.GridColumn = GridColumn;