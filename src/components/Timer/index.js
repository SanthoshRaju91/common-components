import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, misc } from '../../theme';

const Wrapper = styled.div`
    display: inline-block;  
    font-size: 1.5em;
    font-weight: bold;
`

const TimerContainer = styled.div`
    padding: 15px 25px;
    color: ${color.base.white};
    border: none;
    border-radius: ${misc.radius};
    box-shadow: 0px 0px 1px #ecf0f1;
    background: ${props => props.alert ? misc.timer.alert.background: misc.timer.normal.background };
`;

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: {},
            seconds: this.props.seconds,
            alertTime: (this.props.seconds <= this.props.alert)
        }

        this.timer = 0;
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        
        return {
            'h': hours,
            'm': minutes,
            's': seconds
        }
    }

    componentWillMount() {
        this.startTimer();
    }

    componentDidMount() {
        let timeLeft = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeft});
    }

    startTimer = () => {
        if(this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    } 

    countDown = () => {
        let seconds = this.state.seconds - 1;
        let { alert } = this.props;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
            alertTime: (seconds <= alert)
        });

        if(seconds === 0) {            
            clearInterval(this.timer)
            if(this.props.notify) {
                this.props.notify();
            }            
        }
    }

    render() {
        const { time, alertTime } = this.state;
        return (
            <Wrapper>
                <TimerContainer alert={alertTime}>{time.m} : { time.s} s</TimerContainer>                
            </Wrapper>
        )
    }
}

Timer.propTypes = {
    seconds: PropTypes.number,
    alert: PropTypes.number,
    notify: PropTypes.func
}

Timer.defaultProps = {
    seconds: 5,
    alert: 10,
    notify: null
}

export default Timer;