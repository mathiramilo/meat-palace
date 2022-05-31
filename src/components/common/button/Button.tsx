import React from 'react';
import './Button.css';

type props = {
    children: JSX.Element | JSX.Element[];
}

export const Button = ({ children }: props) => {
    return (
        <a href="#" className="button">{ children }</a>
    )
}
