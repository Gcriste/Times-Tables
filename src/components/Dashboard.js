import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
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
					<Title>Welcome!</Title>
					<div className='container'>
						<div className='card'>
							<div className='row'>
								<div className='col-md-3'>
									<Link to='/add'>
										<img className='picture' src={add} alt='pic of math' width='255' height='255' />
									</Link>
								</div>
								<div className='col-md-3'>
									<Link to='/subtract'>
										<img
											className='picture'
											src={subtract}
											alt='pic of math'
											width='255'
											height='255'
										/>
									</Link>
								</div>
								<div className='col-md-3'>
									<Link to='/multiply'>
										<img
											className='picture'
											src={multiply}
											alt='pic of math'
											width='255'
											height='255'
										/>
									</Link>
								</div>
								<div className='col-md-3'>
									<Link to='/divide'>
										<img
											className='picture'
											src={divide}
											alt='pic of math'
											width='255'
											height='255'
										/>
									</Link>
								</div>

								<div className='col-md-4 offset-md-4'>
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
