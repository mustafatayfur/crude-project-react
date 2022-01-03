import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addUser } from '../service/api'

const initialValues={
    name:'',
    username:'',
    email:'',
    phone: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValues)
    const {name, username, email, phone} = user
    const { id } = useParams()

    useEffect(() => {
       loadUserData()
    })

    const loadUserData= () => {
        
    }
 

    const onValueChange= (e)=> {
        console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }

    const addUserDetails = async() => {
        await addUser(user)
     
    }

    return (
        <FormGroup className='container'>
            <h3>Add User</h3>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='name'value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='phone' value={phone}/>
            </FormControl>
            <Button onClick={addUserDetails} variant='contained' color="primary">Edit User</Button>
        </FormGroup>
    )
}

export default EditUser
