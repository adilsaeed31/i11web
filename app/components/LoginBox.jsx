import React from 'react';

class LoginBox extends React.Component {
    render() {
        return (
            <div className="top-bar-right custom-background">
                <ul className="dropdown menu custom-background" data-dropdown-menu>
                    <li>
                        <a href="#" className="anchor-text">Hello, Muhammad Adil</a>
                        <ul className="menu vertical">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Rewards</a></li>
                            <li><a href="#">Mobile Apps</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Logout</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className="anchor-text">Alert</a></li>
                    <li><a href="#" className="anchor-text">Cart</a></li>
                </ul>
            </div>
        );
    }
}

module.exports = LoginBox;
