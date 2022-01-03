import React from 'react'
import notfound from '../assets/NotFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notfound} className='notfound' alt="not found" />
        </div>
    )
}

export default NotFound
