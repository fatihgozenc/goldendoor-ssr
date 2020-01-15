import React from 'react';

const LoadingFrame = (props) => {

	return (
		<svg width={props.width - 20} className="loading_frame">
			<defs>
				<radialGradient id="linear" cx="0%" cy="0%" r="80%" fx="20%" fy="20%" >
					<stop offset="50%" stopColor="#C2AC84" />
					<stop offset="100%" stopColor="transparent" />
				</radialGradient>
			</defs>
			<rect width={props.width - 20} fill="transparent" stroke="url(#linear)" strokeWidth="3" />
		</svg>
	)
}

export default LoadingFrame;