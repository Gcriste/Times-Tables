import React from 'react';

function Nav() {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-dark'
			style={{ backgroundColor: '#0087E5', borderBottom: '5px solid black' }}
		>
			<a className='navbar-brand' href='/'>
				<h2 className='header'>Math Whiz!</h2>
			</a>

			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item active' id='dashboard'>
						<a className='nav-link' href='/dashboard'>
							<i class='fas fa-house-user' />
							<span className='d-none d-md-inline'> Home</span>
						</a>
					</li>
					<li className='nav-item active' id='add'>
						<a className='nav-link' href='/add'>
							<i class='fas fa-plus' /> <span className='d-none d-md-inline'> Addition</span>
						</a>
					</li>
					<li className='nav-item active' id='subtract'>
						<a className='nav-link' href='/subtract'>
							<i class='fas fa-minus' /> <span className='d-none d-md-inline'> Subtraction</span>
						</a>
					</li>
					<li className='nav-item active' id='multiply'>
						<a className='nav-link' href='/multiply'>
							<i class='fas fa-times' /> <span className='d-none d-md-inline'> Multiplication</span>
						</a>
					</li>
					<li className='nav-item active' id='divide'>
						<a className='nav-link' href='/divide'>
							<i class='fas fa-divide' /> <span className='d-none d-md-inline'> Division</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
