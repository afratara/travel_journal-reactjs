import React from "react";
import '../style.css';
import icon from '../assets/placeholder.png'


export default function Content(props){
    return(
        <>
        <div className="content-el">
            <img src={props.img} className="content-img" />
            <div>
            <div className="location-el">
                <img src={icon} alt="" className="icon-el" />
                <p>{props.location}</p>
                <a href={props.locationDetails}>View location here</a>
            </div>
            <br />
            <h2>{props.heading}</h2><br />
            <p>{props.description}</p><br />
            <hr/>
            </div>
        </div>
        
        </>
    )
}