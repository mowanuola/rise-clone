import React from 'react'
import { Card } from '../../../ui/Card/Card'
import jesse from '../../../assets/img/jesse.png'
import raye from '../../../assets/img/raye.png'

export const Reviews = () => {
    const cards = [
        {
            body: 'I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.',
            footer: (
                <>
                    <img src={jesse} alt="lade" />
                    <p>Lade</p>
                </>
            ),
        },
        {
            body: 'I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.',
            footer: (
                <>
                    <img src={jesse} alt="jesse" />
                    <p>Jesse</p>
                </>
            ),
        },
        {
            body: 'I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.',
            footer: (
                <>
                    <img src={raye} alt="raye" />
                    <p>Raye</p>
                </>
            ),
        },
    ]
    return (
        <div className="review">
            <div className="header">
                <h3>From The People Who Use Rise</h3>
                <p>
                    Our mission at Risevest is to empower more people just like
                    you to achieve your personal financial goals.
                </p>
            </div>
            <div className="header-md">
                <h3>What our customers are saying</h3>
                <p>We serve over 80,000 amazing users.</p>
            </div>
            <div className="review-cards">
                {cards.map(({ body, footer }, i) => (
                    <Card body={body} footer={footer} type="fit" key={i} />
                ))}
            </div>
        </div>
    )
}
