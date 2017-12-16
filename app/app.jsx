import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Main from 'Main';


// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

// App custom css with mix of sass
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
     <Main/>,
       document.getElementById('app')
);
