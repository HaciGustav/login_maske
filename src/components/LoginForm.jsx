import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Bitte gültige E-mail Adresse eingeben')
        .required('Email ist Pflichtfeld!'),
    password: Yup.string()
        .required('Passwort ist Pflichtfeld!')
        .min(8, 'Passwort sollte mindestens 8 Zeichen haben!')
        .max(16, 'Passwort sollte maximal 8 Zeichen haben!')
        .matches(/\d+/, 'Passwort sollte eine Zahl enthalten!')
        .matches(/[a-z]+/, 'Passwort sollte eine Kleinbuchstabe enthalten!')
        .matches(/[A-Z]+/, 'Passwort sollte eine Großbuchstabe enthalten!')
        .matches(
            /[!,?{}><%&$#£+-.]+/,
            ' Passwort sollte eine Sonderzeichen enthalten!'
        ),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
    console.log(values);

    return (
        <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email}
                    error={touched.email && Boolean(errors.email)}
                />
                <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password}
                    error={touched.password && Boolean(errors.password)}
                />
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </Box>
        </Form>
    );
};

export default LoginForm;
