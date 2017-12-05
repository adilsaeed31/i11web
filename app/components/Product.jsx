import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div className="cell">
                <div className="card">
                    <img src="https://placehold.it/300x300"/>
                    <div className="card-section">
                        <h4>This is a row of cards.</h4>
                        <p>This row of cards is embedded in an X-Y Block Grid.</p>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Product;
