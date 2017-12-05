import React from 'react';
import LoginBox from 'LoginBox';

class Header extends React.Component {
    render() {
        return (
            <div className="top-bar custom-background">
                <div className="top-bar-left custom-background">
                    <ul className="menu custom-background">
                        <li className="menu-text">Awok Marketplace</li>
                    </ul>
                </div>
                <div className="top-bar-right custom-background">
                    <ul className="menu custom-background">
                        <li><button type="button" className="button">Search</button></li>
                        <li><input type="search" placeholder="Search"/></li>
                    </ul>
                </div>
                <LoginBox/>
            </div>
        );
    }
}

module.exports = Header;
