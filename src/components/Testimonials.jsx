import profile4 from "../assets/images/profile4.png"
import profile2 from "../assets/images/profile2.png"
import profile3 from "../assets/images/profile3.png"

const Testimonials = () => {
    return (
        <div className="flex flex-col items-center my-10">
            <p className="font-black text-[80px] text-red-600">TESTIMONIALS</p>
            <p className="-mt-[12px] text-black text-[30px] tracking-[.6em] uppercase">see what others have to say</p>
            <div className="flex items-center 2xl:px-40 xl:px-20 my-10">
                <img src={profile4} className="object-scale-down max-h-full 2xl:w-5/12 xl:w-6/12" alt="Profile 4" />
                <div className="flex-col flex w-7/12 text-center px-10">
                    <p className="text-black 2xl:text-[28px] xl:text-[22px]">“I was blown away by the accuracy of the personality test on this website! It provided me with insights and understanding of myself that I never would have discovered otherwise. Highly recommend giving it a try!...”</p>
                    <p className="text-red-600 font-black text-[28px] mt-8">John Wick</p>
                    <p className="text-black -mt-2 text-[26px]">-Designer</p>
                </div>
            </div>
            <div className="flex items-center 2xl:px-40 xl:px-20 my-10">
                <div className="flex-col flex w-7/12 text-center px-10">
                    <p className="text-black 2xl:text-[28px] xl:text-[22px]">“The Enneagram Personality Test has been a life-changing experience for me. I now have a better understanding of myself and those around me, and I feel more confident and self-assured. I would highly recommend this test to anyone looking for personal growth and self-discovery.”</p>
                    <p className="text-red-600 font-black text-[28px] mt-8">Rita Sharma</p>
                    <p className="text-black -mt-2 text-[26px]">-Entrepreneur</p>
                </div>
                <img src={profile2} className="object-scale-down max-h-full 2xl:w-5/12 xl:w-6/12" alt="Profile 2" />
            </div>
            <div className="flex items-center 2xl:px-40 xl:px-20 my-10">
                <img src={profile3} className="object-scale-down max-h-full 2xl:w-5/12 xl:w-6/12" alt="Profile 2" />
                <div className="flex-col flex w-7/12 text-center px-10">
                    <p className="text-black 2xl:text-[28px] xl:text-[22px]">“I've taken a lot of personality tests in the past, but this one was by far the most insightful. I learned things about myself that I had never even considered before.”</p>
                    <p className="text-red-600 font-black text-[28px] mt-8">Mark Wilson</p>
                    <p className="text-black -mt-2 text-[26px]">-Fashion Designer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials