import topTitle from "../assets/images/topTitle.png"
import open from "../assets/images/open.png"
import fb from "../assets/images/fb.png"
import ig from "../assets/images/ig.png"
import linkedin from "../assets/images/ig.png"
import x from "../assets/images/x.png"
import group from "../assets/images/group.png"

const Footer = () => {
    return (
        <div className='2xl:px-[8%] xl:px-[2%] flex justify-around bg-black py-[40px]'>
            <div className="w-2/6 flex flex-col items-center">
                <img className="lg:w-9/12" src={topTitle} alt="Title" />
                <p className="text-white text-center xl:w-4/6 lg:w-5/6 mt-4">Discover your true self and unlock your full potential with our scientifically-designed personality assessment test.</p>
            </div>
            <div className="w-4/6 flex flex-col items-center">
                <div className="inline-flex justify-center">
                    <p className="text-white font-black 2xl:text-[50px] xl:text-[40px] lg:text-[30px] mr-2">Visit Our <span className="text-red-600">Social Media</span> Accounts</p>
                    <img src={open} className="object-scale-down max-h-full 2xl:w-12 xl:w-10 lg:w-6" alt="Open" />
                </div>
                <div className="inline-flex w-2/6 justify-evenly">
                    <img className="object-scale-down max-h-full w-10" src={fb} alt="Facebook" />
                    <img className="object-scale-down max-h-full w-10" src={x} alt="Twitter" />
                    <img className="object-scale-down max-h-full w-10" src={ig} alt="Instagram" />
                    <img className="object-scale-down max-h-full w-10" src={linkedin} alt="LinkedIn" />
                </div>
                <div className="inline-flex w-2/6 items-center justify-center mt-4">
                    <img className="object-scale-down max-h-full w-5 mr-2" src={group} alt="Group" />
                    <p className="text-white ">arfeenkhan.com</p>
                </div>
                <hr className="border-b-1 border-white w-[80%] mt-4" />
                <div className="inline-flex items-center justify-center mt-4">
                    <span className="text-white mr-2">&copy;</span> <p className="text-white text-sm">Copyright 2023-Incredible You Management Training LLC.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer