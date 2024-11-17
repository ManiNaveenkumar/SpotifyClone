import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

function DisplayHome() {

    return (
        <>
            <Navbar />
            <div className=" mb-4 ">
                <h1>Featured char</h1>
                <div className=" flex overflow-auto ">
                    {albumsData.map((element, index) => (<AlbumItem key={index} name={element.name} desc={element.desc} id={element.id} image={element.image} />))}
                </div>
            </div>
            
            <div className=" mb-4 ">
                <h1>All your favourite is here!</h1>
                <div className=" flex overflow-auto ">
                    {songsData.map((element, index) => (<SongItem key={index} name={element.name} desc={element.desc} id={element.id} image={element.image} />))}
                </div>
            </div>
        </>

    )

}
export default DisplayHome