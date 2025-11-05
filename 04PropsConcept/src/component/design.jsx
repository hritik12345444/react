import React from "react";
import './designcard.css'

function Designcard({myname="everyOne"}){  // myname props hai yeha aur everOne defautl value diye hai
    return (
        <div>
        <h2>Hello {myname} , I am Hritik singh</h2>
        <p>Lorem ipsum dolor sit amet. </p>
        </div>
    )
}


export default Designcard