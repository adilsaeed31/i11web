import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="custom-background">
                <div className="grid-x">
                    <div className="grid-container fluid grid-container-nav-special">
                        <ul className="menu dropdown custom-color" data-dropdown-menu>
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
                            <li>
                                <a href="#">More <i className="fa fa-caret-down"></i></a>
                                <ul className="menu sub-menu-custom-color">
                                    <li><a href="#">Watches</a></li>
                                    <li><a href="#">Wallets & Bags</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Hobbies</a></li>
                                    <li><a href="#">Phone Upgrades</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Nav;
