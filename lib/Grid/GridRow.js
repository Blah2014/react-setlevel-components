'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GridRow = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Row = _styledComponents2.default.div.attrs({
    className: props => props.className,
    style: props => props.style
})`
    backface-visibility: hidden;
    transition: height 0.3s;

    width: 100%;
    height: ${props => props.collapsible ? 'auto' : '100%'};
    display: flex;
    flex-direction: column;
    flex: ${props => props.collapsible ? '0 0 auto' : '1 1 auto'};
    justify-content: ${props => props.verticalAlign === 'middle' ? 'center' : props.verticalAlign === 'bottom' ? 'flex-end' : 'flex-start'};
    align-items: ${props => props.horizontalAlign === 'center' ? 'center' : props.horizontalAlign === 'right' ? 'flex-end' : 'flex-start'};
    overflow: ${props => props.overflow === 'auto' ? 'auto' : 'hidden'};
    ${props => props.overflowX === 'auto' ? 'overflow-x: auto' : props.overflowX === 'hidden' ? 'overflow-x: hidden' : ''};
    ${props => props.overflowY === 'auto' ? 'overflow-y: auto' : props.overflowY === 'hidden' ? 'overflow-y: hidden' : ''};
`;

const GridRow = props => {
    return _react2.default.createElement(
        Row,
        props,
        props.children
    );
};

exports.GridRow = GridRow;