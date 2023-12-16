import discoverImage from "../assets/images/discoverImage.png"
import groupArrowBlack from "../assets/images/groupArrowBlack.png"

const Fourth = () => {
    return (
        <div className="my-24 flex px-[8%]">
            <div className="flex flex-col justify-center">
                <p className="font-black text-[80px] leading-none">DISCOVER YOURSELF IN JUST <span className="text-red-600">3 EASY STEPS</span></p>
                <img src={groupArrowBlack} className="w-[50%]" alt="Arrow Button" />
            </div>
            <img className="object-contain w-4/6 h-auto" src={discoverImage} alt="Discover Image" />
        </div>
    )
}

export default Fourth