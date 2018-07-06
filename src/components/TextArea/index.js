import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, misc, spacing, fonts } from '../../theme'

const style = {
  basic: {
    background: color.input.background,
    border: color.input.border,
    hoverBorder: color.input.borderHover,
    focusBorder: color.input.borderFocus,
    placeholder: color.input.placeholder,
  },
  readOnly: {
    background: color.input.backgroundReadOnly,
    border: color.input.border,
    hoverBorder: color.input.border,
    focusBorder: color.input.border,
    placeholder: color.input.placeholderReadOnly,
  },
  error: {
    background: color.input.background,
    border: color.input.borderError,
    hoverBorder: color.input.borderError,
    focusBorder: color.input.borderError,
    placeholder: color.input.placeholder,
  },
}

const getProperties = props => {
  if (props.readOnly) return style.readOnly
  else if (props.error) return style.error
  else return style.basic
}

const Container = styled.div``

const TextAreaStyle = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  background: ${props => getProperties(props).background};
  resize: ${props => (props.resizable ? 'both' : 'none')};
  border: 1px solid;
  border-color: ${props => getProperties(props).border};
  border-radius: ${misc.radius};
  color: ${color.base.text};
  font-family: ${fonts.family};
  font-size: 13px;
  letter-spacing: ${spacing.letter};
  padding: ${spacing.input.padding};
  cursor: ${props => (props.readOnly ? 'not-allowed' : 'auto')};
  transition: border-color 0.25s, box-shadow 0.25s;

  &:hover {
    border-color: ${props => getProperties(props).hoverBorder};
  }

  &:focus {
    border-color: ${props => getProperties(props).focusBorder};
    box-shadow: 0px 0px 1px ${props => getProperties(props).focusBorder};
    outline: none;
  }

  &::webkit-input-placeholder {
    color: ${props => getProperties(props).placeholder};
  }
`

const Wrapper = styled.div`
  padding-top: 2px;
  font-size: ${fonts.size.input.outerText};
  letter-spacing: ${spacing.letter};
`

const ErrorWrapper = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.input.outerText};
  letter-spacing: ${spacing.letter};
  float: left;
  color: ${style.error.border};
`

const CharWrapper = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.input.outerText};
  letter-spacing: ${spacing.letter};
  float: right;
  margin-right: 2px;
  color: ${props => (props.negative) ? style.error.border : color.base.gray}
`

class TextArea extends Component {
  constructor(props) {
    super(props)

    const difference = this.getDifference(
      this.props.limit,
      this.props.defaultValue.length
    )
    this.state = {
      remainingCount: difference,
      negative: difference < 0,
    }
  }

  getDifference(limit, current) {
    return limit - current
  }

  handleChange = e => {
    const length = e.target.value.length
    const { limit } = this.props
    const difference = this.getDifference(limit, length)

    this.setState({
      remainingCount: difference,
      negative: difference < 0,
    })
  }
  render() {
    const { error, limit, length } = this.props
    const { negative, remainingCount } = this.state
    return (
      <Container>
        <TextAreaStyle
          {...this.props}
          rows={length}
          onChange={event => this.handleChange(event)}
        />
        <Wrapper>
          {error && <ErrorWrapper>{error}</ErrorWrapper>}
          {limit && (
            <CharWrapper negative={negative}>
              Remaining: {remainingCount}
            </CharWrapper>
          )}
        </Wrapper>
      </Container>
    )
  }
}
TextArea.propTypes = {
  resizable: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  length: PropTypes.number
}

TextArea.defaultProps = {
  resizable: true,
  onChange: null,
  defaultValue: '',
  length: 3
}

export default TextArea
