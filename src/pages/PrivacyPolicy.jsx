import React from 'react';

const PrivacyPolicy = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className='legal'>
            <h2>Privacy Policy</h2>
            <p>Kevin Cincotta, LLC ("we" or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website.</p>
            <ol>
                <li><strong>Collection of Personal Information</strong></li>
                <p>We collect personal information, such as your email address, when you provide it to us through our website. We use this information to send you marketing communications about our art and music, in accordance with the rules against spam.</p>
                <li><strong>Use of Cookies and Other Tracking Technologies</strong></li>
                <p>We use Google Tag Manager and Google Analytics to track web traffic to our site. These tools use cookies and other tracking technologies to collect information about your use of our website, including your IP address, device type, and browsing behavior.</p>
                <li><strong>Advertising</strong></li>
                <p>We run Facebook and Instagram ads to attract traffic to our site. These ads may use cookies and other tracking technologies to collect information about your use of our website and your interests, in order to display ads that are relevant to you.</p>
                <li><strong>Disclosure of Personal Information</strong></li>
                <p>We do not disclose your personal information to third parties, except as required by law or as necessary to provide our services.</p>
                <li><strong>Data Security</strong></li>
                <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure.</p>
                <li><strong>Your Rights</strong></li>
                <p>You have the right to access, correct, or delete your personal information that we have collected. You may also object to the processing of your personal information for marketing purposes. To exercise these rights, please contact us using the contact information provided below.</p>
                <li><strong>Changes to This Privacy Policy</strong></li>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website.</p>
                <li><strong>Contact Us</strong></li>
                <p>If you have any questions or concerns about our privacy practices or this Privacy Policy, please contact us at <a href="mailto:kevin@1ndr.com">kevin@1ndr.com</a>.</p>
            </ol>

            <button onClick={handleGoBack}>&larr; Back</button>
        </div>
    );
};

export default PrivacyPolicy;
