import { Avatar, Container, Grid, Paper, Typography } from '@mui/material';
import { Formik } from 'formik';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react';
import LoginForm, { loginSchema } from '../components/LoginForm';
import image from '../assets/login.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <Paper>
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                    direction="row-reverse"
                    sx={{
                        height: '100vh',
                        p: 2,
                    }}>
                    <Grid item xs={12} mb={3}>
                        <Typography variant="h3" color="primary" align="center">
                            Unternehmen
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={10} md={6}>
                        <Avatar
                            sx={{
                                backgroundColor: 'primary',
                                m: 'auto',
                                width: 40,
                                height: 40,
                            }}>
                            <LockIcon size="30" />
                        </Avatar>
                        <Typography
                            variant="h4"
                            align="center"
                            mb={4}
                            color="primary">
                            Login
                        </Typography>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={loginSchema}
                            onSubmit={(values, actions) => {
                                handleLogin();
                                actions.resetForm();
                                actions.setSubmitting(false);
                            }}
                            component={(props) => (
                                <LoginForm {...props} />
                            )}></Formik>
                    </Grid>

                    <Grid item xs={10} sm={7} md={6}>
                        <Container>
                            <img src={image} alt="img" />
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Login;
