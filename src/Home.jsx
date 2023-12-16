import { Fragment } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <Fragment>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Footer />
        </Fragment>
    )
}

export default Home