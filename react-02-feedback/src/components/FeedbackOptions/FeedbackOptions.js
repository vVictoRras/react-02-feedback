import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options }) {
    return (
        <>
            <button className={styles.btn} name="good" onClick={options}>
                Good
            </button>
            <button className={styles.btn} name="neutral" onClick={options}>
                Neutral
            </button>
            <button className={styles.btn} name="bad" onClick={options}>
                Bad
            </button>
        </>
    );
}


FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
};

export default FeedbackOptions;