import { Fragment } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Footer from "./components/Footer";
import Fifth from "./components/Fifth";
import Register from "./components/Register";
import Testimonials from "./components/Testimonials";

const Home = () => {
    return (
        <Fragment>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Register />
            <Testimonials />
            <Footer />
        </Fragment>
    )
}

export default Home