import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import { Main, Input, PostButton } from './components/Main/Main';
import Score from './components/Score/Score';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

class App extends Component {
	// Setting this.state.images to the images json array

	constructor(props) {
		super(props);
		this.state = {
			rightAnswers: [],
			score: 0,
			highScore: 0,
			status: '',
			numberA: 0,
			numberB: 0,
			correctAnswer: 0,
			userGuess: 0,
			show: false
		};
	}

	hideModal = () => {
		this.setState({ show: false, status: '' });
	};

	showModal = () => {
		this.setState({ show: true });
	};
	componentDidMount() {
		let numberA = Math.floor(Math.random() * 12);
		let numberB = Math.floor(Math.random() * 12);

		let correctAnswer = numberA * numberB;
		this.setState({
			numberA: numberA,
			numberB: numberB,
			correctAnswer: correctAnswer,
			userGuess: ''
		});

		// generateNumbers();
	}

	handleCreateChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
			status: ''
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		if (parseInt(this.state.userGuess) === this.state.correctAnswer) {
			this.state.rightAnswers.push(this.state.correctAnswer);
			this.setState({
				rightAnswers: this.state.rightAnswers,
				score: this.state.rightAnswers.length,
				status: 'That is correct!'
			});

			console.log('right answer');
		} else {
			console.log('wrong answer');
			this.setState({
				rightAnswers: [],
				score: 0,
				status:
					"I'm sorry that is not correct! The answer is " +
					this.state.numberA +
					' x ' +
					this.state.numberB +
					' = ' +
					this.state.correctAnswer,
				show: true
			});

			if (this.state.score > this.state.highScore) {
				this.setState({
					highScore: this.state.score
				});
			} else {
				this.setState({
					highScore: this.state.highScore
				});
			}
		}
		this.componentDidMount();
	};

	render() {
		return (
			<div>
				<Wrapper>
					<Title>Times Tables!</Title>
					<div className='container'>
						<div className='card'>
							<div className='row'>
								<div className='col-md-6- offset-md-3'>
									<Score total={this.state.score} highscore={this.state.highScore} />
								</div>
							</div>
							<div className='row'>
								<div className='col-md-6 offset-md-3'>
									<Main
										numberA={this.state.numberA}
										numberB={this.state.numberB}
										status={this.state.status}
									/>
									<Input
										value={this.state.userGuess}
										onChange={this.handleCreateChange}
										name='userGuess'
										placeholder='Enter Answer'
										type='name'
									/>{' '}
									<Modal show={this.state.show} handleClose={this.hideModal}>
										<h3> {this.state.status}</h3>
									</Modal>
									<PostButton handleSubmit={this.handleSubmit} />
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
				<Footer> copyright @Gcriste 2020</Footer>
			</div>
		);
	}
}

export default App;
