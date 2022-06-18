import React from 'react'
import logo from '../assets/logo.png';
import './css/footer_ring.scss'

function FooterRing() {
    return (
        <div className="footer_ring">
            <div className="ring">
                <img src={logo} className="image-circle footer_image" alt="IPF" />
                <svg className="ring-text-1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300">
                    <defs>
                        <path id="circlePath" d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 " />
                    </defs>

                    <g className="group">
                        <use xlinkHref="#circlePath" fill="none" />
                        <text fill="#ff00ff">
                            <textPath xlinkHref="#circlePath">
                                INDUSTRIAL AND PLANNING FORUM
                                -----
                                IPF
                                -----
                                INDUSTRIAL AND PLANNING FORUM
                                -----
                                IPF
                                -------
                            </textPath>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default FooterRing
