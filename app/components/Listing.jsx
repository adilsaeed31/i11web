import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import Product from 'Product';

const imageList = [];
const api = {
    // baseUrl: 'https://api.soundcloud.com',
    baseUrl: 'http://marketplace.alifca.com/api/mobile/products',
    // client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

class Listing extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };

    }
    componentDidUpdate() {
        $(document).foundation();
    }
    loadItems(page) {
        let self = this;

        // let url = api.baseUrl + '/users/8665091/favorites';
        let url = api.baseUrl;
        if (this.state.nextHref) {
            url = this.state.nextHref;
        }

        qwest.get(url, {
            // client_id: api.client_id,
            // linked_partitioning: 1,
            // page_size: 100
            items_per_page: 40
        }, {
            cache: true
        })
            .then(function (xhr, resp) {
                if (resp) {
                    let tracks = self.state.tracks;
                    resp.collection.map((track) => {

                        if (track.artwork_url == null) {
                            track.artwork_url = track.user.avatar_url;
                        }

                        tracks.push(track);
                    });

                    if (resp.next_href) {
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

        let items = [];
        this.state.tracks.map((track, i) => {
            items.push(
                <Product data={track.artwork_url} key={i}/>
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
                            useWindow={true}
                            threshold={500}
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
