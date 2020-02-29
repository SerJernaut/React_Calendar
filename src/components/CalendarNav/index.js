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

  openMenu = () =>{
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
                  })
  }

  nextMonth = () => {

  }

  prevMonth = () => {

  }


  render(){
    const {isMenuOpen} = this.state;
    const {firstDate} = this.props;
    return (
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <div className={styles.navItem} onClick={this.prevMonth}>May</div>
          <div className={styles.currentItem} onClick={this.openMenu}>
            {firstDate}
            <Icon size={'24px'} path={mdiChevronDown} color={'white'} rotate={isMenuOpen?180:0}/>
          </div>
          <div className={styles.navItem} onClick={this.nextMonth}>Jul</div>
        </nav>
        {
          isMenuOpen && (
            <div className={styles.downMenu}>
              <button onClick={this.props.changeMode}>This week</button>
              <button onClick={this.props.changeMode}>This month</button>
            </div>
          )

        }
      </div>
    )
  }
}



export default CalendarNav;


