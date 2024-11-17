import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets } from "../assets/assets";


export default function DisplayAlbum() {
    const { id } = useParams();
    const albumData = albumsData[id]
    return (<>
        <div>
            <Navbar />
            <div className=" mt-10 flex gap-8 md:flex-row md:items-end ">
                <img className=" w-48 rounded" src={albumData.image} alt="" />
                <div className="flex flex-col ">
                    <p> Playlist</p>
                    <h2 className=" text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4 >{albumData.desc}</h4>
                    <p className=" mt-1 ">
                        <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
                        <b>  Spotify</b>
                        •1,234,796 likes 
                        •<b>39 songsData</b>
                        •about 2hr 30 mins
                    </p>
                </div>
            </div>
        </div>
        
        
        </>
    )
} 