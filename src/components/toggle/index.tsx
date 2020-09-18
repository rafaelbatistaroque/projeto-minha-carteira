import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './style';

const ToggleTheme: React.FC = () => {
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => { }} />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
};

export default ToggleTheme;