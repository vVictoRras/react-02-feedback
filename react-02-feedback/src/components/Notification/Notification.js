import React from 'react';
import PropTypes from 'prop-types';

let Notification = ({message}) => {
    const s = {
        padding : 10
      };

    return (
        <div >
            <h2 style={s}>{message}</h2>
        </div >
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    }

export default Notification;