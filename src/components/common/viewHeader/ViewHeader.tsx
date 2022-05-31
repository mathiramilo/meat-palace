import React from 'react';
// Import css
import './ViewHeader.css';

type props = {
    title: string;
}

export const ViewHeader = ({ title }: props) => {
    return (
        <div className="view-header-wrapper">
            <div className="vhw-line"></div>
            <h1> {title} </h1>
            <div className="vhw-line"></div>
        </div>
    )
}
