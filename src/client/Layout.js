import React from 'react';
import {Link} from 'react-router-dom';
import Cookie from 'cookie-universal';
import MenuToggler from './components/MenuToggler';
import './styles/main.scss';

const cookies = Cookie();
const cookieRes = cookies.get('lang');
console.log(cookieRes)

const Layout = (props) => {


	const layoutProps = props.layoutData;
	//console.log(document.cookie)

    const toggleMenu = () => {
        
    }

	return(
		<>
			<header className="header">
				<nav className="nav">
					{
						(layoutProps.header.routes.de).map(item => {
							return (
								<ul key={item.id}>
									<Link to={item.url}>{item.title}</Link>
									{item.children !== null &&
										item.children.map(subItem => ( 
											(subItem.children !== null)
												? (
													<ul key={subItem.id}>
														<Link to={subItem.url}>{subItem.title}</Link>
														{subItem.children.map(subItemChild => (
															<li key={subItemChild.id}>
																<Link to={subItemChild.url}>{subItemChild.title}</Link>
															</li>
														))}
													</ul>
												) : (
													<li key={subItem.id}>
														<Link to={subItem.url}>{subItem.title}</Link>
													</li>
												)
										))
									}
								</ul>
							)
						})
					}
				</nav>
				<div className="frame">
					<div className="logoarea">
						<div className="panel panel__lang">
							<button className="panel__lang-selector"><span>DE</span>▾</button>
							<button className="panel__lang-selected"><span>EN</span></button>
						</div>
						<Link id="logo" to="/">
							<img src={layoutProps.footer.info.logo} alt="Golden Door Logo"/>
						</Link>
						<div className="panel panel__menu">
							<button>
								<MenuToggler/>
							</button>
						</div>
					</div>
				</div>
			</header>
			{props.children}
			<footer></footer>
		</>
	)
}

export default Layout;
