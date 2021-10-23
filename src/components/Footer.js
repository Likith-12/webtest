import React from 'react';

import './css/footer.scss'
import logo from '../assets/ipf_400-100 (1).jpg';
function Footer(){
    return(
        <div className="footer">
        <div className="footer_text">
                    <span>FEEL</span>
                    <span> FREE </span>
                    <span> TO </span>
                    <span> HIT </span>
                    <span> US </span>
                    <span> UP</span>
        </div>
        {/* <div className="footer_copyright">
                    <span>Copyright
                        2021 IPF All Rights Reserved</span>
        </div> */}
        <div className="ring">
            <a href="https://adamgreenough.me/" target="_blank"><img src={logo} className="image-circle footer_image" alt="Adam Greenough - Web Designer & Developer" /></a>
            <svg className="ring-text-1"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300">
                <defs>
                    <path id="circlePath" d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "/>
                </defs>

                <g className="group">
                    <use xlinkHref="#circlePath" fill="none"/>
                <text fill="#ff00ff">
                    <textPath xlinkHref="#circlePath">INDUSTRIAL AND PLANNING FORUM--------IPF--------INDUSTRIAL AND PLANNING FORUM------IPF-------</textPath>
                </text>
                </g>
            </svg>
        </div> 
        </div>
    );
}

export default Footer;