import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import cardStyle from './styles';
import Spinner from '../Spinner';

const { shape, string } = PropTypes;

const StyledCard = styled.div`
  background-color: ${props => props.theme.background || '#fafafa'} ;
  position: relative;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`;

const StyledCardLabel = styled.div`
  position: absolute;
  top: 10px;
  left: -12px;
  padding: 5px 10px;
  font-size: 0.8em;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background: ${props => cardStyle[props.theme.type].label.background || '#00a9e5'};
  box-shadow: 1px 3px 15px 1px rgba(0, 0, 0, 0.2);
`;

const StyledCardBody = styled.div`
  color: #2f2e40;
  position: relative;
  padding: 10px;
  z-index: 1;
  height: inherit;
  overflow: auto;
`;

const Card = ({ theme,cardLabel, children, isSpinnerShown }) => (
  <ThemeProvider theme={theme}>
    <StyledCard className={theme.container}>
     { cardLabel &&
        <StyledCardLabel className={theme.cardLabel}>
          { cardLabel }
        </StyledCardLabel> }
        {isSpinnerShown ? 
        (<Spinner theme={theme}/>) : 
        (<StyledCardBody className={theme.cardBody}>
          { children }
         </StyledCardBody>
        )
        }
        
    </StyledCard>
    </ThemeProvider>
);

Card.defaultProps = {
  theme: {
    type: 'primary'
  },
  isSpinnerShown: false
}

Card.propTypes = {
  theme: shape({
    container: string,
    cardBody: string,
    cardLabel: string
  })
}

export default Card;