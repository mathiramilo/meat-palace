import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';
import './UserInfo.css';

type props = {
    isOpen: boolean;
    email: string;
    logout: () => void;
    closeUserInfo: () => void;
}

export const UserInfo = ({ isOpen, email, logout, closeUserInfo }: props) => {
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
            <span> {email} </span>
            <button onClick={ () => logout() } className="logout-btn">
                <span>Logout</span>
                <LogoutIcon className="logout-icon" />
            </button>
        </div>
    )
}
