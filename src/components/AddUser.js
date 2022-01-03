import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React from 'react'

const AddUser = () => {
    return (
        <FormGroup className='container'>
            <h3>Add User</h3>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input/>
            </FormControl>
            <Button>Add User</Button>
        </FormGroup>
    )
}

export default AddUser
