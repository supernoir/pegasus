/*
  1. To calculate the SUS score, first sum the score contributions from each item.
  2. Each item's score contribution will range from 0 to 4.
  3. For items 1,3,5,7,and 9 the score contribution is the scale position minus 1.
  4. For items 2,4,6,8 and 10, the contribution is 5 minus the scale position.
  5. Multiply the sum of the scores by 2.5 to obtain the overall value of SU.
  6. SUS scores have a range of 0 to 100.
*/


const exampleData = [{
	scales: {
		id   : 1,
		value: 2
	}
},{
	scales: {
		id   : 2,
		value: 4
	}
}];

class CalculateScore {
	constructor(score){
		this.score = score;

		this.calculateOddValue = this.calculateOddValue.bind(this);
		this.calculateEvenValue = this.calculateEvenValue.bind(this);
		this.prepareScores = this.prepareScores.bind(this);
		this.getSumTotal = this.getSumTotal.bind(this);
		this.compoundTotal = this.compoundTotal.bind(this);
		this.deriveScore = this.deriveScore.bind(this);
	}

	calculateOddValue(oddNumber){
		let num = parseInt(oddNumber);
		return num - 1;
	}

	calculateEvenValue(evenNumber){
		let num = parseInt(evenNumber);
		return 5 - num;
	}

	prepareScores(arr) {
		let tempArray = [];
		arr.map((item) => {
			if (item.scales.id % 2 === 0){
				tempArray.push(Object.assign({},{
					value: this.calculateEvenValue(item.scales.value),
					id   : item.scales.id
				}));
			} else {
				tempArray.push(Object.assign({},{
					value: this.calculateOddValue(item.scales.value),
					id   : item.scales.id
				}));
			}
		});
		return tempArray;
	}

	getSumTotal (arr) {
		let consolidatedArray = [];
		arr.map((item => {
			consolidatedArray.push(item.value);
		}));
		return consolidatedArray;
	}

	compoundTotal (arr) {
		if (arr.length !== 0) {
			const reducer = (accumulator, currentValue) => accumulator + currentValue;
			let compoundedValue = arr.reduce(reducer);
			return compoundedValue * 2.5;
		} else {
			return 0;
		}
	}

	deriveScore (arr) {
		return this.compoundTotal(
			this.getSumTotal(
				this.prepareScores(
					arr
				)));
	}
}

/* const sample = CalculateScore.prototype.deriveScore(exampleData);
console.log(sample); */

module.exports = {
	CalculateScore
}