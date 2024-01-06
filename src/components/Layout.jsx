import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <div style={{padding: '0 32px'}}>
                <Outlet/>
            </div>

            <Footer/>
        </>
    );
};

export default Layout;