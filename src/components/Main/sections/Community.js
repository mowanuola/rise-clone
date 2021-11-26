import React from 'react'
import { Button } from '../../../ui/Button/Button'
import communityImage from '../../../assets/img/community.png'

export const Community = () => {
    return (
        <section className="community container">
            <div className="left">
                <h3>Join The Rise Community</h3>
                <p className="community-text">
                    If you want to go far, go together. Our Telegram community
                    surrounds you with others who can help you along your
                    financial journey with tips, support, advice and learning.
                    It's completely free and open to new and seasoned investors.
                </p>
                <Button btnStyle="secondary">Join our Community</Button>
            </div>
            <img src={communityImage} alt="Rise Community" />
        </section>
    )
}
