import React, { useState } from 'react';
import { ReactComponent as LogoutIcon } from '../../../../../assets/icons/logout.svg';
import './UserInfo.css';

type props = {
    isOpen: boolean;
    email: string;
    logout: () => void;
}

export const UserInfo = ({ isOpen, email, logout }: props) => {
    return (
        <div 
            className="user-info-modal"
            style={ isOpen ? 
                {
                    opacity: '1',
                    pointerEvents: 'all'
                }
                : {
                    opacity: '0',
                    pointerEvents: 'none'
                } }
        >
            <h3>Logged In As</h3>
            <span> mathiramilo2290@gmail.com </span>
            <button onClick={ () => logout() } className="logout-btn">
                <span>Logout</span>
                <LogoutIcon className="logout-icon" />
            </button>
        </div>
    )
}
