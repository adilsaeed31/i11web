import redux from 'redux';

export let configure = () => {
  let reducer = redux.combineReducers({
    listing: ListingReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
