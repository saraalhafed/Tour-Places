import React from 'react'
import "./Main.scss";

//here we use destructuring obj item ,item={title,image,desc}than we can use them directly
export default function Card({title,image,desc}) {
  return (
    
        <div className='card'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='wrapper'>
               <img src={image} alt={title} />
            </div>
            <div className='card-over'>
                <p>{desc}</p>
            </div>

        </div>

  )
}
