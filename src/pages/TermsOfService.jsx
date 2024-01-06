import React from 'react';

const TermsOfService = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className='legal'>
            <h2>Terms of Service - Kevin Cincotta, LLC</h2>

            <p>Last updated: June 11, 2023</p>

            <h3>1. Introduction</h3>
            <p>
                These Terms of Service ("Terms") govern your use of the website located
                at <a href="https://1ndr.com">1ndr.com</a> and its subdomains
                (collectively, the "Website"), operated by Kevin Cincotta, LLC
                ("Company," "we," "us," or"our"). By accessing or using the Website,
                you agree to be bound by these Terms and all applicable laws and regulations.
                If you do not agree with these Terms, you are prohibited from using or accessing the Website.
            </p>

            <h3>2. Intellectual Property</h3>
            <p>
                The Website and its original content, features, and functionality are owned by
                Kevin Cincotta, LLC and are protected by international copyright, trademark,
                patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h3>3. Product Sales</h3>
            <p>
                The Website allows you to view, purchase, and download art created by Kevin Cincotta.
                All sales are final, and the Company does not offer refunds or exchanges unless expressly
                stated otherwise. The Company reserves the right to modify or discontinue any product or
                service at any time without notice.
            </p>

            <h3>4. User Accounts</h3>
            <p>
                To access certain features of the Website, you may need to create a user account.
                You are responsible for maintaining the confidentiality of your account information,
                including your username and password. You agree to accept responsibility for all
                activities that occur under your account.
            </p>

            <h3>5. Limitation of Liability</h3>
            <p>
                In no event shall the Company or its affiliates be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without limitation, loss of
                profits, data, use, goodwill, or other intangible losses, arising out of or in connection
                with your use of the Website or these Terms.
            </p>

            <h3>6. Governing Law</h3>
            <p>
                These Terms shall be governed by and construed in accordance with the laws of the state of
                Oregon, without regard to its conflict of law provisions.
            </p>

            <h3>7. Changes to Terms of Service</h3>
            <p>
                The Company reserves the right to modify or replace these Terms at any time without prior notice.
                By continuing to access or use the Website after any revisions become effective, you agree to be bound by the updated Terms. If you do not agree to the new Terms, please stop using the Website.
            </p>

            <h3>8. Contact Us</h3>
            <p>
                If you have any questions about these Terms, please contact us at
                <a href="mailto:kevin@1ndr.com">kevin@1ndr.com</a>.
            </p>
            <br />
            <button onClick={handleGoBack}>&larr; Back</button>
        </div>
    );
};

export default TermsOfService;
