import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing } from "../../theme";
import button from "./styles";

const sizes = {
  tiny: {
    padding: "8px",
    fontSize: ".6em"
  },
  small: {
    padding: "10px",
    fontSize: ".8em"
  },
  medium: {
    padding: "12px",
    fontSize: "1em"
  },
  large: {
    padding: "16px",
    fontSize: "1.2em"
  }
};

const StyledButton = styled.button`
    background: ${props => button[props.type].background};
    color: ${props => button[props.type].text}
    border: none;
    z-index: 10;
    padding: ${props => sizes[props.size].padding};
    font-size: ${props => sizes[props.size].fontSize};
    font-weight: 600;
    letter-spacing: ${spacing.letter}
    box-shadow: 1px 3px 15px 1px rgba(0,0,0,.2);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: ${props => button[props.type].hover.background};
        color: ${props => button[props.type].hover.text};
    }
`;

const Button = ({ theme, onClick, children, ...rest }) => (
  <StyledButton className={theme.container} {...rest} onClick={onClick}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "group", "success", "danger"]),
  size: PropTypes.oneOf(["tiny", "small", "medium", "large"]),
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: "primary",
  size: "medium",
  theme: {},
  onClick: null
};

export default Button;
