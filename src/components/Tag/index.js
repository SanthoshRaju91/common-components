import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing, misc } from '../../theme';

const StyledTag = styled.div`
    display: inline-block;

    background: ${props => misc.tags[props.appearance].background};
    color: ${props => misc.tags[props.appearance].color};
    border: none;
    border-radius: ${misc.radius};
    padding: ${props => misc.tags.padding[props.size]};
    letter-spacing: ${spacing.letter};
    font-size: ${props => misc.tags.size[props.size]};
`

const Tag = ({children, ...props}) => (
    <StyledTag { ...props}>
        { children }
    </StyledTag>
);

Tag.propTypes = {
    appearance: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger', 'success']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    children: PropTypes.node    
}

Tag.defaultProps = {
    appearance: 'primary',
    size: 'medium'
}

export default Tag;


