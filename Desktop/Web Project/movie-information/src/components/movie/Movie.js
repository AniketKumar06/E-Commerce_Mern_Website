import React from 'react'
import './movie.css';
const Movie = (props) => {
    return (
        <>
            <div className='card'>
                <div className='sub-card'>
                    <img className="image" src={props.image} alt='' />
                    <h1 className="topic">{props.title}</h1>
                    <p className='subtitle'>Year: {props.year}</p>
                </div>

            </div>
        </>
    )
}

export default Movie;