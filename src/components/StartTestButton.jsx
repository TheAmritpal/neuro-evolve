import arrow from "../assets/images/arrow.png"

const StartTestButton = ({ className }) => {
    return (
        <div className={`mt-10 px-10 py-6 rounded-sm bg-gradient-to-r from-[#CD1223] to-[#66151C] flex justify-center items-center ${className}`}>
            <p className="text-white mr-5 text-2xl font-bold">Start The Test</p>
            <img src={arrow} alt="arrow" />
        </div>
    )
}

export default StartTestButton