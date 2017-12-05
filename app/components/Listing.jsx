import React from 'react';
import Product from 'Product';

class Listing extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <div className="grid-x grid-padding-x small-up-2 medium-up-3 large-up-4">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="grid-x grid-padding-x small-up-2 medium-up-3 large-up-4">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        );
    }
}

module.exports = Listing;
