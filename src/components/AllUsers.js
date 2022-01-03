import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/api'

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
    console.log(users)
    

    return (
        <Table className='table'>
            <TableHead className='thead'>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
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
                      </TableRow>  
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers
