import React from 'react'
import { Card } from '../../../ui/Card/Card'
import stocks from '../../../assets/img/stocks.svg'
import fixedIncome from '../../../assets/img/fixed-income.svg'
import realEstate from '../../../assets/img/real-estate.svg'

export const AssetClasses = () => {
    const cards = [
        {
            header: 'Stocks',
            body: (
                <>
                    <div className="card-text">
                        <p>
                            We help you invest and manage your money by
                            investing in our portfolio of 30 high-growth stocks
                            across the US market with our equity portfolio of
                            power stocks.
                        </p>
                    </div>
                    <div className="card-footer">
                        <p>
                            <span> Historical Returns: </span>14% Per Annum
                        </p>
                        <p>
                            <span>Risk Level: </span>High
                        </p>
                    </div>
                </>
            ),
            cta: 'Learn how Stocks Work',
            image: stocks,
            color: '#FFF4F0',
        },
        {
            header: 'Real Estate',
            body: (
                <>
                    <div className="card-text">
                        <p>
                            Our Real Estate plan is the sweet middle. Best for
                            those who want a balance of good returns and medium
                            risk. This plan invests in rented buildings in the
                            US.
                        </p>
                    </div>
                    <div className="card-footer">
                        <p>
                            <span> Historical Returns: </span>14% Per Annum
                        </p>
                        <p>
                            <span>Risk Level: </span>Medium
                        </p>
                    </div>
                </>
            ),
            cta: 'Learn how Real Estate Works',
            image: realEstate,
            color: '#F6F2FF',
        },
        {
            header: 'Fixed Income',
            body: (
                <>
                    <div className="card-text">
                        <p>
                            A low-risk asset perfect for anyone who wants to
                            protect their money in a secure, appreciating
                            currency, i.e. the dollar. For people who want to
                            protect their hard-earned money from inflation while
                            earning steady returns.
                        </p>
                    </div>
                    <div className="card-footer">
                        <p>
                            <span> Historical Returns: </span>10% Per Annum
                        </p>
                        <p>
                            <span>Risk Level: </span>Low
                        </p>
                    </div>
                </>
            ),
            cta: 'Learn how Fixed Income Works',
            image: fixedIncome,
            color: '#ECFEFE',
        },
    ]
    return (
        <div className="asset-classes container">
            <div className="assets-header">
                <h2>Asset Classes</h2>
                <p>It’s your money, choose where you invest it</p>
            </div>
            <div className="assets-cards">
                {cards.map(({ header, body, cta, image, color }, i) => (
                    <Card
                        header={header}
                        body={body}
                        image={image}
                        cta={cta}
                        bgColor={color}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}
