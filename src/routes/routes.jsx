import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../Home.jsx";
import About from "../About.jsx";

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Navbar/>}>
                    <Route exact path='home' element={<Home/>}/>
                    <Route exact path='about' element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routes;
