import React from 'react'
import vectorOne from '../../../assets/img/vector-one.svg'
import vectorTwo from '../../../assets/img/vector-two.svg'
import vectorThree from '../../../assets/img/vector-three.svg'
import vectorFour from '../../../assets/img/vector-four.svg'

export const Features = () => {
    return (
        <section className="container">
            <div className="feature-container">
                <div className="feature-details">
                    <h2>Invest your money in dollars</h2>
                    <p className="feature-text">
                        By holding your investments in a stable currency, your
                        money grows more over time and retains its value better.
                    </p>
                    <span>Start investing now</span>
                </div>
                <img src={vectorOne} alt="vector one" />
            </div>
            <div className="feature-container">
                <img src={vectorTwo} alt="vector two" />
                <div className="feature-details">
                    <h2>Choose what's best for you</h2>
                    <p className="feature-text">
                        Unlike other platforms, Rise lets you pick between
                        stocks, US real estate and fixed income, according to
                        your risk appetite. That way you can spread your risk
                        and tap into different investments all in one place.
                    </p>
                    <span>Start investing now</span>
                </div>
            </div>
            <div className="feature-container">
                <div className="feature-details">
                    <h2>Set goals and reach them</h2>
                    <p className="feature-text">
                        You can invest towards a goal on Rise--retirement,
                        higher education, save for your home or travel budgets.
                        Or create a goal of your own and invest periodically to
                        achieve them.
                    </p>
                    <span>Start investing now</span>
                </div>
                <img src={vectorThree} alt="vector three" />
            </div>
            <div className="feature-container">
                <img src={vectorFour} alt="vector four" />
                <div className="feature-details">
                    <h2>We remember so you dont have to</h2>
                    <p className="feature-text">
                        Our Auto-invest feature makes it easy to stay
                        consistent, even when you forget. Set a funding amount,
                        frequency and payment method and Rise will automatically
                        fund your investment, on schedule.
                    </p>
                    <span>Start investing now</span>
                </div>
            </div>
        </section>
    )
}
