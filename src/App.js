import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import { Main, Input, PostButton } from './components/Main/Main';
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
			correctAnswer: 0,
			userGuess: 0
		};
	}

	componentDidMount() {
		let numberA = Math.floor(Math.random() * 12);
		let numberB = Math.floor(Math.random() * 12);

		let correctAnswer = numberA * numberB;
		this.setState({
			numberA: numberA,
			numberB: numberB,
			correctAnswer: correctAnswer
		});

		// generateNumbers();
	}

	handleCreateChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (parseInt(this.state.userGuess) === this.state.correctAnswer) {
			let rightAnswers = [];
			rightAnswers.push(this.state.correctAnswer);
			this.setState({
				rightAnswers: rightAnswers
			});
			console.log('right answer');
		} else {
			console.log('wrong answer');
		}
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
					correctAnswer={this.state.correctAnswer}
					// name={image.name}
					// image={image.image}
				/>
				<Input
					value={this.state.userGuess}
					onChange={this.handleCreateChange}
					name='userGuess'
					placeholder='Enter Answer'
					type='name'
				/>

				<PostButton handleSubmit={this.handleSubmit} />
				<Footer> copyright @Gcriste 2020</Footer>
			</Wrapper>
		);
	}
}

export default App;
