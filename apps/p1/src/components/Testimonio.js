import React from "react";
import '../assets/Testimonio.css';

const Testimonio  = (props) => {
    return (
        <div class="Testimonio">
        <img/>
        <header class="Testimonio-header">
        <h2 >{props.nom} - {props.edad} anys</h2>
        <p>{props.esport}</p>
        <p>{props.institut}</p>
        <p>{props.texte}</p>
        </header>

    </div>
    )
};


export default Testimonio;