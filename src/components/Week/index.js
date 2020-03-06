import React from "react";
import styles from './Week.module.scss';
import Date from "../Date";

class Week extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {firstDate, lastDate, currentDate, selectedDate, selectDate, week, firstSaturdayCalendarDay} = this.props;
        return (<div className={styles.weekContainer}>
            {week.map((day, index) => {
            return <Date key={index} firstDate={firstDate} lastDate={lastDate} day={day} currentDate={currentDate}
                         selectedDate={selectedDate} selectDate={selectDate} firstSaturdayCalendarDay={firstSaturdayCalendarDay}/>
        }) }
        </div>)
    }

}

export default Week;