import React from 'react';
import SubFooter from '../../components/SubFooter/SubFooter';
import SubHeader from '../../components/SubHeader/SubHeader';
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <div>
            <SubHeader >Privacy Policy</SubHeader>
            <section className='privacy-container'>
                <h2>Privacy Policy</h2>
                <div className="privacy-para">
                    <p>SIMMI respects your privacy and is committed to protecting your personal data. This Privacy Notice will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
                    <p>This Privacy Notice applies to all/any user accessing or availing the services on the Platform.</p>
                    <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.</p>
                    <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
                        We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.
                    </p>
                    <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.
                    </p>
                    <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                    <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
                    </p>
                    <p>See, change/correct or delete your data; express any concern about our use of your data.</p>
                    <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                    <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.
                    </p>
                </div>
            </section>
            <SubFooter />
        </div>
    );
};

export default PrivacyPolicy;