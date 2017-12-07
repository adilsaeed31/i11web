import React from 'react';
import Product from 'Product';

class Listing extends React.Component {
    render() {
        return (
            <div>

                <br/>
                <br/>

                <div className="grid-container grid-container-listing-special">
                    <div className="grid-x">
                        <div className="grid-x grid-padding-x small-up-2 medium-up-3 large-up-4">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Listing;
