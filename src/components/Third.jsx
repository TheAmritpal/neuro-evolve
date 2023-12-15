import ellipseTornLeft from "../assets/images/ellipseTornLeft.png"
import ellipseTornRight from "../assets/images/ellipseTornRight.png"
import main from "../assets/images/main.png"
import groupArrow from "../assets/images/groupArrow.png"

const Third = () => {
    return (
        <div className="tornPaper">
            <img className="ellipseLeft" src={ellipseTornLeft} alt="Ellipse Left" />
            <img className="ellipseRight" src={ellipseTornRight} alt="Ellipse Right" />
            <div className="mainInner">
                <img src={main} alt="Main" />
                <div className="mainRight">
                    <img src={groupArrow} alt="Group Arrow" />
                    <h1 className="whyThis">WHY THIS</h1>
                </div>
            </div>
        </div>
    )
}

export default Third