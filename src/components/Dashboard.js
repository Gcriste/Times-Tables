import React, { Component } from 'react';
import Title from './Title';
import { Main, Input, PostButton } from './Main';
import Score from './Score';
import Wrapper from './Wrapper';
import Footer from './Footer';
import Modal from './Modal';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<Wrapper>
					<Title>Welcome!</Title>
					<div className='container'>
						<div className='card'>
							<div className='row'>
								<div className='col-md-6'>
									{/* <Link to={'/add'}>
															<button className='ui yellow horizontal animated button'>
																<div className='visible content'>Back to Login</div>
																<div className='hidden content'>
																	<i className='left arrow icon' />
																</div>
															</button>
														</Link> */}
								</div>
							</div>
							<div className='row' />
						</div>
					</div>
				</Wrapper>
				<Footer> copyright @Gcriste 2020</Footer>
			</div>
		);
	}
}

export default Dashboard;
