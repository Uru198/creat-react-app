
import React, {useState, useEffect} from "react";

const ComponenteApi = () => {

    const [imagen, setImagen] = useState('');

    const [Clicks, setClicks] = useState(0);

    useEffect ( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson =>{
            let img = responseJson.message;
            setImagen(img);
        })
    }, [Clicks])

    const hizoClick = () => {
        setClicks(Clicks+1);
    }

    return (

        <div>
            <img src={imagen} className="img-fluid" alt="perrito"/>
            Haz Pedido un nuevo perrito {Clicks} Veces
            <button className="btn btn-primary" onClick={hizoClick}>Nuevo Perrito</button>
        </div>
    )


}

export default ComponenteApi;
