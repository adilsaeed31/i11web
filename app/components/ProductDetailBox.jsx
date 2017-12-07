import React from 'react';

class ProductDetailBox extends React.Component {
    handleBuyBtn() {
        $('#product-detail').foundation('close');
    }
    render() {
        return (
            <div>
                <div className="grid-x">
                    <div className="medium-6 cell">
                        <img className="thumbnail" src="http://placehold.it/650x350"/>
                        <div className="grid-x small-up-4">
                            <div className="cell">
                                <img className="thumbnail" src="http://placehold.it/250x200"/>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="http://placehold.it/250x200"/>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="http://placehold.it/250x200"/>
                            </div>
                            <div className="cell">
                                <img className="thumbnail" src="http://placehold.it/250x200"/>
                            </div>
                        </div>
                    </div>
                    <div className="medium-6 large-5 cell pdb-box-customize">
                        <h3>My Awesome Product</h3>
                        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                            pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi.
                            Duis aliquet egestas purus in.</p>

                        <label>Size
                            <select>
                                <option value="husker">Small</option>
                                <option value="starbuck">Medium</option>
                                <option value="hotdog">Large</option>
                                <option value="apollo">Yeti</option>
                            </select>
                        </label>

                        <div className="grid-x">
                            <div className="small-3 cell">
                                <label htmlFor="middle-label" className="middle">Quantity</label>
                            </div>
                            <div className="small-9 cell">
                                <input type="number" id="middle-label" placeholder="One fish two fish"/>
                            </div>
                        </div>

                        <a data-toggle="offCanvasRightPush" href="#" onClick={this.handleBuyBtn} className="button large expanded" style={{backgroundColor: '#FF1654'}}>Buy Now</a>

                        <div className="small secondary expanded button-group">
                            <a className="button">Facebook</a>
                            <a className="button">Twitter</a>
                            <a className="button">Yo</a>
                        </div>
                    </div>
                </div>

                <div className="cell grid-x">

                    <ul className="tabs" data-tabs id="example-tabs" style={{width: '100%'}}>
                        <li className="tabs-title is-active"><a href="#panel0" aria-selected="true">Overview</a></li>
                        <li className="tabs-title"><a href="#panel3">Description</a></li>
                        <li className="tabs-title"><a href="#panel1">Reviews</a></li>
                        <li className="tabs-title"><a href="#panel2">Similar Products</a></li>
                        <li className="tabs-title"><a href="#panel4">Shipping</a></li>
                    </ul>
                    <div className="tabs-content" data-tabs-content="example-tabs">
                        <div className="tabs-panel is-active" id="panel0">
                            <div className="grid-x">
                            <div className="small-6 cell">
                            <h4>Recent Reviews</h4>
                            <div className="media-object stack-for-small">
                                <div className="media-object-section">
                                    <img className="thumbnail" src="http://placehold.it/200x200"/>
                                </div>
                                <div className="media-object-section">
                                    <h5>Mike Stevenson</h5>
                                    <p>I'm going to improvise. Listen, there's something you should know about me...
                                        about inception. An idea is like a virus, resilient, highly contagious. The
                                        smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                                </div>
                            </div>
                            </div>
                            <div className="small-6 cell">
                                <h4>Standard Shipping</h4>
                                <p>Estimated Standard shipping will be apply to every product.</p>
                            </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell small-6">
                                    <h4>Sizes</h4>
                                    <p className="font-10">Small Size</p>
                                    <div className="progress" role="progressbar" tabIndex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                                        <div className="progress-meter" style={{width: '100px'}}></div>
                                    </div>
                                    <p className="font-10">Medium Size</p>
                                    <div className="progress" role="progressbar" tabIndex="0" aria-valuenow="60" aria-valuemin="0" aria-valuetext="60 percent" aria-valuemax="100">
                                        <div className="progress-meter" style={{width: '200px'}}></div>
                                    </div>
                                    <p className="font-10">Large Size</p>
                                    <div className="progress" role="progressbar" tabIndex="0" aria-valuenow="70" aria-valuemin="0" aria-valuetext="60 percent" aria-valuemax="100">
                                        <div className="progress-meter" style={{width: '300px'}}></div>
                                    </div>
                                    <p className="font-10">Extra Size</p>
                                    <div className="progress" role="progressbar" tabIndex="0" aria-valuenow="80" aria-valuemin="0" aria-valuetext="60 percent" aria-valuemax="100">
                                        <div className="progress-meter" style={{width: '400px'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tabs-panel" id="panel1">
                            <h4>Reviews</h4>
                            <div className="media-object stack-for-small">
                                <div className="media-object-section">
                                    <img className="thumbnail" src="http://placehold.it/200x200"/>
                                </div>
                                <div className="media-object-section">
                                    <h5>Mike Stevenson</h5>
                                    <p>I'm going to improvise. Listen, there's something you should know about me...
                                        about inception. An idea is like a virus, resilient, highly contagious. The
                                        smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                                </div>
                            </div>
                            <div className="media-object stack-for-small">
                                <div className="media-object-section">
                                    <img className="thumbnail" src="http://placehold.it/200x200"/>
                                </div>
                                <div className="media-object-section">
                                    <h5>Mike Stevenson</h5>
                                    <p>I'm going to improvise. Listen, there's something you should know about me...
                                        about inception. An idea is like a virus, resilient, highly contagious. The
                                        smallest seed of an idea can grow. It can grow to define or destroy you</p>
                                </div>
                            </div>
                            <div className="media-object stack-for-small">
                                <div className="media-object-section">
                                    <img className="thumbnail" src="http://placehold.it/200x200"/>
                                </div>
                                <div className="media-object-section">
                                    <h5>Mike Stevenson</h5>
                                    <p>I'm going to improvise. Listen, there's something you should know about me...
                                        about inception. An idea is like a virus, resilient, highly contagious. The
                                        smallest seed of an idea can grow. It can grow to define or destroy you</p>
                                </div>
                            </div>
                            <label>
                                My Review
                                <textarea placeholder="None"></textarea>
                            </label>
                            <button className="button">Submit Review</button>
                        </div>
                        <div className="tabs-panel" id="panel2">
                            <div className="grid-x medium-up-3 large-up-5">
                                <div className="cell">
                                    <img className="thumbnail" src="http://placehold.it/350x200"/>
                                    <h5>Other Product <small>$22</small></h5>
                                    <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla
                                        fringilla, orci ac euismod semper, magna diam.</p>
                                    <a href="#" className="button hollow tiny expanded">Buy Now</a>
                                </div>
                                <div className="cell">
                                    <img className="thumbnail" src="http://placehold.it/350x200"/>
                                    <h5>Other Product <small>$22</small></h5>
                                    <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla
                                        fringilla, orci ac euismod semper, magna diam.</p>
                                    <a href="#" className="button hollow tiny expanded">Buy Now</a>
                                </div>
                                <div className="cell">
                                    <img className="thumbnail" src="http://placehold.it/350x200"/>
                                    <h5>Other Product <small>$22</small></h5>
                                    <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla
                                        fringilla, orci ac euismod semper, magna diam.</p>
                                    <a href="#" className="button hollow tiny expanded">Buy Now</a>
                                </div>
                                <div className="cell">
                                    <img className="thumbnail" src="http://placehold.it/350x200"/>
                                    <h5>Other Product <small>$22</small></h5>
                                    <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla
                                        fringilla, orci ac euismod semper, magna diam.</p>
                                    <a href="#" className="button hollow tiny expanded">Buy Now</a>
                                </div>
                                <div className="cell">
                                    <img className="thumbnail" src="http://placehold.it/350x200"/>
                                    <h5>Other Product <small>$22</small></h5>
                                    <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla
                                        fringilla, orci ac euismod semper, magna diam.</p>
                                    <a href="#" className="button hollow tiny expanded">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="tabs-panel" id="panel3">
                            <div className="grid-x">
                                <div className="small-6 cell">
                                    <h4>Description</h4>
                                    <div className="media-object stack-for-small">

                                        <div className="media-object-section">

                                            <p>I'm going to improvise. Listen, there's something you should know about me...
                                                about inception. An idea is like a virus, resilient, highly contagious. The
                                                smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="tabs-panel" id="panel4">
                            <div className="grid-x">
                                <div className="small-12 cell">
                                    <h4>Shipping</h4>
                                        <p>
                                            This is the shipping area we can ship this product all over the world.
                                            Only buy any product and just let us know where to ship,
                                            and leave rest of the things to us.
                                        </p>

                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><strong>Estimated Shipping</strong></td>
                                            <td>This is longer content</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Availability</strong></td>
                                            <td>In Stock</td>
                                        </tr>
                                        <tr>
                                            <td>External Arrival</td>
                                            <td>This is longer Content</td>
                                        </tr>
                                        <tr>
                                            <td>Return Policy</td>
                                            <td>You may return this product but return policies will be apply</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


module.exports = ProductDetailBox;
