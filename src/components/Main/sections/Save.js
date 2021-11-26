import React from 'react'
import { Button } from '../../../ui/Button/Button'
import phoneGoalImage from '../../../assets/img/phone-goal.png'

export const Save = () => {
    return (
        <section className="save container">
            <img src={phoneGoalImage} alt="vector one" />
            <div className="save-details">
                <p>The Rise App</p>
                <h3>
                    Save for your <span>future</span>
                </h3>
                <p className="save-text">
                    With Rise, you achieve your financial goals faster. Save for
                    school, your home, vacations, your children’s future and
                    more.
                </p>
                <Button>Start Saving</Button>
            </div>
        </section>
    )
}
