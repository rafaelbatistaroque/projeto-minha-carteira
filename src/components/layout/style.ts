import styled from 'styled-components';

export const GridLayout = styled.div`
    display:grid;
    height: 100vh;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 'aside mainheader'
                         'aside content'

`;