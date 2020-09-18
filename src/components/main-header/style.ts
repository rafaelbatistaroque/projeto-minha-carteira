import styled from 'styled-components';

export const Container = styled.div`
    color: ${x => x.theme.colors.white};
    background-color: ${x => x.theme.colors.secundary};
    grid-area: mainheader;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    border-bottom: 1px solid ${x => x.theme.colors.gray};
`;

export const Welcome = styled.h3`
    color: ${x => x.theme.colors.white};
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    color: ${x => x.theme.colors.white};
`;

export const UserName = styled.span`
    color: ${x => x.theme.colors.white};
`;