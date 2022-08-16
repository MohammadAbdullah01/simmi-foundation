import React from 'react';
import './SubFooter.css'
import { Icon } from '@iconify/react';
import medical from '../../images/medical.png'
import logo from '../../images/logo.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'

const SubFooter = () => {
    return (
        <>
            <div className='sub-footer'>
                <div className='sub-footer-quick-links'>
                    <div className='sub-footer-quick-links-left'>
                        <h2 className='semi-gray-clr'>Donate Towards</h2>
                        <div className='full-gray-clr'><img src={medical} alt="" /><span>Medical</span></div>
                        <div className='full-gray-clr'><Icon className='footer-icons' icon="zondicons:education" color="#FF8C21" /><span>Education</span></div>
                        <div className='full-gray-clr'>            <Icon className='footer-icons' icon="carbon:warning-other" color="#FF8C21" />
                            <span>Others</span></div>
                    </div>
                    <div className='sub-footer-quick-links-middle'>
                        <button>Start a Fundraiser</button>
                        <p className='full-gray-clr'><span>Pricing</span><span className='left-border'>Reviews</span><span className='left-border'>FAQ Tips</span></p>
                    </div>
                    <div className='sub-footer-quick-links-right'>
                        <div className='sub-footer-quick-links-right-title'>
                            <img src={logo} alt="" />
                            <h2 className='semi-gray-clr'>SIMMI FOUNDATION</h2>
                        </div>
                        <div className='sub-footer-quick-links-right-infos'>
                            <div className='quick-links'>
                                <p>About us</p>
                                <p>Press and media</p>
                                <p>Team</p>
                                <p>Careers</p>
                                <p>Contact</p>
                            </div>
                            <div className='contact-info'>
                                <p>
                                    <Icon className='contact-info-icons' icon="fa6-solid:location-dot" color="rgba(0, 0, 0, 0.74)" />
                                    <span style={{ marginLeft: "21px" }}>479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana -122503, India</span>
                                </p>
                                <p>
                                    <Icon className='contact-info-icons' icon="carbon:phone-filled" color="rgba(0, 0, 0, 0.74)" />
                                    <span>	(+91) 70152 - 95025
                                    </span>
                                </p>
                                <p>
                                    <Icon className='contact-info-icons' icon="cib:mail-ru" color="rgba(0, 0, 0, 0.74)" />
                                    <span>support@simmifoundation.org
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='social-links'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
        </>
    );
};

export default SubFooter;