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
                <img className="w-[20%] z-10 mt-20" src={topTitle} alt="Top Title" />
                <p className="m-0 text-[90px] z-10 font-black text-white">DISCOVER YOUR</p>
                <p className="m-0 -mt-16 text-[130px] z-10 font-black text-red-600">INCREDIBLE DNA</p>
                <p className="m-0 -mt-16 text-[90px] z-10 font-black text-white">WITH OUR TEST</p>
                <div className="max-w-[48%] text-center">
                    <p className="m-0 z-10 text-2xl text-white">With over 80 years of research and millions of people just like you already discovering their core values, motivations, and strengths, the Incredible You DNA Test is the ultimate tool for self-discovery and growth.</p>
                </div>
                <StartTestButton className="w-[25%]">
                    <p className="text-white mr-5 text-2xl font-bold">Start The Test</p>
                    <img src={arrow} alt="arrow" />
                </StartTestButton>
            </div>
        </div>
    )
}

export default First