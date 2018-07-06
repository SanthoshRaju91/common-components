/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const alignItems = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};

const justifyContent = {
  fill: 'space-between',
  left: 'flex-start',
  right: 'flex-end'
};

const StackedItem = styled.div`
  flex-basis: ${props => props.width}%;
`;

const StyledStack = styled.div`
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  aligh-items: ${props => alignItems[props.alignVertical]};
  justify-content: ${props => justifyContent[props.align]};

  > * {
    flex: ${props => (props.align === 'fill' ? 1 : 'none')};
    margin-right: ${props => (props.align === 'fill' ? '8px' : '10px')};
  }
  > *:last-child {
    margin-right: 0;
  }
`;

const Stack = props => {
  let children;

  if (props.align === 'fill') {
    children = React.Children.map(props.children, (child, index) => {
      let width = 0;
      if (props.widths) width = `${props.widths[index]}` || 0;

      return <StackedItem width={width}> {child} </StackedItem>;
    });
  } else {
    children = props.children;
  }

  return (
    <StyledStack {...props} align={props.align}>
      {children}
    </StyledStack>
  );
};

Stack.propTypes = {
  align: PropTypes.oneOf(['fill', 'left', 'right']),
  widths: PropTypes.arrayOf(PropTypes.number)
};

Stack.defaultProps = {
  align: 'fill',
  alignVertical: 'center'
};

export default Stack;
