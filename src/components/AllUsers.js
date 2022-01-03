import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/api'
import { Link } from 'react-router-dom'

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async()=>{
       const response = await getUsers();
       console.log(response.data);
       setUsers(response.data)
    }

    

    return (
        <Table className='table'>
            <TableHead className='thead'>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user =>(
                      <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant='contained' color="secondary">Delete</Button>
                            </TableCell>
                      </TableRow>  
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers
