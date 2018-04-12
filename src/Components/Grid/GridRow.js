import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Row = styled.div.attrs({
    className: props => props.className,
    style: props => props.style
})`
    transition: height 0.3s;

    width: 100%;
    height: ${props => props.collapsible? 'auto': '100%'};
    display: flex;
    flex-direction: column;
    flex: ${props => props.collapsible? '0 0 auto': '1 1 auto'};
    justify-content: ${
        props => props.verticalAlign === 'middle'? 'center': props.verticalAlign === 'bottom'? 'flex-end': 'flex-start'
    };
    align-items: ${
        props => props.horizontalAlign === 'center'? 'center': props.horizontalAlign === 'right'? 'flex-end': 'flex-start'
    };
    -webkit-overflow-scrolling: touch;
    overflow: ${
        props => props.overflow === 'auto'? 'auto': 'hidden'
    };
    ${
        props => props.overflowX === 'auto'? 'overflow-x: auto': props.overflowX === 'hidden'? 'overflow-x: hidden': ''
    };
    ${
        props => props.overflowY === 'auto'? 'overflow-y: auto': props.overflowY  === 'hidden'? 'overflow-y: hidden': ''
    };
`;

const GridRow = (props) => {
    return <Row {...props}>{ props.children }</Row>;
}

export {GridRow};