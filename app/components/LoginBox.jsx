import React from 'react';

class LoginBox extends React.Component {
    render() {
        return (
            <div className="top-bar-right custom-background custom-loginbox">
                <ul className="dropdown menu custom-background" data-dropdown-menu>
                    <li className="mt-lb">

                        <a href="#" className="anchor-text">
                            <img className="mr5" src="./assets/images/facephoto.jpeg"/>
                            <i className="mr2 fa fa-caret-down"></i> Hello, Muhammad Adil
                        </a>

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
                    <li className="mt7">
                        <a href="#" className="anchor-text">
                        <i className="fa fa-bell"></i>
                    </a>
                    </li>
                    <li className="mt7">
                        <a data-toggle="offCanvasRightPush" href="#" className="anchor-text">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

module.exports = LoginBox;
