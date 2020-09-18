import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';
import ToggleTheme from '../toggle';
import { Container, Profile, Welcome, UserName } from "./style";

const MainHeader: React.FC = () => {
    let emoji = useMemo(() => {
        let index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    return (
        <Container>
            <ToggleTheme />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Rafael Batista</UserName>
            </Profile>
        </Container>
    );
};

export default MainHeader;