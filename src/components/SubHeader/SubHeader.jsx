import React from 'react';
import './SubHeader.css'
import logo from '../../images/logo.png'

const FAQHeader = ({ children }) => {
    return (
        <div className='faq-header'>
            <img className='logo-img' src={logo} alt="" />
            <h2 className='title'><span>SIMMI</span> FOUNDATION</h2>
            <h2 className='sub-page'>{children}</h2>
        </div>
    );
};

export default FAQHeader;