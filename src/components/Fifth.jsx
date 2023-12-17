import followLeft from "../assets/images/followLeft.png"
import followRight from "../assets/images/followRight.png"
import StartTestButton from "./StartTestButton"
import arrow from "../assets/images/arrow.png"

const Fifth = () => {
    return (
        <div className="flex flex-col items-center w-100 mb-24 relative">
            <img className="absolute left-0 top-0 -z-1 object-scale-down max-h-full" src={followLeft} alt="Left Effect" />
            <img className="absolute right-0 bottom-0 -z-1 object-scale-down max-h-full" src={followRight} alt="Right Effect" />
            <hr className=" w-1/5 border-b-1 border border-[#0F120C] mb-20" />
            <p className="text-red-600 font-bold text-4xl">Follow this 3 easy steps</p>
            <p className="text-black w-1/3 text-center mt-2">and answer the questions honestly and thoughtfully.</p>
            <p className="text-black w-1/3 text-center">Receive your personalized report within minutes.</p>
            <div className="followBg flex items-center justify-around w-11/12 z-10">
                <div className="flex flex-col items-center text-center">
                    <p className="text-red-600 font-black 2xl:text-5xl xl:text-4xl">Step 1:</p>
                    <p className="text-white font-black 2xl:text-6xl xl:text-5xl">SELECT</p>
                    <p className="text-white 2xl:w-3/6 xl:w-4/6 mt-4">Mark your answers based on how well each statement describes you.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-red-600 font-black 2xl:text-5xl xl:text-4xl">Step 2:</p>
                    <p className="text-white font-black 2xl:text-6xl xl:text-5xl">COMPARE</p>
                    <p className="text-white 2xl:w-3/6 xl:w-4/6 mt-4">The next step is to compare each card individually among each other. Decide which best represents who you are.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-red-600 font-black 2xl:text-5xl xl:text-4xl">Step 3:</p>
                    <p className="text-white font-black 2xl:text-6xl xl:text-5xl">REPORT</p>
                    <p className="text-white 2xl:w-3/6 xl:w-4/6 mt-4">Watch your final Incredible You DNA report from the Arfeen Khan.</p>
                </div>
            </div>
            <StartTestButton>
                <p className="text-white mr-5 text-2xl font-bold">Start The Test</p>
                <img src={arrow} alt="arrow" />
            </StartTestButton>
        </div>
    )
}

export default Fifth