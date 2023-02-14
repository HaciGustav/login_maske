import { Avatar, Button, List, Paper, Typography } from '@mui/material';
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
import logo from '../../assets/Logo.jpg';
import Logo from '../Logo';
import { LoginBtn, RegisterBtn } from '../Buttons';

const Navigation = () => {
    const listArr = [
        {
            text: 'Home',
            icon: <HomeIcon fontSize="large" sx={{ color: '#000000a6' }} />,
        },

        {
            text: 'About',
            icon: (
                <HelpOutlineIcon fontSize="large" sx={{ color: '#000000a6' }} />
            ),
        },
        {
            text: 'Services',
            icon: <TuneIcon fontSize="large" sx={{ color: '#000000a6' }} />,
        },
        {
            text: 'Contact ',
            icon: <EmailIcon fontSize="large" sx={{ color: '#000000a6' }} />,
        },
    ];

    const [open, setOpen] = useState(true);
    return (
        <Paper>
            <FlexContainer>
                <Navbar open={open}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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

                        <Logo />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',

                            justifyContent: 'end',
                            width: '100%',
                            columnGap: '5px',
                        }}>
                        <LoginBtn />
                        <RegisterBtn />
                    </Box>
                </Navbar>
                <NavDrawer open={open}>
                    <DrawerHeader open={open}>
                        <CloseIcon onClick={() => setOpen(!open)} />
                    </DrawerHeader>
                    <List sx={{ paddingTop: '1rem' }}>
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
                        minWidth: open
                            ? 'calc(100% - 240px)'
                            : 'calc(100% - 4rem)',
                        minHeight: 'calc(100% - 4rem)',
                        marginLeft: open ? '240px' : '4rem',
                        marginTop: '4rem',
                        transition: '0.2s',
                        padding: '1rem',
                        overflow: 'auto',
                        justifyContent: 'center',
                    }}
                    onClick={() => setOpen(false)}>
                    <Outlet />
                </Box>
            </FlexContainer>
        </Paper>
    );
};

export default Navigation;
