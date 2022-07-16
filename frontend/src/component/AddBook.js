import React, { useState } from 'react'
import { FormLabel,TextField,Box, Button, Checkbox,FormControlLabel} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddBook() {
  
  const history = useNavigate();
  const sendRequest = async()=>{
    await axios.post("http://localhost:8070/books",{
      name: String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data);
}

  const [inputs,setinputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    available:'false',
    image:''
});
  
const [checked,setChecked] = useState(false);
  const handleChange = (e)=>{
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('/books'))
  }

  

  return (
 
    <form onSubmit={handleSubmit}>
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
      control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} 
      label="Availability"/>

      <Button variant='contained' type='submit'>AddBook</Button>

      </Box>
    </form>
  )
}

export default AddBook