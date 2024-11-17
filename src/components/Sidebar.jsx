import React from "react";
import { assets } from '../assets/assets'
function Sidebar() {
    return (
        <div className="w-[25%] h-full flex-col gap-2 text-white lg:flex">
            <div className="bg-[#121212]  h-[15%] rounded flex flex-col justify-around">
                <div className=" items-center flex gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.home_icon} alt=""></img>
                    <p className="font-bold ">Home</p>
                </div>

                <div className=" items-center flex gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.search_icon} alt=""></img>
                    <p className="font-bold ">Search</p>
                </div>


            </div>
            <div className="bg-[#121212] h-[85%] rounded">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={assets.stack_icon} alt=""></img>
                        <p className=" font-semibold"> Your Library </p>

                    </div>
                    <div className="flex items-center gap-3 ">
                        <img className="w-5" src={assets.arrow_icon} alt=""></img>
                        <img className="w-5" src={assets.plus_icon} alt=""></img>
                    </div>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col pl-4 justify-start items-start ">
                    <h1> Create your firstever playlist  </h1>
                    <p className=" font-light"> it's easy we will help you </p>
                    <button className="px-4 py-1.5 bg-white text-[15p] text-black rounded-full mt-4 "> Create PlayList</button>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col pl-4 justify-start items-start mt-4 ">
                    <h1> Let's find your favourite Podcasts </h1>
                    <p className=" font-light">  we'll remind you for every new episodes </p>
                    <button className="px-4 py-1.5 bg-white text-[15p] text-black rounded-full mt-4 ">Browse podcasts</button>
                </div>
            </div>
        </div>

    )
}
export default Sidebar