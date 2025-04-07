import{createstore,applyMiddleware}from 'redux';

import {composiveWithDevTools} from 'redux-devtools-extension';
import thunk from 'rudux-thunk';
import reducer from'./reducer';
S
const middleware=thunk
const store=createstore(
    reducer,
    composiveWithDevTools(applyMiddleware(...middleware))
);
export default store;

