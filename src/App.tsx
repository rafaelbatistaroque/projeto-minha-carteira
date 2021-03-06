import React from 'react';
import GlobalStyles from './styles/global';
import { ThemeProvider } from "styled-components";
import Layout from './components/layout';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>

    );
};

export default App;
