import React from "react";
import styles from './NavButton.module.scss';

class NavButton extends React.Component  {
    constructor(props) {
        super(props);
    }


    render (){
        const {onClick, renderButton} = this.props;
        return <div className={styles.navButton} onClick={onClick}>{renderButton}</div>
    }
}

export default NavButton;