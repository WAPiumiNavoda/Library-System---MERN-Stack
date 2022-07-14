import { Button } from '@mui/material';
import React from 'react'
import './Book.css'


const Book = (props) => {
    const {name,author,description,price,image} = props.book;
  return  <div className='card'>
       <img style={{height:"300px"}} src={image} alt={name}/>
       <article>By {author}</article>
       <h3>{name}</h3>
       <p>{description}</p>
       <h2>Rs {price}</h2>
       <Button sx={{mt:'auto'}} variant="contained" color="success">Update</Button>
       <Button sx={{mt:'6px'}} variant="contained" color="error">
  Error
</Button>
       
    </div>
  
}

export default Book