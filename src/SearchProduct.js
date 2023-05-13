
import react, {useState,  useEffect} from 'react';

import {Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button} from '@mui/material';

import { fetchAllProduct, fetchProductById } from './API';

export default function SearchProduct() {
    const [product, setProduct] = useState([]);
    const [searchId, setSearchId] = useState('');
   
    return (
        <Container style={{marginTop: "50px"}}>
            <TextField label="Search By Product Name" value={searchId} 
                onChange={(e)=> {
                    setSearchId(e.target.value)
                }}
            />

            <Button variant="contained" color="success" onClick={(e) => {
                fetchProductById(searchId).then((resp) => {
                    console.log(resp.data);
                    setProduct(resp.data)
                    console.log(product)
                }).catch(error => {
                    console.log(error)

                })
            }}>Search</Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>

                    <TableCell>Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    { product !== [] ? product.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
        
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                    </TableRow>
                    )) : null }

                </TableBody>
            </Table>
        </Container>
    )
}
