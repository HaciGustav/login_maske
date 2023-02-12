import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    border: 1px solid black;
    position: relative;
    min-height: 100vh;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.5rem;
    position: absolute;
    top: 0;
    right: 0;
    width: ${(props) => (props.open ? 'calc(100% - 240px)' : '100%')};
    height: 4rem;
    z-index: 2;
    background-color: #065ac9;
    text-align: left;
    color: #fff;
    transition: all 0.2s linear;
`;

export const NavDrawer = styled.div`
    height: 100%;

    width: ${(props) => (props.open ? '240px' : '4rem')};
    border: 1px solid #61606068;
    position: absolute;
    bottom: 0;
    transition: all 0.2s linear;
`;
export const DrawerHeader = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding-inline: 0.5rem;
    position: relative;
    z-index: ${(props) => (props.open ? '1' : '-1')};
    border-bottom: 1px solid #61606068;
`;

export const ListItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 0.5rem 1rem;
`;
export const LiText = styled.p`
    opacity: ${(props) => (props.open ? 1 : 0)};
    display: ${(props) => (props.open ? 'block' : 'none')};
`;
export const Main = styled.main`
    margin-top: 4rem;
    margin-left: 4rem;
`;
