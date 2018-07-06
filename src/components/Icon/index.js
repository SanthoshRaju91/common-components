import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIcon = styled.i`
  padding: 0 5px;
`;

const Icon = props => <StyledIcon className={`fa fa-${props.name}`} />;

Icon.propTypes = {
  name: PropTypes.string
};

Icon.defaultProps = {
  name: ""
};

export default Icon;
