import React from "react";
import styles from './Month.module.scss';
import Date from "../Date";

class Month extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
            return (
                <>
                    <div className={styles.monthContainer}>
                        <div className={styles.monthWeeks}>
                            <Date></Date>
                            <Date></Date>
                            <Date></Date>
                            <Date></Date>
                            <Date>1</Date>
                            <Date>2</Date>
                            <Date>3</Date>
                        </div>
                        <div className={styles.monthWeeks}>
                            <Date>4</Date>
                            <Date>5</Date>
                            <Date>6</Date>
                            <Date>7</Date>
                            <Date>8</Date>
                            <Date>9</Date>
                            <Date>10</Date>
                        </div>
                        <div className={styles.monthWeeks}>
                            <Date>11</Date>
                            <Date>12</Date>
                            <Date>13</Date>
                            <Date>14</Date>
                            <Date>15</Date>
                            <Date>16</Date>
                            <Date>17</Date>
                        </div>
                        <div className={styles.monthWeeks}>
                            <Date>18</Date>
                            <Date>19</Date>
                            <Date>20</Date>
                            <Date>21</Date>
                            <Date>22</Date>
                            <Date>23</Date>
                            <Date>24</Date>
                        </div>
                        <div className={styles.monthWeeks}>
                            <Date>25</Date>
                            <Date>26</Date>
                            <Date>27</Date>
                            <Date>28</Date>
                            <Date>29</Date>
                            <Date>30</Date>
                            <Date>31</Date>
                        </div>
                    </div>
                    </>

            )
    }

}

export default Month;