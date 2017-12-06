import React from 'react';
import LoginBox from 'LoginBox';
import SearchBox from 'SearchBox';

class Header extends React.Component {
    render() {
        return (

            <div className="grid-x custom-background header-height">
                <div className="cell small-2 text-center">
                    <img className="mt2" src="./assets/images/i11-logo.png" width={75}/>
                </div>
                <div className="cell small-1 small-custom-width hide-for-small-only">
                    <img className="mt9 mt10-media" src="./assets/images/banner_apple.png" width={120} />
                </div>
                <div className="cell small-1 ml5-media small-custom-width hide-for-small-only">
                    <img className="mt9 mt10-media" src="./assets/images/banner_google.png" width={120} />
                </div>
                <div className="cell small-1 small-custom-width hide-banner hide-for-medium-only hide-for-small-only">
                    <img className="mt9" src="./assets/images/banner_windows.png" width={120} />
                </div>
                <div className="cell small-1 small-custom-width hide-banner hide-for-medium-only hide-for-small-only">
                    <img className="mt9" src="./assets/images/banner_amazon.png" width={120} />
                </div>
                <div className="cell small-3">
                    <SearchBox/>
                </div>
                <div className="cell small-3">
                    <LoginBox/>
                </div>
            </div>

        );
    }
}

module.exports = Header;
