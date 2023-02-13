import styled from 'styled-components';
import React from 'react';

export const LogoWrap = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    width: 81px;
    position: relative;
    background-color: white;
    padding: 8px;
    padding-right: 10px;
    justify-content: end;
    cursor: pointer;
    border-radius: 2px;
`;
export const Square = styled.div`
    width: 2.3rem;
    height: 2.3rem;
    border: 1px solid black;
    position: absolute;
    z-index: 0;
`;
export const TextWrap = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    position: absolute;
    transform: translateX(-2px);
    z-index: 1;
    left: 1rem;
`;
export const TextStrong = styled.span`
    font-weight: 700;
    font-size: 0.65rem;
    font-family: Arial, Helvetica, sans-serif;
    /* border: 1px solid red; */
    color: black;
    letter-spacing: 1.5px;
`;
const TextNormal = styled.span`
    font-size: 0.65rem;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    letter-spacing: 1.5px;
`;
const Logo = () => {
    return (
        <LogoWrap>
            <TextWrap>
                <TextStrong>bau</TextStrong>
                <TextNormal>stein</TextNormal>
            </TextWrap>
            <Square />
        </LogoWrap>
    );
};

export default Logo;
