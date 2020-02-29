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
            lastDate: moment().endOf(mode)
        }
    }

    selectCurrentDay = day => {
        this.setState({
            selectedDate: day,
        })
    }

    changeMode = ()  => {
        const {mode} = this.state;
        if(mode == "month")
        this.setState({
            mode: "week"
        })
        else {
            this.setState({
                mode: "month"
            })
        }


    }




    render() {
        const {selectedDate, firstDate} = this.state;
        return (  <>
                <CalendarNav changeMode={this.changeMode} firstDate={firstDate}/>
            <WeekDays/>
            <Month selectCurrentDay={this.selectCurrentDay} selectedDate={selectedDate} />
        </>
        )

    }
}

export default Calendar;