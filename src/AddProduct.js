import react,{useState} from 'react';

import {Container, Typography, TextField, Button, Grid} from '@mui/material';
import {saveItem} from './API'

export default function AddProduct() {


    const [item, setItem] = useState({
        name: '',
        description: '',
    });
    return (
        <Container>
            <Typography>Add Product</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField id="outlined-basic" variant="outlined" 
                        label="Product Name" 
                        value={item.name}
                        onChange={(e) => {
                            setItem({...item, name: e.target.value})
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}><TextField id="outlined-basic" label="Description" variant="outlined" multiline={true} 
                onChange={(e) => {
                    setItem({...item, description: e.target.value})
                }}
                value={item.description}
                maxRows={4}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                <Button variant="contained" color="success" onClick={(e) => {
                    saveItem(item).then(resp => {
                        console.log(resp.data);
                        setItem({name: '', description: ''})

                    }).catch(err => {
                       console.log(err) 
                    })
                }}>
                    Save
                    </Button>
                    <Button variant="contained" color="error">
                    cancel
                    </Button>
                </Grid>
            </Grid>
       
        </Container>
    )
}
