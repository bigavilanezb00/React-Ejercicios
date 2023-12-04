import React from "react";
import '../assets/Testimonio.css';

const Testimonio  = (props) => {
    return (
        <div className="testimonio">
            <img src={require(`../assets/img/${props.imatge}.jpeg`)} alt={`${props.nom} - ${props.esport}`}/>
            <h2 className="header">{props.nom} - {props.edad} anys</h2>
            <p>{props.esport}</p>
            <p>{props.institut}</p>
            <p>{props.texte}</p>
        </div>
    )
};


export default Testimonio;