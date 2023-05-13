import react, {useState,  useEffect} from 'react';

import {Container, Typography, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';

import { fetchAllProduct } from './API';

export default function ViewProduct() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchAllProduct().then((data) => {
            setProduct(data.data);
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <Container>
            <Typography>View Product</Typography>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>

                    <TableCell>Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {product.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
        
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                    </TableRow>
                    ))}

                </TableBody>
            </Table>
        </Container>
    )
}
