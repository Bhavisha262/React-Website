import React from 'react'
import "./Bottom.scss"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Bottom = () => {
    const handleCall = () =>{
      const number = '8200913637'
      window.location.href=`tel:${number}`
    }
    const [value, setValue] = React.useState(0);
  return (
    <div className="bottom">
    <Box sx={{ width: 1200 }}>
      <BottomNavigation
      sx={{ display :"flex" , justifyContent:"space-around", alignItems:"center" , backgroundColor:"lightpink", color:'floralwhite', height:'40px' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link><BottomNavigationAction label="Home" icon={<HomeIcon />}/></Link>
        <BottomNavigationAction onClick={handleCall} label="Call" icon={<CallIcon/>} />
        <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
    </div>
  )
}

export default Bottom