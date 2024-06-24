"use client";
import Header from "@/app/components/Header"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { api_url } from "@/app/urls";
import Head from "next/head";
import { Game } from "@/app/struc";

export const runtime = 'edge';

export default function GamePage(){

    const [game,setGame] = useState<Game>({id:0,title:"",slug:"",image:""})
    const { slug } = useParams(); // Extrai o parâmetro 'id' da URL

    const link = `https://m.pgsoft-games.com/${game.id}/index.html?l=pt&ot=ca7094186b309ee149c55c8822e7ecf2&btt=2&from=https://pgdemo.asia/&language=pt-BR&__refer=m.pg-redirect.net&or=static.pgsoft-games.com`

    
    const GameIframe = () =>{
        if(game.id !=0){
            return(
                <iframe src={link} style={{width:"100%",height:"700px"}}></iframe>
            )
        }
    }
    

    useEffect(() => {
      if (slug != null) {
            fetch(`${api_url}/get-game?slug=${slug}`)
            .then(response=>response.json())
            .then(response=>{
                console.log(response)
                document.title = `Demo - ${response['game']['title']}`
                setGame(response['game'])
                
            })
      }
    }, [slug]);

    return(
        <div>
            <Head>
                <title>{game.title}</title>
            </Head>
            <Header />
            <h2 style={{textAlign:"center",fontSize:"200%",marginBottom:"3%"}}>{game.title}</h2>
            <GameIframe />
        </div>
    )

}