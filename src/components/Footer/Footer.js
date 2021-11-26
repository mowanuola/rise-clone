import React from 'react'
import riseLogo from '../../assets/img/rise-logo-black.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <ul>
                    <li>
                        <img src={riseLogo} alt="Rise Logo" />
                    </li>

                    <li>About Us</li>
                    <li>Careers</li>
                    <li>FAQs</li>
                    <li>Contact Info</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="footer-title">Explore</li>
                    <li>Investment Club</li>
                    <li> Blog</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="footer-title">Products</li>
                    <li>Rise App</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="footer-title">Contact Us</li>
                    <li>+234 818 714 7405</li>
                    <li>hello@risevest.com</li>
                    <li>Newsletter</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer
