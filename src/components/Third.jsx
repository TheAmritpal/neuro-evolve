import ellipseTornLeft from "../assets/images/ellipseTornLeft.png"
import ellipseTornRight from "../assets/images/ellipseTornRight.png"
import main from "../assets/images/main.png"
import groupArrow from "../assets/images/groupArrow.png"
import StartTestButton from "./StartTestButton"
import arrow from "../assets/images/arrow.png"

const Third = () => {
    return (
        <div className="tornPaper w-100 relative -z-2 mt-24">
            <img className="absolute left-0 top-0 -z-1" src={ellipseTornLeft} alt="Ellipse Left" />
            <img className="absolute right-0 bottom-0 -z-1" src={ellipseTornRight} alt="Ellipse Right" />
            <div className="flex justify-around items-center h-full w-11/12">
                <img className="z-10" src={main} alt="Main" />
                <div className="block w-[50%]">
                    <div className="relative inline-flex items-end">
                        <img className="mr-10 z-10" src={groupArrow} alt="Group Arrow" />
                        <p className="-m-9 z-10 text-white text-[100px] font-bold">WHY THIS</p>
                        <p className="text-[150px] absolute bottom-0 -right-28 -z-5 font-bold -m-[56px]">WHY THIS</p>
                    </div>
                    <div className="relative inline-flex items-end h-[120px]">
                        <p className="-mb-8 z-10 text-red-600 text-[100px] font-bold">TEST?</p>
                        <p className="text-[150px] absolute bottom-0 -right-28 -z-5 font-bold -m-[56px] mr-[15px]">TEST?</p>
                    </div>
                    <div className="w-[75%]">
                        <p className="text-white text-2xl my-5">The Incredible You DNA Test will give instant access to your personalized report, including a detailed analysis of your personality type and recommended resources for growth and development.</p>
                        <p className="text-white text-2xl">Embrace the power of self-discovery and start living the life you were meant to live.</p>
                    </div>
                    <StartTestButton className="w-[50%]">
                        <p className="text-white mr-5 text-2xl font-bold">Start The Test</p>
                        <img src={arrow} alt="arrow" />
                    </StartTestButton>
                </div>
            </div>
        </div >
    )
}

export default Third