import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${parseInt(x / 8)}px,${parseInt(y / 8)}px,0)`
const trans2 = (x, y) => `translate3d(${parseInt(x / 25 + 5)}px,${parseInt((y / 10)/ 10)}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) > `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Scene = () => {
	const [ properties, setProperties ] = useSpring(()=> ({
		xy: [0, 0],
		config: {
			mass: 10,
			// tension: 550,
			friction: 40
		}
	}));

	return(
		<div 
			className="container"
			onMouseMove={({ clientX: x, clientY: y }) => setProperties({ xy: calc(x, y) })}>
			<animated.div className="card1" style={{ transform: properties.xy.interpolate(trans1) }}/>
			<animated.div className="card2" style={{ transform: properties.xy.interpolate(trans2) }}/>
		</div>
	)
};

export default Scene;