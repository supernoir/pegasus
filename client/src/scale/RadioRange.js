import React from 'react';
import Radio from './Radio';

export default class RadioRange extends React.Component{
	constructor(props){
		super(props);
	}
	extendRange (range) {
		let firstItem = range[0];
		let lastItem = range[1];

		const tempArray = [];
		for (let i = firstItem; i <= lastItem; i++){
			tempArray.push(i);
		}
		return tempArray;
	}

	displayRadioRange () {
		const extendedRange = this.extendRange(this.props.range);
		return extendedRange.map((val, index) => <Radio key={index} id={index} label={val} radioContext={this.props.context} type={'radio'} store={this.props.store}/>);
	};

	render(){
		return (
			<div className="sus-scale-scaleitem range">
				<p>{this.props.label}</p>
				<div>
					<span>{'Strongly disagree'}</span>
					{this.displayRadioRange()}
					<span>{'Strongly agree'}</span>
				</div>
			</div>
		);
	}
}