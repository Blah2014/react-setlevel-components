import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Column = styled.div.attrs({
    className: props => props.className,
    style: props => props.style
})`
    //backface-visibility: hidden;
    transition: width 0.3s;

    height: 100%;
    width: ${props => props.collapsible? 'auto': '100%'};
    ${props => props.close? 'width: 0': ''}
    display: flex;
    flex-direction: row;
    flex: ${props => props.collapsible? '0 0 auto': '1 1 auto'};
    justify-content: ${
        props => props.verticalAlign === 'middle'? 'center': props.verticalAlign === 'bottom'? 'flex-end': 'flex-start'
    };
    align-items: ${
        props => props.horizontalAlign === 'center'? 'center': props.horizontalAlign === 'right'? 'flex-end': 'flex-start'
    };
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

const GridColumn = (props) => {
    return <Column {...props}>{ props.children }</Column>;
}

export {GridColumn};