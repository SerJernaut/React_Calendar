  import React from 'react';
import styles from './CalendarNav.module.scss';
import Icon from '@mdi/react';
import {mdiChevronDown} from '@mdi/js';
import PropTypes from 'prop-types';
import moment from "moment";

class CalendarNav extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    }
  }

  toggleMenu = () =>{
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
                  })
  }

  onButtonClick = () => {
    this.props.changeMode();
    this.toggleMenu();
  }



  render(){
    const {isMenuOpen} = this.state;
    const {nextMonth, prevMonth, currentMonth, firstDate, lastDate} = this.props;
    return (
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <div className={styles.navItem} onClick={function(){
            prevMonth(firstDate, lastDate, currentMonth)
          }}>{currentMonth.subtract(1, 'M').format('MMM')}</div>
          <div className={styles.currentItem} onClick={this.toggleMenu}>
            {currentMonth.format('MMM')}
            <Icon size={'24px'} path={mdiChevronDown} color={'white'} rotate={isMenuOpen?180:0}/>
          </div>
          <div className={styles.navItem} onClick={function(){
            nextMonth(firstDate, lastDate, currentMonth)
          }}>{currentMonth.add(1, 'M').format('MMM')}</div>
        </nav>
        {
          isMenuOpen && (
            <div className={styles.downMenu}>
              <button onClick={this.onButtonClick} >This week</button>
              <button onClick={this.onButtonClick}  >This month</button>
            </div>
          )

        }
      </div>
    )
  }
}



export default CalendarNav;


