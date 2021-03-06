  import React from 'react';
import styles from './CalendarNav.module.scss';
import Icon from '@mdi/react';
import {mdiChevronDown} from '@mdi/js';
import {CALENDAR_FORMAT, CALENDAR_MODE} from "../../constants";
import moment from "moment";
  import NavButton from "../Button";
  import PropTypes from 'prop-types';

  class CalendarNav extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      isMenuOpened: false,
    }
    this.containerRef = React.createRef();
    this.downMenuRef = React.createRef();

  }

  toggleMenu = () =>{
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
                  })
  }

  onThisWeekButtonClick = () => {
    this.props.changeMode(CALENDAR_MODE.WEEK);
    this.toggleMenu();
  }

  onThisMonthButtonClick = () => {
    this.props.changeMode(CALENDAR_MODE.MONTH);
    this.toggleMenu();
  }

  onPrevClick = () => {
    this.props.onPrevOrNextClick(this.firstDate, false )
  }

  onNextClick = () => {
    this.props.onPrevOrNextClick(this.firstDate, true )
  }

  onOutsideClick = (e) => {
    if(this.state.isMenuOpened && !this.containerRef.current.contains(e.target) && !this.downMenuRef.current.contains(e.target)){
      e.preventDefault();
      this.toggleMenu();
    }
  }

    componentDidMount() {
      window.addEventListener('click', this.onOutsideClick);
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.onOutsideClick);
    }


    render(){
    const {isMenuOpened} = this.state,
        {lastDate, renderPrevOrNextButton} = this.props,
        renderPrevButton = renderPrevOrNextButton(false),
        renderNextButton = renderPrevOrNextButton(true);

    return (
      <div className={styles.container}>
        <nav className={styles.navContainer} ref={this.containerRef}>
          <NavButton onClick={this.onPrevClick} renderButton={renderPrevButton}/>
          <div className={styles.currentItem} onClick={this.toggleMenu} >
            {lastDate.format(CALENDAR_FORMAT.MONTH_SHORT_NAME)}
            <Icon size={'24px'} path={mdiChevronDown} color={'white'} rotate={isMenuOpened?180:0}/>
          </div>
          <NavButton onClick={this.onNextClick} renderButton={renderNextButton}/>
        </nav>
        {
          isMenuOpened && (
            <div className={styles.downMenu} ref={this.downMenuRef} >
              <button onClick={this.onThisWeekButtonClick} >This week</button>
              <button onClick={this.onThisMonthButtonClick}  >This month</button>
            </div>
          )

        }
      </div>
    )
  }
}

CalendarNav.propTypes = {
  changeMode: PropTypes.func.isRequired,
  onPrevOrNextClick: PropTypes.func.isRequired,
  renderPrevOrNextMonth: PropTypes.func.isRequired,
  lastDate: PropTypes.instanceOf(moment).isRequired,

}

export default CalendarNav;


