import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import {BrowserRouter} from "react-router-dom"

import App from './App';


const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class PegaSUS extends React.Component {
	render(){
		return(
			<Provider store={store}>
				<App store={store}/>
			</Provider>
		);
	}
}

ReactDOM.render(
	<PegaSUS/>, document.getElementById('app')
);