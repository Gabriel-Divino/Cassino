"use client"

import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { api_url } from "./urls";
import { Game } from "./struc";


export default function Home() {




  const [games, setGames] = useState<Game[]>([]);
  const [page,setPage] = useState(0)

  const url:string = "https://www.pgsoft.com/"

  useEffect(()=>{
    document.title = "Cassino Online Demo"
  },[])

  useEffect(() => {
    fetch(`${api_url}/get-games?page=${page}`)
    .then(response => response.json())
    .then(response => {
      //console.log(response)
      //setGames(prevGames => [...prevGames, ...response['games']]);
      setGames(response['games'])
    })
    .catch(error => {
      console.error('Error fetching games:', error);
    });
  }, []); //adicionando games

  function getGames() {
    let _page : number = page + 1
    setPage(_page)
    fetch(`${api_url}/get-games?page=${_page}`)
      .then(response => response.json())
      .then(response => {
        //console.log(response)
        setGames(prevGames => [...prevGames, ...response['games']]);
      
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }

  function search_games(){

    let input : any = document.getElementById('search_games')
    console.log(input.value)
    fetch(`${api_url}/search-games?game=${input.value}`)
    .then(response=>response.json())
    .then(response=>{
        //console.log(response)
      
        setGames(response['games'])
        setPage(0)
        
    })
    

  }


  return (
    <main>

      <Header />
      <div className="flex justify-center mt-4">
      <input
        type="text"
        placeholder="Pesquise Jogos Aqui"
        id="search_games"
        className="input input-bordered input-info" />
       <button className="btn btn-outline btn-accent" style={{marginLeft:"1%"}} onClick={search_games}>Pesquisar</button>
      </div>


      <div id="cards" >
      {games.map((game,index)=>(
          <Card  image={url+game.image} title={game.title} key={index} slug={game.slug}/>
      ))}
    </div>

    <div className="flex justify-center mt-4">
      <button id="more_games" className="btn btn-outline btn-accent" onClick={getGames}>Carregar Mais</button>
   
      </div>

    </main>
  );
}
