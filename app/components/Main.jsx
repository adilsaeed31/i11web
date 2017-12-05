import React from 'react';
import Header from 'Header';
import Footer from 'Footer';
import Nav from 'Nav';
import Listing from 'Listing';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Nav/>
                <Listing/>
                <Footer/>
            </div>
        );
    }
}

module.exports = Main;
