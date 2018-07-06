import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const { shape, string, oneOf } = PropTypes;

const SpinnerAnimation = keyframes`
0% {
  top: 6px;
  height: 51px;
}
50%, 100% {
  top: 19px;
  height: 26px;
}
`

const fixedStyle = `
position: fixed;
height: 100%;
background: #000;
opacity: .7;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
z-index:1;
`

const relativeStyle = `
position: relative;
`

const SpinnerPosition =  styled.div`
${props => props.theme.position === 'fixed' ? fixedStyle : relativeStyle}
`

const SpinnerWrapper =  styled.div`
position: relative;
display: flex;
justify-content: center;
`

const SpinnerOutlet = styled.div`
display: inline-block;
position: relative;
width: 64px;
height: 64px;
`

const SpinnerBar = styled.div`
display: inline-block;
position: absolute;
left: 6px;
width: 3px;
background: ${props => props.theme.position === 'fixed' ? '#fff' : props.theme.spinnerColor || '#000'};
animation: ${SpinnerAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
&:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
&:nth-child(2) {
  left: 20px;
  animation-delay: -0.12s;
}
&:nth-child(3) {
  left: 33px;
  animation-delay: 0;
}
`

const Spinner = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <SpinnerPosition>
      <SpinnerWrapper className={theme.container}>
        <SpinnerOutlet className={theme.outlet}>
          <SpinnerBar />
          <SpinnerBar />
          <SpinnerBar />
        </SpinnerOutlet>
      </SpinnerWrapper>
    </SpinnerPosition>
  </ThemeProvider>
);

Spinner.defaultProps = {
  theme: {
    position: 'relative',
    spinnerColor: '#000'
  }
}

Spinner.propTypes = {
  theme: shape({
    position: oneOf(['fixed', 'relative']),
    spinnerColor: string,
    container: string,
    outlet: string
  })
}

export default Spinner;