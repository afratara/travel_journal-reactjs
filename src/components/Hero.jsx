import React from "react";
import '../style.css';
import video from '../assets/video.mp4'

export default function Hero(){
    return(
        <>
            <div className="hero-el" id="hero-el">
                <h1>My Travel Journal</h1>
                <video width="50%" height="100%"  loop autoplay muted playsinline>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <p>“Travel makes one modest. You see what a tiny place you occupy in the world.” -Gustav Flaubert</p>
            </div>
           
        </>
    )
}