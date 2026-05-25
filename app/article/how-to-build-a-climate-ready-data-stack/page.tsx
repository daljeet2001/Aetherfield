"use client"
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Component13 from "@/app/components/component13";
import Component14 from "@/app/components/component14";
import { useEffect } from "react";

export default function Page(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);
    
    return(
        <>

        <Navbar/>
        <Component13/>
        <Component14/>
        <Footer/>

        </>
    )
}