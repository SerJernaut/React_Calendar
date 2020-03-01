import React from "react";
import Month from "../Month";
import moment from "moment";
import CalendarNav from "../CalendarNav";
import WeekDays from "../WeekDays";

class Calendar extends React.Component{
    constructor(props) {
        super(props);
        const {mode} = this.props;
        this.state = {
            currentDay: moment(),
            mode: mode,
            selectedDate: moment(),
            firstDate: moment().startOf(mode),
            lastDate: moment().endOf(mode),
            currentMonth: moment()
        }
    }

    selectCurrentDay = day => {
        this.setState({
            selectedDate: day,
        })
    }

    changeMode = ()  => {
        const {mode} = this.state;
        if(mode === "m")
        this.setState({
            mode: "w"
        })
        else {
            this.setState({
                mode: "m"
            })
        }


    }

    nextMonth = (firstDate, lastDate, currentMonth) => {
        this.setState({
            firstDate: firstDate.add(1, 'M'),
            lastDate: lastDate.add(1, 'M'),
            currentMonth: currentMonth.add(1, 'M')
        })
    }

    prevMonth = (firstDate, lastDate, currentMonth) => {

        this.setState({
            firstDate: firstDate.subtract(1, 'M'),
            lastDate: lastDate.subtract(1, 'M'),
            currentMonth: currentMonth.subtract(1, 'M')
        })
    }




    render() {
        const {selectedDate, firstDate, lastDate , currentMonth, mode} = this.state;
        console.log(firstDate);
        return (  <>
                <CalendarNav prevMonth={this.prevMonth} nextMonth={this.nextMonth} changeMode={this.changeMode} firstDate={firstDate} lastDate={lastDate} currentMonth={currentMonth}/>
            <WeekDays/>
            {   mode == "m" ? <Month selectCurrentDay={this.selectCurrentDay} selectedDate={selectedDate} />
                : 0
            }
        </>
        )

    }
}

export default Calendar;