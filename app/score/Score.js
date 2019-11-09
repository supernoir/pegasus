import React from 'react';
import CalculateScore from '../services/CalculateScore';
import ProcessScales from '../reducers/ProcessScales';

export default class Score extends React.Component {
	constructor(){
		super();
		this.state = {
			scales: [],
			score : 0
		};
	}


	componentWillReceiveProps(){
		/* 		const sample = CalculateScore.prototype.deriveScore(this.props.scales.ProcessScales);
		console.log(sample); */

		console.log(this.props);

		// console.log(this.props.scales);
		//console.log({ props: this.props });
		// console.log(CalculateScore.deriveScore(this.props.scales.ProcessScales));
		// const derivedScore = CalculateScore.deriveScore(this.props.scales.ProcessScales);
		// console.log(derivedScore);
		let scaleInput = this.props.scales.ProcessScales;
		console.log(scaleInput);
		let currentScore = new CalculateScore();
		let calculatedScore = currentScore.deriveScore(scaleInput || []);
		console.log(calculatedScore);
		/*this.setState({
			scales: scaleInput,
			score : calculatedScore
		});*/
	}


	render(){
		return(
			<div className="sus-score">
				<h2>Score:</h2>
				<h3>{this.state.score}</h3>
				<ul className="scorelist">
					{this.state.scales !== void 0
						? this.state.scales.map((score, index)=> {
							return <li key={index} className="scorelist-item">
								<p className="scorelist-item--question">{score.scales.context}</p>
								<p className="scorelist-item--score">{score.scales.value}</p>
							</li>;
						})
						:null
					}
				</ul>
			</div>
		);
	}
}

