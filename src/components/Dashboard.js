import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Footer from './Footer';
import add from '../images/addicon.png';
import subtract from '../images/subtracticon.png';
import multiply from '../images/multiplyicon.png';
import divide from '../images/divideicon.png';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<Wrapper>
					<div className='container'>
						<h1 style={{ textAlign: 'center' }}>Welcome!</h1>
						<h6 style={{ textAlign: 'center' }}>Click on one of the buttons below to get started!</h6>
						<div className='card'>
							<div className='row'>
								<div className='col-md-3'>
									<Link to='/add'>
										<img className='picture' src={add} alt='pic of math' />
									</Link>
								</div>
								<div className='col-md-3'>
									<Link to='/subtract'>
										<img className='picture' src={subtract} alt='pic of math' />
									</Link>
								</div>
								<div className='col-md-3'>
									<Link to='/multiply'>
										<img className='picture' src={multiply} alt='pic of math' />
									</Link>
								</div>
								<div className='col-md-3'>
									<Link to='/divide'>
										<img className='picture' src={divide} alt='pic of math' />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
				<Footer>
					{' '}
					<p>
						&copy; <em>GcristeProductions</em>{' '}
						<strong>
							<a href='mailto:griffincriste@gmail.com'>Email Me</a>
						</strong>
					</p>
				</Footer>
			</div>
		);
	}
}

export default Dashboard;
