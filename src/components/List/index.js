import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, misc } from '../../theme';


const Wrapper = styled.div`
    width: 100%;
`;

const StyledItem = styled.div`
    padding: 20px;
    border-top: 1px solid ${color.base.line};
    background: ${misc.list.background};
    transition: background .3s ease;
    &:hover {
        background: ${misc.list.backgroundHover};
    }
`;

const PilledStyleItem = styled.div`
    padding: 20px;
    border: 1px solid ${color.base.line};
    margin-bottom: 10px;
    border-radius: ${misc.radius};
    background: ${misc.list.background};
    transition: background .3s ease;
    &:hover {
        background: ${misc.list.backgroundHover};
    }
`;

const StyledAction = styled.div`
    display: inline-block;
    float: right;
    position: relative;
    padding: 10px;
`;

const Container = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`;

class List extends Component {

    static Item = ({ children, ...props }) => (props.type === 'pill') ? <PilledStyleItem {...props}> {children} </PilledStyleItem> : <StyledItem {...props}> {children} </StyledItem>;

    static ListAction = ({ children, ...props }) => <StyledAction {...props}> <Container> {children} </Container> </StyledAction>

    getItemsHelpers = props => {
        return {
            type: this.props.type
        }
    }

    listItemsHelpers = () => {
        return {
            items: this.props.items,
            getItemsHelpers: this.getItemsHelpers
        }
    }

    render() {
        return <Wrapper>{this.props.children(this.listItemsHelpers()) }</Wrapper>
    }
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.oneOf(['pill', 'list'])
}

List.defaultProps = {
    type: 'list'
};

export default List;