import ellipseTornLeft from "../assets/images/ellipseTornLeft.png"
import ellipseTornRight from "../assets/images/ellipseTornRight.png"
import main from "../assets/images/main.png"
import groupArrow from "../assets/images/groupArrow.png"
import StartTestButton from "./StartTestButton"

const Third = () => {
    return (
        <div className="tornPaper">
            <img className="ellipseLeft" src={ellipseTornLeft} alt="Ellipse Left" />
            <img className="ellipseRight" src={ellipseTornRight} alt="Ellipse Right" />
            <div className="mainInner">
                <div className="mainLeft">
                    <img src={main} alt="Main" />
                </div>
                <div className="mainRight">
                    <div className="whyInline">
                        <img src={groupArrow} alt="Group Arrow" />
                        <h1 className="whyThisBorder">WHY THIS</h1>
                        <h1 className="whyThis">WHY THIS</h1>
                    </div>
                    <div className="inlineTest">
                        <h1 className="testBorder">TEST?</h1>
                        <h1 className="test">TEST?</h1>
                    </div>
                    <p className="text">
                        The Incredible You DNA Test will give instant access to your personalized report, including a detailed analysis of your personality type and recommended resources for growth and development.
                    </p>
                    <p className="text">
                        Embrace the power of self-discovery and start living the life you were meant to live.
                    </p>
                    <StartTestButton />
                </div>
            </div>
        </div>
    )
}

export default Third