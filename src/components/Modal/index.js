import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Button from '../Button';
import { color, spacing } from '../../theme';
import modal from './styles';

const sizes = {
  small: {
      width: "100px",
      padding: "8px",
      fontSize: '1em',
      height: '200px'
  },
  medium: {
      width: "250px",
      padding: "10px",
      fontSize: '1em',
      height: '300px'
  },
  large: {
      width: "500px",
      padding: "12px",
      fontSize: '1em',
      height: '500px'
  }
}

const SHOWMODAL = `
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1050;
`

const HIDEMODAL = `
display: none;
`

const StyledModal = styled.div`
${props => props.theme.isModalShown ? SHOWMODAL : HIDEMODAL}
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  z-index: 2000;
  transform: translateX(-50%) translateY(-50%);
  animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  background: #fff;
  margin: 0 auto!important;
  border-radius: 10px;
  border: none;
  text-align: center;
`;

const ModalHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #EBEBEB;
  height: 20%;
  display: flex;
  vertical-align: middle;
  align-content: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  width: 100%;
  border-bottom: 1px solid #EBEBEB;
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
  transition: opacity .15s linear;
  opacity: .5
`;

export default class Modal extends Component {
  render() {
    const { theme, headerName, modalContent, primaryText, secondaryText, onSecondaryActionClick, onPrimaryActionClick } = this.props;
    return (
      <div>
        {theme.isModalShown && 
          (<div>
            <ModalBackdrop />
            <ThemeProvider theme={theme}>
              <StyledModal className={theme.container}>
                <ModalContainer tabIndex='-1'>
                  <ModalHeader>
                    <h3>{headerName}</h3>
                  </ModalHeader>
                  <ModalContent><p>{modalContent}</p></ModalContent>
                  <ModalFooter>
                    <div>
                      <Button type={theme.button.type} size={theme.button.size} onClick={onSecondaryActionClick}>
                        {secondaryText}
                      </Button>
                      <Button type={theme.button.type} size={theme.button.size} onClick={onPrimaryActionClick}>
                        {primaryText}
                      </Button>
                    </div>
                  </ModalFooter>
                </ModalContainer>
              </StyledModal>
            </ThemeProvider>
          </div>)
        }
      </div>
    )
  }
}
