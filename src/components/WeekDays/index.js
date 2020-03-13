import React from "react";
import styles from './Week.module.scss';

function WeekDays(){

        return (
            <div className={styles.weekDayContainer}>
                <div className={styles.weekDay}>S</div>
                <div className={styles.weekDay}>M</div>
                <div className={styles.weekDay}>T</div>
                <div className={styles.weekDay}>W</div>
                <div className={styles.weekDay}>T</div>
                <div className={styles.weekDay}>F</div>
                <div className={styles.weekDay}>S</div>
            </div>
        )
    }


export default WeekDays;