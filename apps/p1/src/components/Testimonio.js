import React from "react";
import '../assets/Testimonio.css';
import alexia from '../assets/img/alexia.jpeg'

const Testimonio  = (props) => {
    return (
        <div className="testimonio">
            <div className="testimonioA">
            <img src={alexia} className="alexiaImg" alt="alexia"/>
            </div>
            <div className="testimonioB">
                <h2 className="header">{props.nom} - {props.edad} anys</h2>
                <p>{props.esport}</p>
                <p>{props.institut}</p>
                <p>{props.texte}</p>
            </div>
        </div>
    )
};


export default Testimonio;