
import React, {useState, useEffect} from "react";

const ComponenteApiPokemon = () => {

    const [responseData, setResponseData] = useState([]);

    const [Clicks, setClicks] = useState(0);

    useEffect ( () => {
        if (Clicks == 0) {
            return 
        }
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response => response.json())
        .then(responseJson =>{
            let poke = responseJson.results;
            setResponseData(poke);
            console.log(poke);
        })
    }, [Clicks])

    const hizoClick = () => {
        setClicks(Clicks+1);
    }

    return (

        <div>
            Haz Pedido los pokemones por Api  {Clicks} Veces
            <button className="btn btn-success" onClick={hizoClick}> Fetch Pokemon</button>
            {responseData.map(item=>
            <li>{item.name}</li> )}   
        </div>
    )


}

export default ComponenteApiPokemon;
