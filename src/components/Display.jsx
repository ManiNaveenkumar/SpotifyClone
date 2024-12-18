import React from "react";
import DisplayHome from "./DisplayHome";
import { Route,Routes} from 'react-router-dom'
import DisplayAlbum from "./DisplayAlbum";

function Display(){
    return(
  <div className="w-[100%] m-2 px-6 pt-4 rounded text-white bg-[#121212] overflow-auto lg:w-[75%] lg:ml-0">
    
    <Routes >
        <Route path="/" element={<DisplayHome/>} />
        <Route path="/album/:id" element={<DisplayAlbum/>} />

    </Routes>
  </div>)
 }
 export default Display