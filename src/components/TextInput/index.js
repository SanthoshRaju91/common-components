import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { misc, color, spacing, fonts } from '../../theme';

const style = {
    basic: {
        background: color.input.background,
        border: color.input.border,
        hoverBorder: color.input.borderHover,
        focusBorder: color.input.borderFocus,
        placeholder: color.input.placeholder
    },
    readOnly: {
        background: color.input.backgroundReadOnly,
        border: color.input.border,
        hoverBorder: color.input.border,
        focusBorder: color.input.border,
        placeholder: color.input.placeholderReadOnly
    },
    error: {
        background: color.input.background,
        border: color.input.borderError,
        hoverBorder: color.input.borderError,
        focusBorder: color.input.borderError,
        placeholder: color.input.placeholder
    }
}


const getProperties = props => {
    if(props.readOnly) return style.readOnly;
    else if(props.error) return style.error;
    else return style.basic;
}

const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 44px;

    background: ${props => getProperties(props).background};
    border: 1px solid;
    border-color: ${props => getProperties(props).border};
    border-radius: ${misc.radius};
    color: ${color.base.text};
    font-family: ${fonts.family};
    font-size: 13px;
    letter-spacing: ${spacing.letter};
    padding: ${spacing.input.padding};
    cursor: ${props => props.readOnly ? 'not-allowed': 'auto'};
    transition: border-color .25s, box-shadow .25s;
    
    &:hover {
        border-color: ${props => getProperties(props).hoverBorder};        
    }

    &:focus {
        border-color: ${props => getProperties(props).focusBorder};
        box-shadow: 0px 0px 1px ${props => getProperties(props).focusBorder};
        outline: none;
    }

    &::webkit-input-placeholder {
        color: ${props => getProperties(props).placeholder}
    }
`

const ErrorContainer = styled.div`
    position: relative;
`

const ErrorMessage = styled.p`
    font-family: ${fonts.family};
    font-size: ${fonts.size.input.outerText};
    letter-spacing: ${spacing.letter};

    position: absolute;
    top: 2.7em;
    color: ${style.error.border};
`;

const CheckErrorWrapper = ({ error, ...props }) => {
  if (error) {
    return (
      <ErrorContainer>
        <StyledInput {...props} error={error} />
        <ErrorMessage>{error}</ErrorMessage>
      </ErrorContainer>
    )
  } else {
    return <StyledInput {...props} />
  }
}

const TextInput = ({ defaultValue, ...props }) => {
  if (props.masked) {
    const length = defaultValue ? defaultValue.length : 8
    const maskedValue = new Array(length).join('•')
    return <CheckErrorWrapper {...props} placeholder={maskedValue} readOnly />
  }

  return <CheckErrorWrapper defaultValue={defaultValue} {...props} />
}

TextInput.propTypes = {
  masked: PropTypes.bool,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

TextInput.defaulProps = {
  readOnly: false,
  error: null,
  onChange: null,
}

export default TextInput
