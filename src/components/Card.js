import React from 'react';
import '../card.css'

export default function Card(props) {
    return (
        <div className='card'>
        <img src={`https://robohash.org/${props.id}?200x200`} alt='robots'/>
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
        </div>
    )
}
