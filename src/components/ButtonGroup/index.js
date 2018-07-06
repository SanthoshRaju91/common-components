import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const justifyContent = {
    left: 'flex-start',
    right: 'flex-end'
};

const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: ${props => justifyContent[props.align]}
`;

const ButtonGroup = props => <StyledButtonGroup {...props}>{props.children}</StyledButtonGroup>

ButtonGroup.propTypes = {
    align: PropTypes.oneOf(['left', 'right'])
};

ButtonGroup.defaultProps = {
    align: 'right'
};

export default ButtonGroup;