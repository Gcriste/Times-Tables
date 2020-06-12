import React from 'react';

function Title(props) {
	return (
		<div>
			<h1 className='title'>{props.children}</h1>
			<h6 className='directions'>
				{' '}
				Type in the answer to the problem. If you get it right, you keep going. But if you get it wrong, you
				lose!
			</h6>
		</div>
	);
}

export default Title;
