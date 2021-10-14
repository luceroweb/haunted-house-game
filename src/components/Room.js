import React from 'react'

function Room({name,description,image}) {
    
    return (
        <div>
            <h1>{name}</h1>

            <div style={{width:'auto', height:"280px",backgroundColor:'black',alignItems:'center',margin:'40px'}}>
            <img src={image} alt={name} />
            </div>
            
            <h2>{description}</h2>

            

            <button  style={{width:'20%', 
            height:"80px",
            backgroundColor:'grey',
            alignItems:'center',
            margin:'30px',
            fontSize:'20px',
            borderRadius:'10px'
            }}>Back to Hallway</button>
            

        </div>
    )
}

export default Room
