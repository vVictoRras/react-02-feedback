import React from "react";
import styles from "./Statistics.module.css"

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className={styles.d}>
            <h1 className={styles.statistics__title}> Statistics</h1>
            <p className={styles.p}>Good</p>
            <div className={styles.bar}>
                <span className={styles.scale} style={{width: `${good}%`}}>{good}</span>
            </div>
            <p className={styles.p}>Neutral</p>
            <div className={styles.bar}>
                <span className={styles.scale} style={{width: `${neutral}%`}}>{neutral}</span>
            </div>
            <p className={styles.p}>Bad</p>
            <div className={styles.bar}>
                <span className={styles.scale} style={{width: `${bad}%`}}>{bad}</span>
            </div>

            <p className={styles.p}>Total</p>
            <div className={styles.bar}>
                <span className={styles.scale} style={{width: `${total}%`}}>{total}</span>
            </div>
            <p className={styles.p}> Positive feedback</p>
                <div className={styles.bar}>
                    <span className={styles.scale} style={{width: `${positivePercentage}%`}}>{positivePercentage}%</span>
                </div>

        </div>
    );
}

export default Statistics;