import {
    combineReducers,
    legacy_createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";

  const rootReducer = combineReducers({});
  
  const composerEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
  const store = legacy_createStore(
    rootReducer,
    composerEnhancer(applyMiddleware(thunk))
  );
  
  export { store };