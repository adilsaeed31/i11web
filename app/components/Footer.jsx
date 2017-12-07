import React from 'react';

class Footer extends React.Component {
    facebookLikeButton() {
        return (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=279402942179949';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    componentDidMount(){
        this.facebookLikeButton();
    }
    render() {
        return (
            <div className="grid-container full footer-menu-background footer-custom">
                <div className="grid-x">
                    <div className="cell">
                        <div className="footer-container">
                            <div className="top-bar footer-menu-background">
                                <div className="top-bar-center">
                                    <ul className="menu footer-menu-background custom-footer-font">
                                        <li className="need-help"><a className="mt-5">Need Help <span>?</span></a></li>
                                        <li><a>Contact</a></li>
                                        <li><a>Careers</a></li>
                                        <li><a>Privacy Policy</a></li>
                                        <li><a>Terms of Service</a></li>
                                        <li><a>Return Policy</a></li>
                                        <li><a>Return Suppliers</a></li>
                                        <li><a>Trademark Protection</a></li>
                                        <li>
                                            <div id="fb-root"></div>
                                            <div className="fb-like"
                                                 data-href="https://www.facebook.com/awokcom/"
                                                 data-layout="button"
                                                 data-action="like"
                                                 data-size="small"
                                                 data-show-faces="false"
                                                 data-share="false"
                                            >
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Footer;
