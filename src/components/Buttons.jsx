import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: #164685d1;
    padding: 0.5rem 1rem;
    height: 2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.1s;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;

    &:hover {
        border-bottom: 3px solid #460202d1;
        border-radius: 4px 4px 0 0;
        background-color: #08295590;
        color: #350000;
    }
    &:active {
        transform: scale(0.95);
    }
`;

export const LoginBtn = () => {
    return <Button>Login</Button>;
};
export const RegisterBtn = () => {
    return <Button>Register</Button>;
};
