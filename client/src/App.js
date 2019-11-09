import React from 'react';
import ScaleContainer from './containers/ScaleContainer';
//import ScoreContainer from './containers/ScoreContainer';

export default class App extends React.Component{
	render(){
		return(
			<div className="sus">
				<ScaleContainer {...this.props}/>
				{/**
					<ScoreContainer {...this.props}/>
				*/}
			</div>
		);
	}
}