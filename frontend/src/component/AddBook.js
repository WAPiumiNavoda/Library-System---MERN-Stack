import React, { useState } from 'react'
import { FormLabel,TextField,Box, Button, Checkbox,FormControlLabel} from '@mui/material';


function AddBook() {

  const [inputs,setinputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    available:'false',
    image:''
});

  const handleChange = (e)=>{
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
 
    <form>
        <center><h1>Add Books Details</h1></center>  
      <Box display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      maxWidth={700}
      alignContent={'center'}
      marginLeft={'auto'}
      marginRight='auto'
      marginTop="40px">

      <FormLabel>Name</FormLabel>
      <TextField 
      value={inputs.name} 
      onChange={handleChange} 
      margin="normal" 
      fullWidth variant="outlined" 
      name="name"/>

      <FormLabel>Author</FormLabel>
      <TextField 
      value={inputs.author} 
      onChange={handleChange} 
      margin="normal" 
      fullWidth variant="outlined" 
      name="author"/>

      <FormLabel>Description</FormLabel>
      <TextField 
      value={inputs.description} 
      onChange={handleChange} 
      margin="normal" 
      fullWidth variant="outlined" 
      name="description"/>

      <FormLabel>Price</FormLabel>
      <TextField
      value={inputs.price} 
      onChange={handleChange}  
      type={'number'} 
      margin="normal" 
      fullWidth variant="outlined" 
      name="price"/>

      <FormLabel>Image URL</FormLabel>
      <TextField
      value={inputs.image} 
      onChange={handleChange}  
      margin="normal" 
      fullWidth variant="outlined" 
      name="image"/>
      
      <FormControlLabel
      control={<Checkbox checked={inputs.available}/>} 
      label="Availability"/>

      <Button variant='contained' type='submit'>AddBook</Button>

      </Box>
    </form>
  )
}

export default AddBook