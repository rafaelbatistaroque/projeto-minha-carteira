import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${x => x.theme.colors.primary};
    color: ${x => x.theme.colors.white};
    grid-area: content;
`;