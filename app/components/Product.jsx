import React from 'react';
import ProductDetailBox from 'ProductDetailBox'

class Product extends React.Component {
    generatePrice() {
        return  Math.floor(Math.random() * 11) +
                Math.floor(Math.random() * 11) +
                '.' +
                Math.floor(Math.random() * 11) +
                Math.floor(Math.random() * 11);
    }
    close() {
        $('#product-detail').foundation('close')
    }
    render() {
        let image = this.props.data;

        return (
            <div className="cell">
                <div className="card custom-card" data-open="product-detail">
                    <img src={image} width={'250'} height={'250'}/>
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


                <div className="large reveal" id="product-detail" data-reveal data-close-on-esc>

                    <ProductDetailBox/>

                    <a onClick={this.close} className="close-button">
                        <span aria-hidden="true">&times;</span>
                    </a>

                </div>

            </div>
        );
    }
}

module.exports = Product;
