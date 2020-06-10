import React from 'react';
import './style.css';

function Score(props) {
	return (
		<div classsName='container'>
			<div className='gameScore'>
				<div className='gameScoreTwo'>
					<h3 className='score'>Your Score: {props.total}</h3>
					<h3 className='highscore'>High Score: {props.highscore}</h3>
				</div>
			</div>
		</div>
	);
}

export default Score;
