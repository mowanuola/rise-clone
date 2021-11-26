import React from 'react'
import { Button } from '../../../ui/Button/Button'
import phoneImg from '../../../assets/img/phone-img.png'
import playStoreLogo from '../../../assets/img/playstore-logo.svg'
import appleLogo from '../../../assets/img/apple-logo.svg'

export const CTA = () => {
    return (
        <section className="cta container">
            <div className="cta-left">
                <p className="cta-header">Download The Rise App</p>
                <h3>
                    Join our 100,000 users investing and setting long term
                    goals!
                </h3>
                <p className="cta-details">
                    Dollar Investments that help you grow
                </p>
                <div>
                    <Button btnStyle="dark" icon={appleLogo} name="app-store">
                        <p className="btn-text">
                            <span className="small-text">Download on the</span>
                            <span className="bold-text"> App Store</span>
                        </p>
                    </Button>
                    <Button
                        btnStyle="dark"
                        icon={playStoreLogo}
                        name="play-store"
                    >
                        <p className="btn-text">
                            <span className="small-text">Download on the</span>
                            <span className="bold-text"> Play Store</span>
                        </p>
                    </Button>
                </div>
            </div>
            <div className="cta-right">
                <img src={phoneImg} alt="phone" />
            </div>
        </section>
    )
}
