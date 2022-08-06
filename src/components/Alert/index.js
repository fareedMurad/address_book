import React from 'react';
import "../../styles/styles.css"

const Alert = ({type="error", message }) => {

    return (
        <div className={`__alert __alert-${type}`}>
            <span className='__alert--text'>{message}</span>
        </div>
    )
}

export default Alert;