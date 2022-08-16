import React from 'react';
import SubFooter from '../../components/SubFooter/SubFooter';
import FAQHeader from '../../components/SubHeader/SubHeader';
import './Disclaimer.css'

const Disclaimer = () => {
    return (
        <>
            <FAQHeader>Disclaimer</FAQHeader>
            <section className='disclaimer-container'>
                <h2>Disclaimer</h2>
                <div className='disclaimer-para'>
                    <p>
                        We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who contribute on SIMMI.org.
                    </p>
                    <p>Any contribution on SIMMI.org, by an individual, should not be construed as an investment in any form whatsoever.
                    </p>
                    <p>SIMMI.org disclaims any liability, legal or otherwise, that may arise due to the act, omission or otherwise of any visitor to this site, or caused by the same. Visitors to the site acknowledge that SIMMI.org is purely a "facilitator" for transactions between the NGOs and visitors, and as such, stands indemnified from any liabilities that may arise due to the same.</p>
                </div>
            </section>
            <SubFooter />
        </>
    );
};

export default Disclaimer;