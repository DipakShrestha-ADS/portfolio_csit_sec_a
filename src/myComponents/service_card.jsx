import React from 'react'
import './service_card.css'

function ServiceCard(props){
    return(
        <>
        <div className='service-card'>
            <img src={props.url} alt={props.alt} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        </>
    )
}
export default ServiceCard