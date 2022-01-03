import React from 'react'
import Youtube from '../assets/youtube.png'
import InstaTele from '../assets/InstaTele.jpeg'
import { Box } from '@material-ui/core'


const Home = () => {
    return (
        <Box className='images'>
            <img src={Youtube} className='image' alt="youtube"/>
            <img src={InstaTele} className='image' alt="instagram"/>
        </Box>
    )
}

export default Home;
