import React, { useState } from 'react'
import logo2 from '../assets/logo2.png';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedICON from '@mui/icons-material/ShoppingCartRounded'

const Navbar = () => {
     const [openMenu, setOpenMenu] = useState(false)
     const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedICON/>
        },
        
     ]
   return(
     
     <nav>
        <div className="nav-logo-container">
            <img src={logo2} alt=''></img>
        </div>
        <div className="navbar-link-container">
            <a href="#">Home </a>
            <a href="#">About </a>
            <a href="#">Testimonials </a>
            <a href="#">Contact </a>
            <a href="#">
                <BsCart2 className='navbar-cart-icon'/>
            </a>
            <button className="pri-button">Book now</button>

        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/>
        </div>
        <drawer open={openMenu} onclose={()=> setOpenMenu(false)}
        anchor="right">
            <box sx={{width:250}}
            role="presentation"
            onclick={()=> setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}>
                <list>
                    {menuOptions.map((items) => (
                        <ListItem key={items.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {items.icon}
                                </ListItemIcon>
                                <ListItemText primary= {items.text}></ListItemText>
                            </ListItemButton>

                        </ListItem>
                    ))}
                </list>
            </box>
        </drawer>

   </nav>
   );

}

export default Navbar