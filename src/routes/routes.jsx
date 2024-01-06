import Events from "./pages/Events";
import Shop from "./pages/Shop";
import Murals from "./pages/Murals";
import Commissions from "./pages/Commissions";
import CustomWork from "./pages/CustomWork";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Error from "./components/Error";
import Inventory from "./pages/Inventory";
import Paintings from "./pages/Paintings";
import SmallPrints from "./pages/SmallPrints";
import LargePrints from "./pages/LargePrints";
import CanvasPrints from "./pages/CanvasPrints";
import Favorites from "./pages/Favorites";
import Portfolio from "./pages/portfolio";
import Reflection from "./pages/gestures/Reflection";
import Bees from "./pages/gestures/Bees";
import TreeClimbing from "./pages/gestures/TreeClimbing";
import SandDollar from "./pages/gestures/SandDollar";
import Surfer from "./pages/gestures/Surfer";
import Tent from "./pages/gestures/Tent";
import Kite from "./pages/gestures/Kite";
import Sunset from "./pages/gestures/Sunset";
import Trees from "./pages/gestures/Trees";
import Seagulls from "./pages/gestures/Seagulls";
import Serenade from "./pages/gestures/Serenade";
import Painter from "./pages/gestures/Painter";
import Berries from "./pages/gestures/Berries";
import CanyonLake from "./pages/gestures/CanyonLake";
import Seashells from "./pages/gestures/Seashells";
import Sailing from "./pages/gestures/Sailing";
import Boardwalk from "./pages/gestures/Boardwalk";
import Beach from "./pages/gestures/Beach";
import Band from "./pages/gestures/Band";
import Beachball from "./pages/gestures/Beachball";
import AnalogFutureSeries from "./pages/AnalogFutureSeries";
import Canoe from "./pages/af/Canoe";
import Map from "./pages/af/Map";
import Crocodile from "./pages/af/Crocodile";
import House from "./pages/af/House";
import ParkBench from "./pages/af/ParkBench";
import Watermelon from "./pages/af/Watermelon";
import ApresSkiSeries from "./pages/ApresSkiSeries";
import Bears from "./pages/apres-ski/Bears";
import DualSkiers from "./pages/apres-ski/DualSkiers";
import Sheep from "./pages/apres-ski/Sheep";
import Skier1 from "./pages/apres-ski/Skier1";
import Skier2 from "./pages/apres-ski/Skier2";
import Skier3 from "./pages/apres-ski/Skier3";
import Skis from "./pages/apres-ski/Skis";
import Trees3 from "./pages/apres-ski/Trees";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Checkout from "../pages/Checkout.jsx";
import GesturesSeries from "./pages/GesturesSeries.jsx";
import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../Home.jsx";
import About from "../About.jsx";
// import routes from "./routes/routes.jsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",

                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/events",
                element: <Events />,
            },
            {
                path: "/checkout/:nickname/:format",
                element: <Checkout />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/murals",
                element: <Murals />,
            },
            {
                path: "/commissions",
                element: <Commissions />,
            },
            {
                path: "/customwork",
                element: <CustomWork />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/thanks",
                element: <Thanks />,
            },
            {
                path: "/error",
                element: <Error />,
            },
            {
                path: "/inventory",
                element: <Inventory />,
            },
            {
                path: "/shop/paintings",
                element: <Paintings />,
            },
            {
                path: "/shop/smallprints",
                element: <SmallPrints />,
            },
            {
                path: "/shop/largeprints",
                element: <LargePrints />,
            },
            {
                path: "/shop/canvasprints",
                element: <CanvasPrints />,
            },
            {
                path: "/faves",
                element: <Favorites />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/gestures",
                element: <GesturesSeries />,
            },
            {
                path: "/gestures/watching-you-watching-us",
                element: <Reflection />,
            },
            {
                path: "/gestures/pollinators",
                element: <Bees />,
            },
            {
                path: "/gestures/climbing-a-tree",
                element: <TreeClimbing />,
            },
            {
                path: "/gestures/i-sent-you-a-postcard",
                element: <SandDollar />,
            },
            {
                path: "/gestures/big-swell",
                element: <Surfer />,
            },
            {
                path: "/gestures/beachball",
                element: <Beachball />,
            },
            {
                path: "/gestures/430am-on-mt-shasta",
                element: <Tent />,
            },
            {
                path: "/gestures/fly-my-kite",
                element: <Kite />,
            },
            {
                path: "/gestures/slow-down-sunset",
                element: <Sunset />,
            },
            {
                path: "/gestures/four-very-tall-trees",
                element: <Trees />,
            },

            {
                path: "/gestures/a-seagulls-topography",
                element: <Seagulls />,
            },
            {
                path: "/gestures/serenade",
                element: <Serenade />,
            },
            {
                path: "/gestures/cliffside-self-portrait",
                element: <Painter />,
            },
            // <Redirect from="/gestures/foraging-for-dinner" to="/gestures/forest-food" />

            {
                path: "/gestures/forest-food",
                element: <Berries />,
            },
            {
                path: "/gestures/cliff-divers",
                element: <CanyonLake />,
            },
            {
                path: "/gestures/still-life-in-the-sand",
                element: <Seashells />,
            },
            {
                path: "/gestures/well-be-waiting-by-the-lighthouse",
                element: <Sailing />,
            },
            {
                path: "/gestures/hustle-and-bustle",
                element: <Boardwalk />,
            },
            {
                path: "/gestures/learning-to-surf",
                element: <Beach />,
            },
            {
                path: "/gestures/the-beach-people",
                element: <Band />,
            },

            {
                path: "/analog-future",
                element: <AnalogFutureSeries />,
            },
            {
                path: "/analog-future/hill-in-the-middle-of-a-lake",
                element: <Canoe />,
            },
            {
                path: "/analog-future/road-to-nowhere",
                element: <Crocodile />,
            },
            {
                path: "/analog-future/home-at-last",
                element: <House />,
            },
            {
                path: "/analog-future/x-marks-the-spot",
                element: <Map />,
            },
            {
                path: "/analog-future/listening-to-the-birds",
                element: <ParkBench />,
            },
            {
                path: "/analog-future/summer-haul",
                element: <Watermelon />,
            },

            {
                path: "/apres-ski",
                element: <ApresSkiSeries />,
            },
            {
                path: "/apres-ski/just-right",
                element: <Bears />,
            },
            {
                path: "/apres-ski/flying-formation",
                element: <DualSkiers />,
            },
            {
                path: "/apres-ski/mountaineers",
                element: <Sheep />,
            },
            {
                path: "/apres-ski/dawn-patrol",
                element: <Skier1 />,
            },
            {
                path: "/apres-ski/art-of-the-turn",
                element: <Skier2 />,
            },
            {
                path: "/apres-ski/couloir",
                element: <Skier3 />,
            },
            {
                path: "/apres-ski/skiing-in-style",
                element: <Skis />,
            },
            {
                path: "/apres-ski/three-snowy-trees",
                element: <Trees3 />,
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/terms-of-service",
                element: <TermsOfService />,
            },
        ],
    },
]);