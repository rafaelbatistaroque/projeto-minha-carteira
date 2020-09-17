import React from 'react';
import { GridLayout } from "./style";

import MainHeader from '../main-header';
import Aside from '../aside';
import Content from '../content/content';


const Layout: React.FC = () => {
    return (
        <GridLayout>
            <MainHeader />
            <Aside />
            <Content />
        </GridLayout>
    );
};

export default Layout;