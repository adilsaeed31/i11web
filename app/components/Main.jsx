import React from 'react';
import Header from 'Header';
import Footer from 'Footer';
import Nav from 'Nav';
import Listing from 'Listing';
import SupportBox from 'SupportBox'
import CartCanvas from 'CartCanvas';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="grid-container full">

                <Header/>

                <Nav/>

                <SupportBox/>

                <Listing/>

                <CartCanvas/>

                <Footer/>

            </div>
        );
    }
}

module.exports = Main;
