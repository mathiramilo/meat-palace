import React from 'react';
// Import icons
import { ReactComponent as AwardIcon } from '../../assets/icons/award.svg';
import { ReactComponent as AddCartIcon } from '../../assets/icons/add-cart.svg';
// Import images
import provoloneCheesesImg from '../../assets/img/others/provolone.webp';
import sausagesImg from '../../assets/img/others/sausages.webp';
import breadsImg from '../../assets/img/others/breads.webp';
import aboutUsImg from '../../assets/img/others/aside.webp';
// Import components
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
// Import css
import './Home.css';


export const Home = () => {
    return (
        <>
            <div className="home">

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hs-greeting">
                        <h1>The best place to buy your meats</h1>
                        <a href="#" className="button hsg-search-meats-btn">Search Meats</a>    
                    </div>
                </section>

                {/* Bestsellers Section */}
                <section className="bestsellers-section">

                    <div className="bs-title">
                        <AwardIcon className="award-icon" />
                        <h2>Our Bestsellers</h2>
                    </div>
                    
                    {/* Bestselles Products Wrapper */}
                    <ItemListContainer greeting={"Bienvenido a Meat Palace (Aqui se mostraran nuestros productos bestsellers)!"} />

                    <a href="#" className="button bs-btn">View All Meats</a>

                </section>

                {/* Other Products Section */}
                <section className="other-products-section">

                    <div className="ops-title">
                        <AddCartIcon className="add-cart-home-icon" />
                        <h2>Other Products</h2>
                    </div>

                    {/* Other Products Column */}
                    <div className="ops-products">

                        {/* Other Product */}
                        <div className="op-item">
                            <img src={provoloneCheesesImg} alt="Provolone Cheese" />
                            <div className="op-item-info">
                                <h3>Provolone Cheeses</h3>
                                <span>From US$ 12.80/Kg</span>
                            </div>
                        </div> 

                        {/* Other Product */}
                        <div className="op-item">
                            <img src={sausagesImg} alt="Sausages" />
                            <div className="op-item-info">
                                <h3>Sausages</h3>
                                <span>From US$ 8.90/Kg</span>
                            </div>
                        </div>  

                        {/* Other Product */}
                        <div className="op-item">
                            <img src={breadsImg} alt="Breads" />
                            <div className="op-item-info">
                                <h3>Breads</h3>
                                <span>From US$ 10.60/Kg</span>
                            </div>
                        </div>     

                    </div>

                    {/* View Other Products Button */}
                    <a href="#" className="button ops-btn">View Other Products</a>

                </section>

                {/* About Us Section */}
                <section className="about-us-section">
                    
                    <div className="aus-grid">
                        <img src={aboutUsImg} alt="Meats Aside" />

                        <div className="aus-info">
                            <h2>About Us</h2>
                            <p>Sed suscipit et ex eget sagittis. Phasellus a quam enim. Nullam ut suscipit metus. Aliquam porttitor porttitor congue. Cras commodo quam et nisl tempus scelerisque. Cras tempus mauris sed mauris sollicitudin sagittis. In vitae justo mi. Sed elementum luctus pulvinar.
                            </p>
                            <p>Donec elit ipsum, cursus at congue non, euismod ac turpis. Donec lacinia felis quis sem consectetur, at elementum justo aliquet. Pellentesque nulla ex, pulvinar ac dolor ac, tincidunt mollis leo. Morbi gravida, metus vel feugiat luctus, elit ex tempor lacus, id consequat orci urna quis orci. In sagittis orci est, in porttitor mi elementum et. Morbi at lorem at nibh gravida malesuada vel sit amet leo. Pellentesque in massa congue, bibendum lacus a, gravida diam. Maecenas scelerisque mollis finibus.</p>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}
