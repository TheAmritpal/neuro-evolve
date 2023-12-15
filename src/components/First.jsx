import ellipseLeft from "../assets/images/ellipseLeft.png"
import ellipseRight from "../assets/images/ellipseRight.png"
import topTitle from "../assets/images/topTitle.png"
import incredible from "../assets/images/incredible.png"
import StartTestButton from "./StartTestButton"

const First = () => {
    return (
        <div className="container">
            <img className="ellipseLeft" src={ellipseLeft} alt="Ellipse Left" />
            <img className="ellipseRight" src={ellipseRight} alt="Ellipse Right" />
            <div className="contentCenter">
                <img className="topTitle" src={topTitle} alt="Top Title" />
                <h1 className="discoverText">DISCOVER YOUR</h1>
                <img src={incredible} alt="Incredible Text" />
                <h1 className="discoverText mt-0">WITH OUR TEST</h1>
                <p className="summary">With over 80 years of research and millions of people just like you already discovering their core values, motivations, and strengths, the Incredible You DNA Test is the ultimate tool for self-discovery and growth.</p>
                <StartTestButton marginAuto={true} />
            </div>
        </div>
    )
}

export default First