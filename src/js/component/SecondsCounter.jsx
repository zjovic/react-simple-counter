import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondsCounter = (props) => {
    const timer = ['0', '0', '0', '0', '0', '0'];
    const seconds = props.seconds.toString();
    const numberOfElements = seconds.length;
    timer.splice(-numberOfElements, numberOfElements, ...seconds);
    const timerItems = timer.map((second, index) =>
        <span key={index}>{second}</span>
    );

    return (
        <div>
            <span><FontAwesomeIcon icon={faClock} /></span>
            {timerItems}
        </div>
    );
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number
};

export default SecondsCounter;