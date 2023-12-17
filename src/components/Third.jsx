import ellipseTornLeft from "../assets/images/ellipseTornLeft.png"
import ellipseTornRight from "../assets/images/ellipseTornRight.png"
import main from "../assets/images/main.png"
import groupArrow from "../assets/images/groupArrow.png"
import StartTestButton from "./StartTestButton"
import arrow from "../assets/images/arrow.png"

const Third = () => {
    return (
        <div className="tornPaper w-100 relative -z-2 mt-24 2xl:py-52 xl:py-36 xl:px-10">
            <img className="absolute left-0 top-0 -z-1" src={ellipseTornLeft} alt="Ellipse Left" />
            <img className="absolute right-0 bottom-0 -z-1" src={ellipseTornRight} alt="Ellipse Right" />
            <div className="flex justify-around items-center h-full 2xl:w-11/12">
                <img className="z-10 object-scale-down max-h-full xl:w-6/12 xl:pr-10" src={main} alt="Main" />
                <div className="block w-[50%]">
                    <div className="relative inline-flex items-end">
                        <img className="mr-10 object-scale-down max-h-full 2xl:w-6/12 xl:w-5/12 z-10" src={groupArrow} alt="Group Arrow" />
                        <p className="2xl:-mb-9 xl:-mb-6 z-10 text-white 2xl:text-[110px] xl:text-[60px] font-bold">WHY THIS</p>
                        <p className="2xl:text-[150px] xl:text-[90px] absolute bottom-0 2xl:-right-[2%] -z-5 font-bold 2xl:-mb-[48px] xl:-mb-[40px]">WHY THIS</p>
                    </div>
                    <div className="relative inline-flex items-end 2xl:h-[120px] xl:h-[100px]">
                        <p className="2xl:-mb-8 xl:-mb-6 z-10 text-red-600 2xl:text-[100px] xl:text-[60px] font-bold">TEST?</p>
                        <p className="2xl:text-[150px] xl:text-[90px] absolute bottom-0 2xl:-right-[49%] xl:-right-[30%] -z-5 font-bold 2xl:-mb-[56px] 2xl:mr-[18%] xl:-mb-[32px]">TEST?</p>
                    </div>
                    <div className="2xl:w-[75%] xl:w-[100%]">
                        <p className="text-white 2xl:text-2xl xl:text-lg my-5">The Incredible You DNA Test will give instant access to your personalized report, including a detailed analysis of your personality type and recommended resources for growth and development.</p>
                        <p className="text-white 2xl:text-2xl xl:text-xl">Embrace the power of self-discovery and start living the life you were meant to live.</p>
                    </div>
                    <StartTestButton className="2xl:w-[50%] xl:w-[70%]">
                        <p className="text-white mr-5 text-2xl font-bold">Start The Test</p>
                        <img src={arrow} alt="arrow" />
                    </StartTestButton>
                </div>
            </div>
        </div >
    )
}

export default Third