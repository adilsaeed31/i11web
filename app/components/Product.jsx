import React from 'react';

class Product extends React.Component {
    generatePrice() {
        return  Math.floor(Math.random() * 11) +
                Math.floor(Math.random() * 11) +
                '.' +
                Math.floor(Math.random() * 11) +
                Math.floor(Math.random() * 11);
    }
    render() {
        return (
            <div className="cell">
                <div className="card custom-card">
                    <img src="./assets/images/300x300.png"/>
                    <div>
                        <strong>
                            {this.generatePrice()}
                        </strong>
                        <span className="font-10">د.إ.AED</span>
                        &nbsp;&nbsp;
                        <span className="font-9 grey-color">
                        <strike>
                            {this.generatePrice()}
                            <span className="font-10">د.إ.AED</span>
                        </strike>
                        </span>
                        <p className="font-9 grey-color">{Math.floor(Math.random() * 400) + Math.floor(Math.random() * 500)}+ bought this</p>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Product;
