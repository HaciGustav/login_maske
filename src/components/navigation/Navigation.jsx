import { Avatar, Button, List, Paper } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import {
    DrawerHeader,
    FlexContainer,
    Line,
    ListItem,
    LiText,
    Navbar,
    NavDrawer,
} from './Navigation.style';
import { Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmailIcon from '@mui/icons-material/Email';
import TuneIcon from '@mui/icons-material/Tune';
import logo_a from '../../assets/logo-a.png';


const Navigation = () => {
    const listArr = [
        { text: 'Home', icon: <HomeIcon fontSize="large" /> },
       
        { text: 'About', icon: <HelpOutlineIcon fontSize="large" /> },
        { text: 'Services', icon: <TuneIcon fontSize="large" /> },
        { text: 'Contact ', icon: <EmailIcon fontSize="large" /> },
    ];

    const [open, setOpen] = useState(true);
    return (
        <Paper>
        <FlexContainer>
            <Navbar open={open} >
                {!open && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '4rem',
                            height: '100%',
                        }}>
                        <MenuIcon onClick={() => setOpen(!open)} />
                    </Box>
                )}
                <Box sx={{display:"flex", color:"white", justifyContent:"end", width:"100%"}}>
                    <Button variant="contained" >Login</Button>
                    <Button variant="contained">Register</Button>
                <Avatar
                    src={logo_a}
                    sx={{
                        width: '3.2rem',
                        height: '3.2rem',
                        marginInline: '1rem',
                        animation: 'logoRotation 3s linear infinite',
                        outline: '1px solid #7a747497',
                        outlineOffset: '2px',

                    }}
                />
                </Box>
            </Navbar>
            <NavDrawer open={open}>
                <DrawerHeader open={open}>
                    <CloseIcon onClick={() => setOpen(!open)} />
                </DrawerHeader>
                <List sx={{paddingTop:"1rem"}}>
                    {listArr.map((item) => (
                        <ListItem key={item.text}>
                            {item.icon}

                            <LiText open={open}>{item.text}</LiText>
                        </ListItem>
                    ))}
                </List>
                <Line />
            </NavDrawer>
            <Box
                component="main"
                sx={{
                    
                    display: 'flex',
                    width: open ? 'calc(100% - 240px)' : 'calc(100% - 2rem)',
                    minHeight: 'calc(100% - 4rem)',
                    marginLeft: open ? '240px' : '4rem',
                    marginTop: '4rem',
                    transition: '0.2s',
                    padding: '1rem',
                    overflow:"auto"
                }}>
                <Outlet />
            </Box>
        </FlexContainer>
        </Paper>
    );
};

export default Navigation;
