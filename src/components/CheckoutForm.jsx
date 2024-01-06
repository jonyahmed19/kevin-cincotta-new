import React, { useState } from "react";
import { navigate } from "@reach/router"
import { GetGsm, GetSeries } from "../data/WorkFunctions.js"
import WallImages from "./WallImages.jsx";
require("dotenv").config();

//import emailjs from '@emailjs/browser';
//import { navigate } from "@reach/router";
//init(process.env.REACT_APP_EMAILJS_USER_ID);
//const SERVER_URL = "http://localhost:8888/.netlify/functions/api/payment"

function calcShipping(format) {
    if (format === "original") {
        return 20;
    } else if (!isNaN(parseFloat(format))) {
        return 10; // canvas-wrap prints
    } else {
        return 5; // art princts
    }
}

const Canvas = ({ series }) => {
    switch (series) {
        case "/apres-ski/":
            return <p>Canvas is wrapped across 1.5" thick frames.</p>
        case "/analog-future/":
            return <p>These canvas-wrap prints with 1.5" thick frames replicate the unique frame style
                of the original paintings.</p>
        case "/gestures/":
            return <>
                <p>These canvas-wrap prints with 1.5" thick frames replicate the unique frame style
                    of the original paintings.</p>
                <WallImages />
            </>
        default: return ""
    }
}

const Original = ({ series }) => (<>
    <p>My paintings are done in a style I call <i>family-friendly cubist psychedelia</i>.</p>
</>)

const Print = ({ painting }) => (<>
    <p>Archival quality prints on thick, lightly textured {GetGsm(painting)}gsm paper using pigment-based ink rather than dye-based inkjet ink.</p>
</>)

const getNote = (format, painting) => {
    const series = GetSeries(painting);
    switch (format.toLowerCase()) {
        case "original": return <Original series={series} />;
        case "xl": return <Print painting={painting} />;
        case "large": return <Print painting={painting} />;
        case "small": return <Print painting={painting} />;
        default: return <Canvas series={series} />
    }
}

export default function CheckoutForm({ title, painting, product, price, format, cancelUrl }) {
    const shipping = calcShipping(format)
    const formData = { title, product, price, shipping, format, cancelUrl }
    const [loadingStripe, setLoadingStripe] = useState(false)
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     console.log("SUBMIT", process.env.REACT_APP_EMAILJS_USER_ID)
    //     emailjs.send(
    //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //         formData, process.env.REACT_APP_EMAILJS_USER_ID
    //     )
    //         .then((result) => {
    //             console.log("RESULT", result);
    //             setFormData({
    //                 title: '',
    //                 product: '',
    //                 price: '',
    //                 name: '',
    //                 email: '',
    //                 phone: '',
    //                 address: ''
    //             });
    //             navigate("/thanks");
    //         }, (error) => {
    //             console.log("ERROR", error);
    //             navigate("/error");
    //         });
    // };

    const checkout = async (e) => {
        e.preventDefault();
        setLoadingStripe(true)
        document.body.style.cursor = "wait";
        console.log("CHECKOUT", process.env.REACT_APP_CHECKOUT_URL)
        fetch(process.env.REACT_APP_CHECKOUT_URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(response => {
            response.json().then(body => {
                document.body.style.cursor = "auto"
                console.log("RESPONSE", body);
                navigate(body.url, { replace: true })
            })
        })
    }

    return <div className="checkoutNote">
        {getNote(format, painting)}
        {loadingStripe
            ? <>
                <button className="buy disabled" >Processing...</button>
                <p>Please standby...</p>
            </>
            : <>
                <button className="buy" onClick={e => checkout(e)} >Purchase</button>
                <p>plus ${shipping} flat-rate shipping &amp; handling</p>
            </>
        }
    </div>
}