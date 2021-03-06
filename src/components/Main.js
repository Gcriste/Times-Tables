import React from 'react';

export function MainMultiply(props) {
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

export function MainAdd(props) {
	return (
		<div className='pics' onClick={() => props.generateNumbers(props.id)}>
			<div className='img-container'>
				<h1 className='numbers'>
					{' '}
					{props.numberA} + {props.numberB}
				</h1>
				<hr />
				<h3 className='status'>{props.status}</h3>
			</div>
		</div>
	);
}

export function MainSubtract(props) {
	return (
		<div className='pics' onClick={() => props.generateNumbers(props.id)}>
			<div className='img-container'>
				<h1 className='numbers'>
					{' '}
					{props.numberA} - {props.numberB}
				</h1>
				<hr />
				<h3 className='status'>{props.status}</h3>
			</div>
		</div>
	);
}

export function MainDivide(props) {
	return (
		<div className='pics' onClick={() => props.generateNumbers(props.id)}>
			<div className='img-container'>
				<h1 className='numbers'>
					{' '}
					{props.numberA} <i class='fas fa-divide' /> {props.numberB}
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
