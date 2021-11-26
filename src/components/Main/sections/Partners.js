import React from 'react'
import armLogo from '../../../assets/img/arm-trustees-logo.svg'
import wuLogo from '../../../assets/img/western-union-logo.svg'
import techStarsLogo from '../../../assets/img/techstars-logo.svg'
import vpLogo from '../../../assets/img/ventures-platform-logo.svg'

export const Partners = () => {
    return (
        <div className="partners-container">
            <img src={armLogo} alt="ARM logo" width="65" height="31" />
            <img src={wuLogo} alt="Western Union Logo" width="142" height="64" />
            <img
                src={techStarsLogo}
                alt="Tech Stars Logo"
                width="99"
                height="48"
            />
            <img
                src={vpLogo}
                alt="Ventures Platform Logo"
                width="34"
                height="35"
            />
        </div>
    )
}
