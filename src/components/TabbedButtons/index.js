import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Proptypes from "prop-types";
import { color, spacing } from "../../theme";

const Container = styled.div``;

const TabbedContainer = styled.div`
  display: inline-block;
  border: 0.5px solid ${color.base.line};
  border-right: 0px;
  width: 100px;
  height: 75px;
  padding: 10px;
  text-align: center;

  &:last-child {
    border-right: 0.5px solid ${color.base.line};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 18px;
`;
const StyledText = styled.p`
  font-size: 18px;
  letter-spacing: ${spacing.letter};
`;

const TabbedButtons = ({ tabs, handleClick }) => {
  return (
    <Container>
      {tabs.map(current => (
        <TabbedContainer key={current.id} onClick={() => handleClick(current)}>
          <StyledIcon name={current.icon} />
          <StyledText>{current.label}</StyledText>
        </TabbedContainer>
      ))}
    </Container>
  );
};

TabbedButtons.propTypes = {
  tabs: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      icon: Proptypes.string,
      label: Proptypes.label
    })
  ),
  handleClick: Proptypes.func
};

TabbedButtons.defaultProps = {
  tabs: [],
  handleClick: null
};
export default TabbedButtons;
