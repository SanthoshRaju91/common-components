import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { misc } from '../../theme';

const StyledSecondary = styled.div`
    display: inline-block;
    background: ${props => misc.secondaryActions.color[props.type].background};
    color: ${props => misc.secondaryActions.color[props.type].color};
    padding: ${misc.secondaryActions.padding};
    text-align: center;
    cursor: pointer;
    margin-right: 5px;
    border-radius: ${misc.radius};
    transition: background .3s ease;

    &:hover {
        background: ${props => misc.secondaryActions.color[props.type].backgroundHover};
    }
`;

const Secondary = props => <StyledSecondary {...props}> {props.children} </StyledSecondary>

Secondary.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary'])
};

Secondary.defaultProps = {
    type: 'primary'
};

export default Secondary;