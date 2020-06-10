import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import { Main, Input, PostButton } from './components/Main/Main';
import Score from './components/Score/Score';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import ModalDisplay from './components/Modal/Modal';

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
			isOpen: false
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
				status: "I'm sorry that is not correct! The answer is " + this.state.correctAnswer
			});

			// handleShow = (event) => {
			// 	this.setState({ handleShow: true });
			// };

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

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
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
									/>

									<PostButton handleSubmit={this.handleSubmit} />
								</div>
							</div>
						</div>
					</div>

					{/* <button onClick={this.toggleModal}>Open the modal</button> */}

					{/* <ModalDisplay show={this.state.isOpen} onClose={this.toggleModal}>
					Here's some content for the modal
				</ModalDisplay> */}
					<ModalDisplay handleShow={this.handleShow} />
				</Wrapper>
				<Footer> copyright @Gcriste 2020</Footer>
			</div>
		);
	}
}

export default App;
