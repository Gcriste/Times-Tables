import React from 'react';
import './style.css';

function Title(props) {
	return (
		<div>
			<h1 className='title'>{props.children}</h1>
			<h3 className='directions'>
				{' '}
				Type in the answer to the problem. If you get it right, you keep going. But if you get it wrong, you
				lose!
			</h3>
		</div>
	);
}

export default Title;
