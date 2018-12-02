import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Button from "../Button";
import { color, spacing } from "../../theme";

const sizes = {
  small: {
    width: "100px",
    padding: "8px",
    fontSize: "1em",
    height: "200px"
  },
  medium: {
    width: "250px",
    padding: "10px",
    fontSize: "1em",
    height: "300px"
  },
  large: {
    width: "500px",
    padding: "12px",
    fontSize: "1em",
    height: "500px"
  }
};

const SHOWMODAL = `
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1050;
`;

const HIDEMODAL = `
display: none;
`;

const StyledModal = styled.div`
  ${props => (props.isModalShown ? SHOWMODAL : HIDEMODAL)};
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  z-index: 2000;
  transform: translateX(-50%) translateY(-50%);
  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  background: #fff;
  margin: 0 auto !important;
  border-radius: 10px;
  border: none;
  text-align: center;
`;

const ModalHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  height: 20%;
  display: flex;
  vertical-align: middle;
  align-content: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  height: 200px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const ModalFooter = styled.div`
  width: 100%;
  display: block;

  button:nth-child(1) {
    float: left;
    margin-left: 2%;
    margin-top: 1%;
    margin-bottom: 1%;
    min-width: 100px;
    color: white;
  }

  button:nth-child(2) {
    float: right;
    margin-right: 2%;
    margin-top: 1%;
    margin-bottom: 1%;
    min-width: 100px;
    color: white;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  transition: opacity 0.15s linear;
  opacity: 0.5;
`;

class Modal extends Component {
  static Header = ({ children, ...rest }) => (
    <ModalHeader {...rest}> {children}</ModalHeader>
  );

  static Content = ({ children, ...rest }) => (
    <ModalContent {...rest}>{children}</ModalContent>
  );

  static Footer = ({ children, ...rest }) => (
    <ModalFooter {...rest}> {children}</ModalFooter>
  );

  render() {
    const { theme, children, isModalShown } = this.props;

    return (
      <div>
        {isModalShown && (
          <div>
            <ModalBackdrop />

            <ThemeProvider theme={theme}>
              <StyledModal
                isModalShown={isModalShown}
                className={theme.container}
              >
                <ModalContainer tabIndex="-1">
                  {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {
                      ...child.props
                    });
                  })}
                </ModalContainer>
              </StyledModal>
            </ThemeProvider>
          </div>
        )}
      </div>
    );
  }
}

Modal.propTypes = {
  theme: PropTypes.object,
  isModalShown: PropTypes.bool,
  children: PropTypes.node
};

Modal.defaultProps = {
  theme: {},
  isModalShown: false,
  children: null
};

export default Modal;
