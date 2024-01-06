import React from "react";
import Page from "../components/Page.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import H1 from "../components/H1.jsx";

const Commissions = (props) => (
    <Page {...props}>
        <div>
            <H1>Custom Work Pricing Guidelines</H1>
            <div className="commissions">
                <p>
                    Thank you for your interest in my custom painting, mural, and graphic design services! Below you'll find general guidelines for my pricing.
                </p>
                <h2>Commissioned Paintings</h2>
                <p>
                    I charge 50% more for commissioned paintings than I do for my own paintings of the same size. This is because commissioned paintings are one-of-a-kind collaborations that require extra time and effort to create. When you commission a painting from me, you'll receive a unique piece of art that's tailored to your preferences and vision.
                </p>
                <h2>Murals</h2>
                <p>
                    My standard rate for murals is $5 per square foot. However, I'm open to discounting this rate in certain situations. If the wall is a particularly good location for showcasing my art, or if you are a non-profit doing good work for the world, I may be able to offer a discounted rate. When you hire me to create a mural, you can expect a vibrant and eye-catching piece that will transform your space.
                </p>
                <h2>Graphic Design</h2>
                <p>
                    I offer graphic design services on a T&M (time and materials) basis, at a rate of $50 per hour. I'm open to discussing alternative arrangements, such as fixed-price contracts, on a case-by-case basis. When you hire me for graphic design work, you can expect high-quality designs that are tailored to your brand and message.
                </p>
            </div>
        </div>
        <footer className="main">
        <p>
                    If you have any questions or if you'd like to discuss a potential project, please don't hesitate to contact me. I'd love to hear from you and see how we can work together to create something beautiful!
                </p>
            <ContactInfo />
        </footer>
    </Page>
);

export default Commissions;
