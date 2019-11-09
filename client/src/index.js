import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"

import App from './App';

export default class PegaSUS extends React.Component {
	render(){
		return(
				<App/>
		);
	}
}

ReactDOM.render(
	<PegaSUS/>, document.getElementById('app')
);
