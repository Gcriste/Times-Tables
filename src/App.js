import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import { Main, Input } from './components/Main/Main';
import Score from './components/Score/Score';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';

class App extends Component {
	// Setting this.state.images to the images json array

	constructor(props) {
		super(props);
		this.state = {
			rightAnswers: [],
			score: 0,
			highScore: 0,
			goal: 15,
			status: '',
			numberA: 0,
			numberB: 0,
			answer: 0
		};
	}

	componentDidMount() {
		let numberA = Math.floor(Math.random() * 12);
		let numberB = Math.floor(Math.random() * 12);

		let answer = numberA * numberB;
		this.setState({
			numberA: numberA,
			numberB: numberB,
			answer: answer
		});

		// generateNumbers();
	}

	handleCreateChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<Wrapper>
				<Title>Times Tables!</Title>
				<Score total={this.state.score} goal={15} status={this.state.status} highscore={this.state.highScore} />

				<Main
					// generateNumbers={this.generateNumbers}
					// id={image.id}
					// key={image.id}
					numberA={this.state.numberA}
					numberB={this.state.numberB}
					answer={this.state.answer}
					// name={image.name}
					// image={image.image}
				/>
				<Input
					value={this.state.answer}
					onChange={this.handleCreateChange}
					name='answer'
					placeholder='Enter Answer'
					type='name'
				/>

				<Footer> copyright @Gcriste 2020</Footer>
			</Wrapper>
		);
	}
}

export default App;
