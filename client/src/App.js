import React from 'react'
import Survey from './Public/Survey/index'
import Admin from './Restricted/Admin/index'
import Dashboard from './Restricted/Dashboard/index'
import Success from './Public/Success/index'
import {Router} from '@reach/router'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Survey path="/" />
					<Success path="/success" />
					<Admin path="/admin" />
					<Dashboard path="/dashboard" />
				</Router>
			</div>
		)
	}
}
