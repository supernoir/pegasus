import React from 'react'
import Admin from './Restricted/Admin/index'
import Dashboard from './Restricted/Dashboard/index'
import Detail from './Restricted/Detail/index'
import Success from './Public/Success/index'
import Survey from './Public/Survey/index'
import {Router} from '@reach/router'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					{/** *** PUBLIC *** */}
					<Survey path="/" />
					<Success path="/success" />
					{/** *** RESTRICTED *** */}
					<Admin path="/admin" />
					<Detail path="/detail/:surveyId" />
					<Dashboard path="/dashboard" />
				</Router>
			</div>
		)
	}
}
