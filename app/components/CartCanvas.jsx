import React from 'react';

class CartCanvas extends React.Component {
    render() {
        return (
            <div className="off-canvas position-right" id="offCanvasRightPush" data-off-canvas data-transition="push">
                <a href="#" className="button large expanded" style={{backgroundColor: '#FF1654'}}>Go To Cart</a>
                <div className="grid-x">
                <div className="cell small-4 ml5">
                    <img src="./assets/images/300x300.png"/>
                </div>
                <div className="cell small-6 ml5">
                    <span className="font-10">Product Name</span><br />
                    <span className="font-10">Description Product</span><br />
                    <span className="font-10">Price : {Math.floor(Math.random() * 40) + '.' + Math.floor(Math.random() * 50)}د.إ.AED </span>
                </div>

                </div>

                <a href="#" className="button large expanded" style={{backgroundColor: '#FF1654', position: 'absolute', bottom: '0px', marginBottom: '0px'}}>Go To Cart</a>
            </div>
        );
    }
}

module.exports = CartCanvas;
