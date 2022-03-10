import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

// const useStyle = makeStyles({
//     header:{
//         background:'#111111'
//     }
// })

const Navbar = () => {
    // const classes = useStyle();
    return (
       <AppBar position='static'>
            <Toolbar >
                <NavLink to="/" className='tabs'> <h3>TayfurAcademy</h3></NavLink>
                <NavLink to="/all" className='tabs'>All Users</NavLink>
                <NavLink to="/add" className='tabs'>Add User</NavLink>
            </Toolbar>
       </AppBar>
    )
}

export default Navbar
