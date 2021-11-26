import React from 'react'
import { Button } from '../../../ui/Button/Button'
import phoneImg from '../../../assets/img/phone-img.png'
import playStoreLogo from '../../../assets/img/playstore-logo.svg'
import appleLogo from '../../../assets/img/apple-logo.svg'
import { Circles } from '../../../ui/Circles/Circles'

export const Hero = () => {
    return (
        <div className=" container">
            <Circles />
            <section className="hero">
                <div className="hero-left">
                    <h1>Dollar Investments that help you grow</h1>
                    <p className="hero-details">
                        We put your money in high quality assets that help you
                        build wealth and achieve your financial goals.
                    </p>
                    <div>
                        <Button
                            btnStyle="dark"
                            icon={appleLogo}
                            name="app-store"
                        >
                            <p className="btn-text">
                                <span className="small-text">
                                    Download on the
                                </span>
                                <span className="bold-text"> App Store</span>
                            </p>
                        </Button>
                        <Button
                            btnStyle="dark"
                            icon={playStoreLogo}
                            name="play-store"
                        >
                            <p className="btn-text">
                                <span className="small-text">
                                    Download on the
                                </span>
                                <span className="bold-text"> Play Store</span>
                            </p>
                        </Button>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={phoneImg} alt="phone" />
                </div>
            </section>
        </div>
    )
}
