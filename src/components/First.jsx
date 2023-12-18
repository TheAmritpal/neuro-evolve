import ellipseLeft from "../assets/images/ellipseLeft.png"
import ellipseRight from "../assets/images/ellipseRight.png"
import topTitle from "../assets/images/topTitle.png"
import arrow from "../assets/images/arrow.png"
import StartTestButton from "./StartTestButton"

const First = () => {
    return (
        <div className="relative h-screen bg-black bg-no-repeat bg-origin-border bg-center bg-cover bg -z-2">
            <img className="absolute left-0 top-0 -z-1" src={ellipseLeft} alt="Ellipse Left" />
            <img className="absolute right-0 bottom-0 -z-1" src={ellipseRight} alt="Ellipse Right" />
            <div className="h-full flex flex-col items-center">
                <img className="2xl:w-2/12 xl:w-2/12 z-10 mt-20 lg:w-3/12" src={topTitle} alt="Top Title" />
                <p className="m-0 text-[40px] z-10 font-black text-white 2xl:text-[90px] xl:text-[70px] 2xl:mt-4 lg:mt-2">DISCOVER YOUR</p>
                <p className="m-0 text-[70px] z-10 font-black text-red-600 2xl:text-[130px] xl:text-[90px] 2xl:-mt-20 xl:-mt-14 lg:-mt-10">INCREDIBLE DNA</p>
                <p className="m-0 text-[40px] z-10 font-black text-white 2xl:text-[90px] xl:text-[70px] 2xl:-mt-20 xl:-mt-14 lg:-mt-10">WITH OUR TEST</p>
                <div className="text-center 2xl:w-[42%] xl:w-[53%] lg:w-[55%]">
                    <p className="m-0 z-10 text-2xl text-white 2xl:text-[20px] xl:text-[20px] lg:text-[16px] leading-none z-10 2xl:mt-8 xl:mt-6 lg:mt-4">With over 80 years of research and millions of people just like you already discovering their core values, motivations, and strengths, the Incredible You DNA Test is the ultimate tool for self-discovery and growth.</p>
                </div>
                <StartTestButton className="w-[25%] 2xl:w-[30%] xl:w-[35%] lg:w-[40%]">
                    <p className="text-white mr-5 text-2xl font-bold">Start The Test</p>
                    <img src={arrow} alt="arrow" />
                </StartTestButton>
            </div>
        </div>
    )
}

export default First