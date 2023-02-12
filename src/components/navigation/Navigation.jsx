import { Avatar, List } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import {
    DrawerHeader,
    FlexContainer,
    ListItem,
    LiText,
    Navbar,
    NavDrawer,
} from './Navigation.style';
import { Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmailIcon from '@mui/icons-material/Email';
import logo_a from '../../assets/logo-a.png';

const Navigation = () => {
    const listArr = [
        { text: 'Home', icon: <HomeIcon fontSize="large" /> },
        { text: 'Contact ', icon: <EmailIcon fontSize="large" /> },
        { text: 'About', icon: <HelpOutlineIcon fontSize="large" /> },
        { text: 'ort', icon: <CloseIcon fontSize="large" /> },
        { text: 'straße', icon: <CloseIcon fontSize="large" /> },
    ];

    const [open, setOpen] = useState(true);
    return (
        <FlexContainer>
            <Navbar open={open}>
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

                <Avatar
                    src={logo_a}
                    sx={{
                        width: '3.2rem',
                        height: '3.2rem',
                        marginInline: '0.5rem',
                        // backgroundColor: '#00c3ffac',
                        animation: 'logoRotation 3s linear infinite',
                        outline: '1px solid #7a747497',
                        outlineOffset: '2px',
                    }}
                />
            </Navbar>
            <NavDrawer open={open}>
                <DrawerHeader open={open}>
                    <CloseIcon onClick={() => setOpen(!open)} />
                </DrawerHeader>
                <List>
                    {listArr.map((item) => (
                        <ListItem key={item.text}>
                            {item.icon}

                            <LiText open={open}>{item.text}</LiText>
                        </ListItem>
                    ))}
                </List>
            </NavDrawer>
            <Box
                component="main"
                sx={{
                    border: '1px solid red',
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
    );
};

export default Navigation;
