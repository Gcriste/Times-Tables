import React from 'react';
import './style.css';

export function Main(props) {
	return (
		<div className='pics' onClick={() => props.generateNumbers(props.id)}>
			<div className='img-container'>
				<h1 className='numbers'>
					{' '}
					{props.numberA} x {props.numberB}
				</h1>
				<hr />
				<h3 className='status'>{props.status}</h3>
			</div>
		</div>
	);
}

export function Input(props) {
	return (
		<div>
			<div className='form-group'>
				<input className='form-control' {...props} />
			</div>
		</div>
	);
}

export function PostButton(props) {
	return (
		<div className='postbutton'>
			<button
				type='submit'
				className='btn btn-primary'
				tabindex='0'
				onClick={(event) => props.handleSubmit(event)}
			>
				Submit
			</button>
		</div>
	);
}
