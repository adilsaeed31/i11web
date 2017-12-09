import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import Product from 'Product';
import axios from 'axios';

const imageList = [];
const api = {
    //baseUrl: 'https://api.soundcloud.com',
    baseUrl: 'http://marketplace.alifca.com/api/mobile/products',
    //client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

class Listing extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };

    }
    loadItems(page) {
        var self = this;

        var url = api.baseUrl;
        if(this.state.nextHref) {
            url = this.state.nextHref;
        }


        qwest.setDefaultOptions({
            dataType: 'arraybuffer',
            responseType: 'json',
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });



        qwest.get(url, {
            items_per_page: 40
        }, {
            cache: true
        })
            .then(function(xhr, resp) {
                if(resp) {
                    var tracks = self.state.tracks;
                    resp.collection.map((track) => {
                        if(track.artwork_url == null) {
                            track.artwork_url = track.user.avatar_url;
                        }

                        tracks.push(track);
                    });

                    if(resp.next_href) {
                        self.setState({
                            tracks: tracks,
                            nextHref: resp.next_href
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
    }
    render() {
        const loader = <div className="loader">Loading ...</div>;

        var items = [];
        this.state.tracks.map((track, i) => {
            items.push(
                <Product/>
            );
        });

        return (
            <div>

                <br/>
                <br/>

                <div className="grid-container grid-container-listing-special">
                    <div className="grid-x">
                            <InfiniteScroll

                                pageStart={0}
                                loadMore={this.loadItems.bind(this)}
                                hasMore={this.state.hasMoreItems}
                                loader={loader}
                                threshold={300}
                            >

                                <div className="grid-x grid-padding-x small-up-2 medium-up-3 large-up-4">
                                {items}
                                </div>

                            </InfiniteScroll>

                    </div>
                </div>
            </div>
        );
    }
}

Listing.initialState = {
    items: []
};

module.exports = Listing;
