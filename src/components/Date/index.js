import React from "react";
import styles from './Date.module.scss';
import moment from "moment";

class Date extends React.Component{
    constructor(props) {
        super(props);

    }



    render() {
        return <div className={styles.monthDays}>{this.props.children}</div>
    }

}

export default Date;