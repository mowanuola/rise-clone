import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

export const Card = ({
    type = 'full',
    children,
    image,
    header,
    body = '',
    review,
    cta,
    bgColor,
    name = '',
    footer,
    ...props
}) => {
    return (
        <div
            className={`card card-${type}`}
            {...props}
            style={{ backgroundColor: bgColor }}
        >
            <div className="card-body">
                {image && <img src={image} alt={name} className="card-image" />}
                {header && <h2 className="card-header">{header}</h2>}
                <div className="inner-text">{body}</div>
                {cta && (
                    <div className="card-cta">
                        {cta}
                        <svg
                            width="13"
                            height="10"
                            viewBox="0 0 13 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.5 5.00021C0.5 4.72421 0.724 4.50021 1 4.50021L10.9747 4.50021L7.15525 0.862213C6.9555 0.671963 6.94725 0.355713 7.138 0.155213C7.3285 -0.0447874 7.64475 -0.0525375 7.84475 0.137963L12.207 4.29296C12.396 4.48196 12.5 4.73296 12.5 5.00021C12.5 5.26721 12.396 5.51846 12.1982 5.71571L7.84475 9.86221C7.64475 10.0527 7.3285 10.0447 7.138 9.84496C6.94725 9.64521 6.95525 9.32871 7.15525 9.13821L10.9908 5.50021L1 5.50021C0.724 5.50021 0.5 5.27621 0.5 5.00021Z"
                                fill="#07969E"
                            />
                        </svg>
                    </div>
                )}
                {footer && <footer>{footer}</footer>}
            </div>
            {children}
        </div>
    )
}

Card.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    image: PropTypes.string,
    name: PropTypes.string,
    body: PropTypes.any,
    footer: PropTypes.element,
    cta: PropTypes.string,
}
