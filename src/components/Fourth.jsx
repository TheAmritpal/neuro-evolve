import discoverImage from "../assets/images/discoverImage.png"
import groupArrowBlack from "../assets/images/groupArrowBlack.png"

const Fourth = () => {
    return (
        <div className="my-24 flex px-[8%]">
            <div className="flex flex-col justify-center">
                <p className="font-black 2xl:text-[80px] xl:text-[65px] leading-none">DISCOVER YOURSELF IN JUST <span className="text-red-600">3 EASY STEPS</span></p>
                <img src={groupArrowBlack} className="w-[50%] mt-4" alt="Arrow Button" />
            </div>
            <img className="object-contain 2xl:w-4/6 xl:w-7/12 h-auto" src={discoverImage} alt="Discover Image" />
        </div>
    )
}

export default Fourth