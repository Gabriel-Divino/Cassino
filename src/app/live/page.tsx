"use client"
import { useEffect } from "react"
import Header from "../components/Header"
import Script from 'next/script';


export default function Live(){


    useEffect(()=>{
        document.title = "Cassino Ao Vivo"


    },[])

    return(
        <div>
            <Header />
            <iframe id="iframe" src="https://evo.wcentertainments.com/frontend/evo/r2/" style={{width:"100%",height:"1000px"}}></iframe>

   
        </div>
    )


}