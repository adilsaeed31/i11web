import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="callout small primary">
                <div className="row column text-center center">
                    <ul className="menu">
                        <li><a href="#">OutLet</a></li>
                        <li><a href="#" className="active">Latest</a></li>
                        <li><a href="#">Deal Dash</a></li>
                        <li><a href="#">Recently Viewed</a></li>
                        <li><a href="#">Gadgets</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Tops</a></li>
                        <li><a href="#">Bottoms</a></li>
                        <li><a href="#">Underwear</a></li>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Wallets & Bags</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Hobbies</a></li>
                        <li><a href="#">Phone Upgrades</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = Nav;
