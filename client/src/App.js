import React from 'react';
import ScaleInput from "./Public/ScaleInput/index"
import Admin from "./Restricted/Admin/index"
import Dashboard from "./Restricted/Dashboard/index"
import { Router } from "@reach/router"

export default class App extends React.Component{
	render(){
		return(
     		<div>
				<Router>
					<ScaleInput path="/" />
					<Admin path="/admin" />
					<Dashboard path="/admin/dashboard" />
				</Router>
			</div>
		);
	}
}