import React from 'react';
import ScaleContainer from './containers/ScaleContainer';
import Main from './main';
//import ScoreContainer from './containers/ScoreContainer';

export default class App extends React.Component{
	render(){
		return(
			<div className="sus">
				<Main/>
				<ScaleContainer {...this.props}/>
				{/**
					<ScoreContainer {...this.props}/>
				*/}
			</div>
		);
	}
}