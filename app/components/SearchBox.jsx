import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="input-group custom-group">
                <span className="input-group-label search-input-height label-width"><i className="fa fa-search find-ml-5"></i></span>
                <input className="input-group-field search-input-height search-input-width" type="text"/>
            </div>
        );
    }
}

module.exports = SearchBox;
