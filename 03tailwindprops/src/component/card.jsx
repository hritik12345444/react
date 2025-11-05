import React from 'react'
import './card.css'

function Card({ username="Defautl - value", btnText = "Default - vlaue" }) {    // isme jo argument hai wo props hai unhe curley braces me likha jata hai 
    return (
        <div>
            <img 
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="AirMax Pro"
            />

            <div>
                <button className="text-lg">{username}</button>
                <button>{btnText}</button>
            </div>
        </div>
    )
}

export default Card