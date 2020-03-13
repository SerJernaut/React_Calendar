import React from "react";
import styles from './Week.module.scss';
import Date from "../Date";
import PropTypes from 'prop-types';
import moment from "moment";

function Week(props) {
    const {firstDate, lastDate, currentDate, selectedDate, selectDate, week} = props;
    return (<div className={styles.weekContainer}>
        {week.map((day, index) => {
            return <Date key={index} firstDate={firstDate} lastDate={lastDate} day={day} currentDate={currentDate}
                         selectedDate={selectedDate} selectDate={selectDate}/>
        })}
    </div>)
}

Week.propTypes = {

    firstDate: PropTypes.instanceOf(moment).isRequired,
    lastDate: PropTypes.instanceOf(moment).isRequired,
    week: PropTypes.array.isRequired,
    currentDate: PropTypes.instanceOf(moment).isRequired,
    selectedDate: PropTypes.instanceOf(moment).isRequired,
    selectDate: PropTypes.func.isRequired,


}
export default Week;