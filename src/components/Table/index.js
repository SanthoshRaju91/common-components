import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import { color, misc, spacing } from '../../theme';

const Wrapper = styled.div`
    width: 100%;
`;

const TableHeader = styled.div`
    border-bottom: 2px solid ${color.base.line};
`;

const TableHeaderStyled = styled.div`
    display: inline-block;
    cursor: ${props => (props.onClick) ? 'pointer' : 'auto' };
    width: 12%;
    padding: 20px 5px;
`;

const TableCellStyled = styled.div`
    display: inline-block;
    width: 12%;
    padding: 10px 5px;
`;

const TableRow = styled.div`
    border-bottom: 1px solid ${color.base.line};
    transition: background .5s ease;

    &:hover {
        background: ${misc.table.cellHover};
    }

    &:last-child {
        border-bottom: 0px;
    }
`;

const ActionButtons = styled.button`
    margin: 10px;
    background: ${props => (props.disabled) ? misc.table.buttonDisabled : misc.table.buttons};
    border: none;
    padding: 10px;
    border-radius: ${misc.radius};
    color: ${color.base.white};
    font-size: 13px;
    letter-spacing: ${spacing.letter};
    cursor: ${props => (props.disabled) ? 'not-allowed': 'pointer'};
`;

const CounterButton = styled.button`
    margin: 3px;
    background: ${props => props.selected ? misc.table.buttons: misc.table.counterButton };
    border: none;
    padding: 10px;
    border-radius: ${misc.radius};
    color: ${props => props.selected ? color.base.white : color.base.text};
    font-size: 13px;
    letter-spacing: ${spacing.letter};
    cursor: pointer;
`; 

const TableActionsWrapper = styled.div`
    margin-top: 20px;
    text-align: center;
`

class Table extends Component {
    static Cell = props => <TableCellStyled> {props.children } </TableCellStyled>

    constructor(props) {
        super(props);

        this.tableData = this.splitArray(this.props.data, this.props.noOfRows);
        this.state = {
            currentIndex: 0
        }
    }

    splitArray(array, noOfRows) {
        let splitArray = [];
        for(let i=0; i<array.length; i+=noOfRows) {
            splitArray.push(array.slice(i, i+noOfRows));
        }

        return splitArray;
    }

    componentWillReceiveProps(nextProps) {
        this.tableData = this.splitArray(nextProps.data, nextProps.noOfRows);
    }

    sort = () => {

    }

    TableHeader = (header, sortEnabled) => {
        if(sortEnabled) {
            return <TableHeaderStyled key={header.id} id={header.id} onClick={this.sort}> { header.label }</TableHeaderStyled>
        }
        return <TableHeaderStyled key={header.id} id={header.id}>{ header.label }</TableHeaderStyled>
    };

    renderRows = () => {
        const { currentIndex } = this.state;
        return this.tableData[currentIndex] || []
    }

    selectIndex = (index) => {
        this.setState({
            currentIndex: index
        });
    }

    actionClick = (indicator) => {

        this.setState(state => {
            
            if(indicator === 'prev') {
                state.currentIndex = state.currentIndex - 1;
            } else if(indicator === 'next') {
                state.currentIndex = state.currentIndex + 1;
            }

            return {
                currentIndex: state.currentIndex
            }
        });
    } 

    render() {
        const { data = [], headers = [], sortEnabled, noOfRows } = this.props;
        const { currentIndex } = this.state;
        return (
            <Wrapper>
                {headers.length > 0 && 
                    <TableHeader>
                        { headers.map(header => this.TableHeader(header, sortEnabled))}
                    </TableHeader>
                }                

                <div>
                    { this.renderRows().map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            { this.props.children(row) }
                        </TableRow>                    
                    ))}
                </div>

                <TableActionsWrapper>
                    <ActionButtons 
                        disabled={ currentIndex === 0 } 
                        onClick={() => this.actionClick('prev')}
                    >
                        Previous
                    </ActionButtons>
                    
                    {this.tableData.map((_, index) => (
                        <CounterButton 
                            selected={ index === currentIndex}
                            onClick={() => this.selectIndex(index)}
                        >
                            { index + 1} 
                        </CounterButton>
                    ))}
                    
                    <ActionButtons 
                        disabled={ currentIndex === this.tableData.length - 1 } 
                        onClick={() => this.actionClick('next')}
                    >
                        Next
                    </ActionButtons>
                </TableActionsWrapper>
            </Wrapper>
        )
    }
}

Table.propTypes = {
    data: PropTypes.array,
    headers: PropTypes.array,
    sortEnabled: PropTypes.bool,
    noOfRows: PropTypes.number
}


Table.defaultProps = {
    data: [],
    headers: [],
    sortEnabled: false,
    noOfRows: 10
}

export default Table;
