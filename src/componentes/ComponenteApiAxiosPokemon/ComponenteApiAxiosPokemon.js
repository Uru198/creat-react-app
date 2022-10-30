import React, {useState, useEffect} from "react";
import axios from "axios";

const ComponenteApiAxiosPokemon = () => {

    const [responseData, setResponseData] = useState([]);

    const [Clicks, setClicks] = useState(0);

    useEffect( () =>{
        //LLamada ala api con Axios
        if (Clicks == 0) {
            return 
        }
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(renponse => renponse.data)
            .then(data => {
                let poke = data.results;
                setResponseData(poke);
                console.log(poke);

            })

            }, [Clicks])


            /*
            
            GET: -> llamar registro 

            POST: -> Es para nuevos regristros
            axios.post (URL, {OBJETO})
                .then (res => ACCIONES)

            PUT: -> Actualizar Registro
            axios.put(URL, {OBJETO})
                .then (res => ACCIONES)
            
            DELETE: -> Borra Registro
             axios.delete(URL)
                .then(res => ACCIONES)

            */

         

    const hizoClick = () => {
        setClicks(Clicks+1);
    }

    return (

        <div>
            Haz Pedido los pokemones por Api-Axios {Clicks} Veces
            <button className="btn btn-success" onClick={hizoClick}> Fetch Pokemon</button>
            {responseData.map(item=>
            <li>{item.name}</li> )}   
        </div>
    )

}

export default ComponenteApiAxiosPokemon;