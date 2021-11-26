import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

export const Button = ({
    btnStyle = 'primary',
    icon = false,
    children,
    name = '',
    ...props
}) => {
    return (
        <button
            className={`btn btn-${btnStyle} ${icon ? 'btn-icon' : ''}`}
            {...props}
        >
            {icon && <img src={icon} alt={name} />}
            {children}
        </button>
    )
}
Button.propTypes = {
    btnStyle: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.any,
}
