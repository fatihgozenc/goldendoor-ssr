import React from 'react';
import Cookie from 'cookie-universal';
import MenuToggler from './MenuToggler';
import MenuMailer from './MenuMailer';

const cookies = Cookie();

const Header = ({data, logo, lang, pathname}) => {

  const setLang = () => {
		cookies.get('lang') === 'de' ? cookies.set('lang', 'en') : cookies.set('lang', 'de')
	}

	const navigation = React.useRef();

	const toggleMenu = (e) => {
			console.log(navigation, e.currentTarget)
			navigation.current.classList.toggle('nav__opening');
			let navItems = navigation.current.querySelectorAll('ul');
			setTimeout(() => {
				navItems.forEach(item => {
					item.classList.toggle('nav__child--appear');
				});
			}, 250);
  }

  return (
    <header className="header">
      <nav className="nav" ref={navigation}>
        <div className="nav__wrapper">
        {
          data.map(item => {
            return (
              <ul key={item.id}>
                <a href={item.url} className="nav__parent">{item.title}</a>
                {item.children !== null &&
                  item.children.map(subItem => ( 
                    (subItem.children !== null)
                      ? (
                        <ul key={subItem.id}>
                          <a href={subItem.url} className="nav__child">{subItem.title}</a>
                          {subItem.children.map(subItemChild => (
                            <li key={subItemChild.id}>
                              <a className="nav__child nav__child--sub" to={subItemChild.url}>{subItemChild.title}</a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <li key={subItem.id}>
                          <a href={subItem.url} className="nav__child">{subItem.title}</a>
                        </li>
                      )
                  ))
                }
              </ul> 
            )
          })
        }
        </div>
      </nav>
      <div className="frame">
        <div className="logoarea">
          <div className="panel panel__lang">
            <button className="panel__lang-selector"><span>{lang.toUpperCase()}</span>▾</button>
            <a href={pathname} className="panel__lang-selected" onClick={setLang}><span>{(lang === 'de' ? 'EN' : 'DE')}</span></a>
          </div>
            <a id="logo" href="/">
              <img src={logo} alt="Golden Door Logo"/>
            </a>
          <div className="panel panel__menu">
            <button onClick={toggleMenu}>
              <MenuToggler/>
            </button>
          </div>
        </div>
        <a href="#newsletter" className="menuMailer" >
          <MenuMailer/>
        </a>
        
      </div>
    </header>
  )
};

export default Header;