import React from "react";
import moment from "moment";
import CalendarNav from "../CalendarNav";
import WeekDays from "../WeekDays";
import {CALENDAR_MODE, CALENDAR_FORMAT} from "../../constants";
import Week from "../Week";
import styles from './Calendar.module.scss';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(),
            mode: CALENDAR_MODE.MONTH,
            selectedDate: moment(),
            firstDate: moment().startOf(CALENDAR_MODE.MONTH),
            lastDate: moment().endOf(CALENDAR_MODE.MONTH),
        }
    }

    selectDate = day => {
        this.setState({
            selectedDate: day,
        })
    }

    changeMode = (mode) => {
        this.setState({
            mode: mode,
            firstDate: moment().startOf(mode),
            lastDate: moment().endOf(mode)
        })


    }

    onPrevOrNextClick = (firstDate, isNext) => {
        const {mode, firstDate: firstDateClone, lastDate: lastDateClone} = this.state;

        isNext ?
            this.setState({
                firstDate: firstDateClone.add(1, mode),
                lastDate: lastDateClone.add(1, mode)
            })
            : this.setState({
                firstDate: firstDateClone.subtract(1, mode),
                lastDate: lastDateClone.subtract(1, mode)

            })
    }


    renderPrevOrNextButton = (isNext) => {
        const {mode, lastDate} = this.state, lastDateClone = lastDate.clone();
        if(isNext) {
            if(mode === CALENDAR_MODE.MONTH) {
                return lastDateClone.add(1, mode).format(CALENDAR_FORMAT.MONTH_SHORT_NAME);
            }
            else return 'next'
        }

        else {
            if(mode === CALENDAR_MODE.MONTH) {
                return lastDateClone.subtract(1, mode).format(CALENDAR_FORMAT.MONTH_SHORT_NAME);
            }
            else return 'prev';
        }

    }

    renderMonthOrWeek = () => {
        const {firstDate, lastDate, currentDate, selectedDate, mode} = this.state,
            selectDate = this.selectDate,
            weeks = [],
            firstSaturdayCalendarDay = firstDate.clone().day(-1);
            if(mode === CALENDAR_MODE.MONTH){
                while(firstSaturdayCalendarDay.isSameOrBefore(lastDate)){
                    weeks.push(
                        Array(7).fill(0).map(() => firstSaturdayCalendarDay.add(1, 'day').clone())
                    )
                }
            }
            else {
                weeks.push(
                    Array(7).fill(0).map(() => firstSaturdayCalendarDay.add(1, 'day').clone())
                )
            }




        return weeks.map((week, index) => {
            return <Week week={week} key={index} firstDate={firstDate} lastDate={lastDate} currentDate={currentDate} selectedDate={selectedDate} selectDate={selectDate}/>
        })

    }




    render() {
        const {firstDate, lastDate} = this.state;
        return (<>
                <CalendarNav onPrevOrNextClick={this.onPrevOrNextClick} renderPrevOrNextButton={this.renderPrevOrNextButton} changeMode={this.changeMode} firstDate={firstDate}
                             lastDate={lastDate}/>
                <WeekDays/>
                <div  className={styles.calendarContainer}>{this.renderMonthOrWeek()}</div>
            </>
        )

    }
}

export default Calendar;
