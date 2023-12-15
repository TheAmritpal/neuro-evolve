import { Fragment } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

const Home = () => {
    return (
        <Fragment>
            <First />
            <Second />
            <Third />
        </Fragment>
    )
}

export default Home