import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';
import { color, spacing } from '../../theme';

const style = {
    title: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    header: {
        fontSize: '1em',
        fontWeight: '300'
    },
    doc: {
        fontSize: '1em',
        fontWeight: '300'
    }
}

const Wrapper = styled.div`
    display: inline-block;
    width: 15%;
    border-bottom: ${props => props.type === 'doc' ? '0px': `1px solid ${color.base.line}`};
    margin-bottom: 15px;
    max-height: 65px;
`;

const Content = styled.div`
    padding: 10px 5px;
    float: ${props => props.position};
`;

const Text = styled.span`
    font-size: ${props => style[props.type].fontSize};
    font-weight: ${props => style[props.type].fontWeight};
    letter-spacing: ${ spacing.letter};
`;

const Heading = ({ children, position, text, icon, type }) => (
    <Wrapper type={type}>
        <Content position={position}>            
            {icon ? (<Text type={type}><Icon name={icon} /> {text}</Text>) : (<Text type={type}> { text } </Text>)}
        </Content>
    </Wrapper>
);

Heading.propTypes = {
    children: PropTypes.node,
    position: PropTypes.oneOf(['right', 'left']),
    text: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string
}

Heading.defaultProps = {
    position: 'left',
    text: '',
    icon: '',
    type: 'header'
}

export default Heading;