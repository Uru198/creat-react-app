import React, {useState, useEffect} from "react";
import axios from "axios";

const ComponenteAxios = () => {

    const [imagen, setImagen] = useState('');

    const [Clicks, setClicks] = useState(0);

    useEffect( () =>{
        //LLamada ala api con Axios
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(renponse => renponse.data)
            .then(data => {
                let img = data.message;
                setImagen(img);
            })


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


    }, [Clicks])

    const hizoClick = () => {
        setClicks(Clicks+1);
    }

    return (

        <div>
            <img src={imagen} className="img-fluid" alt="perrito"/>
            Haz Pedido un nuevo perrito {Clicks} Veces
            <button className="btn btn-warning" onClick={hizoClick}>Nuevo Perrito</button>
        </div>
    )

}

export default ComponenteAxios;