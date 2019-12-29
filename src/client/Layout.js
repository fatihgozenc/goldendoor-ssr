import React from 'react';
import './styles/main.scss';

const Layout = (props) => {

	console.log(props.layoutData)

	return(
		<>
			<header></header>
			{props.children}
			<footer></footer>
		</>
	)
}

export default Layout;
