import React from 'react';

function Nav() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#0087E5' }}>
			<a className='navbar-brand' href='/'>
				<h2 className='header'>Gear Trader</h2>
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
							<span className='material-icons d-none d-md-inline'>home</span> Home
						</a>
					</li>
					<li className='nav-item active' id='multiply'>
						<a className='nav-link' href='/multiply'>
							<span className='material-icons'>queue_music</span>{' '}
							<span className='d-none d-md-inline'>Multiplication</span>
						</a>
					</li>
					<li className='nav-item active' id='divide'>
						<a className='nav-link' href='/divide'>
							<span className='material-icons'>post_add</span>{' '}
							<span className='d-none d-md-inline'>Dividision</span>
						</a>
					</li>
					<li className='nav-item active' id='add'>
						<a className='nav-link' href='/add'>
							<span className='material-icons'>local_offer</span>{' '}
							<span className='d-none d-md-inline'>Addition</span>
						</a>
					</li>
					<li className='nav-item active' id='subtract'>
						<a className='nav-link' href='/subtract'>
							<span className='material-icons'>comment</span>{' '}
							<span className='d-none d-md-inline'>Subtraction</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
