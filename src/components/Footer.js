import React from 'react';

import Footer_ring from '../components/Footer_ring'

import './css/footer.scss'
function Footer(){
    return(
        <div className="footer">
        <div className="footer_text">
            FEEL FREE TO HIT US UP
        </div>
        {/* <div className="footer_copyright">
                    <span>Copyright
                        2021 IPF All Rights Reserved</span>
        </div> */}
        <div className="footer_animation_ring">
        <Footer_ring/>
        </div>
        </div>
    );
}

export default Footer;