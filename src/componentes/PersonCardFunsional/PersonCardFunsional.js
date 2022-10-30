import React, {useState, useEffect} from "react";

const PersonCardFunsional = ({firstName, lastName, age, city, hairColor}) => {
    // props.firtsName, props.LastName, props.age, props.City

    //useState 
    //const [state, setState] = useState
    //({edocivil: "casado"})

    const [edocivil, setEdoCivil] = useState("Soltero");
    const [edad, setEdad] = useState(age);

    /* useEffect se ejecuta al montar y al actualizar algo en nuestro estado 
    El segundo parametro es una lista de todos los estados que queremos ecuchasr si dejamos la lista vacia,
    se ejecuta la funcion cuando se monta el componente
    */

    useEffect ( () =>{
        console.log("Se monto o hubo algun cambio")
    }, [])

    const cambiarEdoCivil = () => {
        if(edocivil === "Soltero"){
            setEdoCivil("Casado");
        } else {
            setEdoCivil("Soltero")
        }
    }

    const cumpleaños = () => {
        setEdad(edad+1)
    }

    return (
        <div className="card">
            <small>Card Funsional</small>
            <h4>{firstName} {lastName}</h4>
            <p>
                <b>Edad: </b>{edad}
            </p>
            <p>
                <b>Ciudad: </b>{city}
            </p>
            <p>
                <b>Estado civil: </b>{edocivil}
            </p>
            <button onClick={cambiarEdoCivil} className="btn btn-success">Cambiar Estado civil</button>
            <button className="btn btn-info" onClick={cumpleaños}>Boton de cumpleaños {firstName}</button>
        </div>
    )

}

export default PersonCardFunsional