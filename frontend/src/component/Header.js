import React, { useState } from 'react'
import { AppBar, Tab,Tabs, Toolbar, Typography} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Header() {
   const [value,setValue] = useState()   

  return (
    <div>
      <AppBar position='sticky'>
            <Toolbar>
            <Typography>
                <AutoStoriesIcon/> Book Store
            </Typography>
            <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab label='Home'/>
                <Tab label='Add Book'/>
                <Tab label='Books'/>
                <Tab label='About Us'/>
            </Tabs>
            </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header