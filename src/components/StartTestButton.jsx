import arrow from "../assets/images/arrow.png"

const StartTestButton = ({ marginAuto }) => {
    return (
        <div className={`startTestBtn ${marginAuto ? 'marginAuto' : ''}`}>
            <p>Start The Test</p>
            <img src={arrow} alt="arrow" />
        </div>
    )
}

export default StartTestButton