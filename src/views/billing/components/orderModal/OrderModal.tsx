import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Logo
import Logo from 'assets/img/logo/logo-white.png';
// Icons
import { ReactComponent as OrderReceivedIcon } from 'assets/icons/order-received.svg';
import { ReactComponent as FullnameIcon } from 'assets/icons/user.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as CountryIcon } from 'assets/icons/country.svg';
import { ReactComponent as CityIcon } from 'assets/icons/city.svg';
import { ReactComponent as AddressIcon } from 'assets/icons/address.svg';
import { ReactComponent as PostalIcon } from 'assets/icons/postal.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
// Interfaces
import { Product } from 'interfaces/product';
// Styles
import './OrderModal.css';

interface OrderData {
    name: string;
    lastname: string;
    country: string;
    city: string;
    direction: string;
    postalCode: string;
    phone: string;
}

type props = {
    data: OrderData;
    id: string;
    products: Product[];
    total: number;
    isOpen: boolean;
}

export const OrderModal = ({ data, id, products, total, isOpen }: props) => {

    // Data destructuring.
    const { name, lastname, country, city, direction, postalCode, phone } = data;

    // function that returns the fullname of the user.
    const getFullname = (first: string, last: string): string => `${first} ${last}`; 

    // i have to get the email form auth context.
    const email = 'example@example.com';

    return (
        <div
            style={
                isOpen ? {opacity: '1', pointerEvents: 'all'} : {}
            } 
            className="order-modal-container"
        >
            <div
                style={
                    isOpen ? {transform: 'translateY(0)'} : {}
                } 
                className="order-modal"
            >
                <div className="om-header">
                    <OrderReceivedIcon className="order-received-icon" />
                    <h3>Order Received</h3>
                </div>

                <div className="om-main">
                    <div className="omm-data">
                        <h6 className="ommd-title">Your Data</h6>
                        <div className="ommd-item-list">
                            <div className="ommd-item">
                                <FullnameIcon className="ommdi-icon" />
                                <span>Full Name: {getFullname(name, lastname)}</span>
                            </div>
                            <div className="ommd-item">
                                <EmailIcon className="ommdi-icon" />
                                <span>Email: {email}</span>
                            </div>
                            <div className="ommd-item">
                                <PhoneIcon className="ommdi-icon" />
                                <span>Phone: {phone}</span>
                            </div>
                            <div className="ommd-item">
                                <CountryIcon className="ommdi-icon" />
                                <span>Country: <span className="ommd-item-country">{country}</span></span>
                            </div>
                            <div className="ommd-item">
                                <CityIcon className="ommdi-icon" />
                                <span>City: {city}</span>
                            </div>
                            <div className="ommd-item">
                                <AddressIcon className="ommdi-icon" />
                                <span>Address: {direction}</span>
                            </div>
                            <div className="ommd-item">
                                <PostalIcon className="ommdi-icon" />
                                <span>Postal Code: {postalCode}</span>
                            </div>
                        </div>
                    </div>
                    <div className="omm-order">
                        <h6 className="ommo-title">Your Order</h6>
                        <div className="ommo-container">
                            {products.map((prod: Product) => (
                                <span className="ommo-item">{`${prod.cartAmount}x ${prod.name}`}</span>
                            ))}
                        </div>
                        <span className="ommo-total">Total: US$ {total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="om-finish">
                    <div className="omf-order-idd">
                        <span><strong>Order Id:</strong> {id}</span>
                        <button className="download-order-btn">
                            <DownloadIcon className="download-icon" />
                        </button>
                    </div>
                    <Link className="button omf-return-home-btn" to='/'>Return Home</Link>
                </div>

                <div className="om-logo">
                    <img src={Logo} alt="Meat Palace Logo" />
                </div>
            </div>
        </div>
    )
}
