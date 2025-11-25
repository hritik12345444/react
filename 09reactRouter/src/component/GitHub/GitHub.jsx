import React, { useEffect, useState } from 'react'


function GitHub() {

    const [data, setData] = useState([])
    useEffect(() =>{
        fetch("https://api.github.com/users/hritik12345444")
        .then(Response => Response.json())
        .then(data =>{
            setData(data)
        })
    })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub id: {data.id} 
    <img src= {data.avatar_url} alt="Git picture"  w={300} />
    Admin_location: {data.location}
    </div>
  )
}

export default GitHub