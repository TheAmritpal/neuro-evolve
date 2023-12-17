import arfeenPotrait from "../assets/images/arfeenPotrait.png"
import ellipseTornLeft from "../assets/images/ellipseTornLeft.png"
import ellipseTornRight from "../assets/images/ellipseTornRight.png"
import StartTestButton from "./StartTestButton"

const Register = () => {
    return (
        <div className="registerBg flex relative w-full px-20">
            <img className="absolute object-scale-down w-3/12 self-baseline -top-16 left-0" src={ellipseTornLeft} alt="Effect Left" />
            <img className="absolute object-scale-down w-3/12 self-baseline -bottom-16 right-0" src={ellipseTornRight} alt="Effect Righ" />
            <div className="w-4/6 flex flex-col items-center my-10">
                <p className="text-white font-black 2xl:text-[80px] xl:text-[70px]"><span className="text-red-600">REGISTER</span> HERE</p>
                <input className="2xl:w-7/12 xl:w-10/12 2xl:my-8 xl:my-6 bg-[#1D1D30] px-4 py-4 border border-b-1 border-[#186F99] rounded-lg text-[#858585] focus:outline-none text-lg block" type="text" placeholder="ENTER YOUR NAME" />
                <input className="2xl:w-7/12 xl:w-10/12 2xl:my-8 xl:my-6 bg-[#1D1D30] px-4 py-4 border border-b-1 border-[#186F99] rounded-lg text-[#858585] focus:outline-none text-lg block" type="text" placeholder="ENTER YOUR EMAIL ID" />
                <input className="2xl:w-7/12 xl:w-10/12 2xl:my-8 xl:my-6 bg-[#1D1D30] px-4 py-4 border border-b-1 border-[#186F99] rounded-lg text-[#858585] focus:outline-none text-lg block" type="text" placeholder="ENTER YOUR MOBILE NO." />
                <StartTestButton className="2xl:px-28 xl:px-24" >
                    <p className="text-white text-lg font-bold">Submit Your Details</p>
                </StartTestButton>
            </div>
            <img className="object-scale-down self-baseline 2xl:w-5/12 xl:w-6/12 2xl:-mt-28 xl:-mt-24 z-10" src={arfeenPotrait} alt="Arfeen Potrait" />
        </div>
    )
}

export default Register