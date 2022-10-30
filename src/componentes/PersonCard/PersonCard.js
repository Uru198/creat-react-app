import React from "react";

class PersonCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            estadoCivil: "Soltero", 
            age: this.props.age
        }
    }

    hizoClick = () => alert("Hiciste click otra vez");

    hizoClickEn = (e, firstName) => alert("Hiciste click en "+firstName); //Reciviendo con parametros 



    functionTradicional() {
        alert("Esta es una alerta")
    }

    cambiarEstadoCivil = () => {
        if (this.state.estadoCivil === "Soltero"){
            this.setState({estadoCivil: "Casado"})
        }else {
            this.setState({estadoCivil: "Soltero"})
        }
    }

    cumpleaños = () => {
        this.setState({age:  this.state.age+1})
    }

    render() {
        const {firstName, lastName, city} = this.props;
        return (
            <div className="card">
                <h4>{firstName} {lastName}</h4>
                <p><b>Edad:</b> {this.state.age}</p>
                <p><b>Ciudad:</b> {city}</p>
                <p><b>Estado civil:</b>{this.state.estadoCivil}</p>
                <button className="btn btn-success" onClick={ this.cambiarEstadoCivil}>Cambiar estado civil</button>
                <button className="btn btn-warning" onClick={(e) => this.hizoClickEn(e, firstName)}>Haz Clic aqui</button>
                <button className="btn btn-info" onClick={this.cumpleaños}>Boton de cumpleaños {firstName}</button>
                
            </div>
        )
    }
}

export default PersonCard;
