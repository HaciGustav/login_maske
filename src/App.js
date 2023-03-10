import { createTheme, ThemeProvider } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { useState } from 'react';
import './App.css';

import AppRouter from './router/AppRouter';

function App() {
    const [darkMode, setDarkMode] = useState('light');
    const theme = createTheme({
        palette: {
            mode: `${darkMode}`,
            primary: {
                main: blueGrey[600],
            },
        },
    });

    const handleDarkModeSwitch = () => {
        setDarkMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <AppRouter
                darkMode={darkMode}
                handleDarkModeSwitch={handleDarkModeSwitch}
            />
        </ThemeProvider>
    );
}

export default App;
