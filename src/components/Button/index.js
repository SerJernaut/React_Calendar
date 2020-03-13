import React from "react";
import styles from './NavButton.module.scss';
import PropTypes from 'prop-types';

function NavButton(props) {
        const {onClick, renderButton} = props;
        return <div className={styles.navButton} onClick={onClick}>{renderButton}</div>
}

NavButton.propTypes = {
        onClick: PropTypes.func.isRequired,
        renderButton: PropTypes.func.isRequired
}

export default NavButton;