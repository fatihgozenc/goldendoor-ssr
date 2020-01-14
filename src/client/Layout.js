import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import './styles/main.scss';

const Layout = (props) => {
	
	return (
		<>
			<Header
				data={props.layoutData.header}
				logo={props.layoutData.footer.info.logo}
				lang={props.layoutData.lang}
				pathname={props.location.pathname}
			/>
				{props.children}
			<Newsletter data={props.layoutData.newsletter} />
			<Footer data={props.layoutData.footer} />
		</>
	)
}

export default Layout;
