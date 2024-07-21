import React from "react";
import Hero from "../Components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import GridComponent from "../Components/GridComponent/GridComponent";
export default function HomePage()
{
   const {albumData,newAlbumData,songsData,filteredSource}=useOutletContext();
    return(
        <div>
        <Hero></Hero>
        <GridComponent data={albumData} title="Top Albums" type="Albums" />
        <GridComponent data={newAlbumData} title="New Albums" type="Albums" />
        <GridComponent data={songsData} filteredSource={filteredSource} title="Songs" type="Songs" />
        </div>

    )
   
}