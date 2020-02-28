import React from 'react';
import styles from './CalendarNav.module.scss';
import Icon from '@mdi/react';
import {mdiChevronDown} from '@mdi/js';

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

  render(){
    const {isMenuOpen} = this.state;
    return (
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <div className={styles.navItem}>May</div>
          <div className={styles.currentItem} onClick={this.openMenu}>
            June
            <Icon size={'24px'} path={mdiChevronDown} color={'white'} rotate={isMenuOpen?180:0}/>
          </div>
          <div className={styles.navItem}>Jul</div>
        </nav>
        {
          isMenuOpen && (
            <div className={styles.downMenu}>
              <button>This week</button>
              <button>This month</button>
            </div>
          )

        }
      </div>
    )
  }
}

export default CalendarNav;