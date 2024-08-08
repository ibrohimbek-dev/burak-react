// @ts-nocheck

import { Component } from "react";

class TestCar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			brand: "Ford",
			model: "Mustang",
			color: "red",
			year: 1964,
		};
	}

	changeDetail = () => {
		this.setState({
			color: "blue",
			brand: "Tesla",
			model: "Model S",
			year: 20,
		});
	};

	componentDidMount() {
		console.log("This is componentDidMount in Test.tsx");
		// runs after first render
	}

	componentWillUnmount() {
		console.log("This is componentWillUnmount in Test.tsx");
		// runs before component unmount => Retrieve data from backend server
	}

	componentDidUpdate() {
		console.log("This is componentDidUpdate in Test.tsx");
		//
	}

	render() {
		return (
			<div>
				<h1>My {this.state.brand}</h1>

				<p>
					Color: {this.state.color}. Model: {this.state.model}. Year:{" "}
					{this.state.year}.
				</p>

				<button type="button" onClick={this.changeDetail}>
					Change Detail
				</button>
			</div>
		);
	}
}

export default TestCar;
