import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color, spacing, misc } from "../../theme";
import Icon from "../Icon";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.div`
  width: 100%;
  background: ${color.input.background};
  letter-spacing: ${spacing.letter};
  border: 1px solid;
  border-color: ${color.input.border};
  border-radius: ${misc.radius};
  box-shadow: 0px 0px 0.5px ${color.input.borderFocus};
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: ${color.input.borderHover};
  }
`;

const Content = styled.div`
  display: inline-block;
  padding: ${spacing.input.padding};
`;

const StyledIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${color.base.gray};
`;

const OptionContainer = styled.div`
  background: ${color.input.background};
  border-left: 1px solid ${color.base.line};
  border-right: 1px solid ${color.base.line};
  border-bottom: 1px solid ${color.base.line};
  position: absolute;
  width: 100%;
  z-index: 999;
`;

const OptionStyled = styled.div`
  padding: 20px 15px;
  cursor: pointer;
  letter-spacing: 0.5px;
  background: ${props =>
    props.selected ? color.base.gray : color.input.background};

  &:hover {
    background: ${color.input.optionHover};
  }
`;

class Dropdown extends Component {
  static Option = props => (
    <OptionStyled {...props}>{props.children}</OptionStyled>
  );

  constructor(props) {
    super(props);

    const options = React.Children.toArray(this.props.children);
    const selected = options.find(current => current.selected) || {
      props: {}
    };

    this.ref = React.createRef();
    this.dropdownRef = `dropdown-${Math.random().toPrecision(2)}`;

    this.state = {
      isOpen: this.props.isOpen,
      selected
    };
  }

  openOption = () => {
    this.setState(
      state => ({
        isOpen: true
      }),
      () => {
        this.setupOutsideClick();
      }
    );
  };

  setupOutsideClick = () => {
    const id = this.ref.current.props.id;
    const ele = document.getElementById(`${id}`);

    document.addEventListener("click", event => {
      if (!ele.contains(event.target)) {
        this.setState({
          isOpen: false
        });
      }
    });
  };

  selectOption = option => {
    this.setState(
      {
        selected: option,
        isOpen: false
      },
      () => this.props.onChange(option.props.value)
    );
  };

  render() {
    const { isOpen, selected } = this.state;

    return (
      <Container ref={this.ref} id={this.dropdownRef}>
        <Input onClick={this.openOption}>
          <Content>
            {selected.props.children ? selected.props.children : "Select"}
            <StyledIcon>
              <Icon name="sort-desc" />
            </StyledIcon>
          </Content>
        </Input>
        {isOpen && (
          <OptionContainer>
            {React.Children.map(this.props.children, child =>
              React.cloneElement(child, {
                onClick: () => this.selectOption(child),
                active: selected === child.props.selected
              })
            )}
          </OptionContainer>
        )}
      </Container>
    );
  }
}

Dropdown.propTypes = {
  icon: PropTypes.string,
  isOpen: PropTypes.bool
};

Dropdown.defaultProps = {
  icon: "sort-desc",
  isOpen: false
};

export default Dropdown;
