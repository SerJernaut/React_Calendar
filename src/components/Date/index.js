import React from "react";
import styles from './Date.module.scss'
import {CALENDAR_FORMAT} from "../../constants";
import classNames from 'classnames'


class Date extends React.Component{
    constructor(props) {
        super(props);

    }

    selectNewDate = () => {
        const {selectDate, day} = this.props;
        selectDate(day);

    }

    render() {
        const {firstDate, lastDate, currentDate, day, selectedDate} = this.props,
        firstDateClone = firstDate.clone().day(-1);


        return (<div className={classNames(styles.dayContainer, {[styles.hideDay]: day < firstDateClone || day > lastDate },{[styles.currentDay]: day.isSame(currentDate.startOf('day'))}, {[styles.selectedDay]: day.isSame(selectedDate.startOf('day'))})} onClick={this.selectNewDate}>

                {
                    day.format(CALENDAR_FORMAT.DAY_OF_MONTH_NUMBER)
                }

            </div>)
        }
    }




export default Date;