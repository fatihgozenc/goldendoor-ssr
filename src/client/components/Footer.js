import React from 'react';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

const Footer = ({data}) => {

  return (
    <footer className="footer">
      <div className="footer__block">

        <div className="footer__block__item">
          <img id="footer--logo" src={data.info.logo} alt="Golden Door Logo"/>
        </div>

        <div className="footer__block__item">
          {parse(data.info.address.berlin)}
        </div>

        <div className="footer__block__item">
          {parse(data.info.address.dresden)}
        </div>

        <div className="footer__block__item">
          <a href={`tel:${data.info.telefon}`}>{data.info.telefon}</a>
          <a href={`mailto:${data.info.email.toLowerCase()}`}>{data.info.email}</a>
        </div>

        <div className="footer__block__item">
          <div className="footer__routes">
            <div className="footer__routes--block">
              {data.routes.map((route, key) => {
                while (key <= 3) {
                  return (
                    <Link key={route.id} className="footer__routes--item" to={route.url}>{route.title}</Link>
                  )
                }
              })}
            </div>
            <div className="footer__routes--block">
              {data.routes.map((route, key) => {
                while (key >= 4) {
                  return (
                    <Link key={route.id} className="footer__routes--item" to={route.url}>{route.title}</Link>
                  )
                }
              })}
                <div className="footer__routes--item copyright">{data.info.copyright}</div>
            </div>
          </div>
        </div>

      </div>
      <div className="footer__block">
        <div className="footer__submarken">
          <div id="submarken--text" className="footer__submarken--item ">{data.submarken.submarke_text}</div>

          <div className="footer__submarken--wrapper">
            
            <div className="footer__submarken--block">
              {data.submarken.submarke_logogroup.map((marke, key) => {
                while (key < 4) {
                  return(
                    <div key={key} className="footer__submarken--item">
                      <Link to={marke.route}>
                        <img src={marke.logo} alt="Submarke Logo"/>
                      </Link>
                    </div>
                  )
                }})
              }
            </div>
            <div className="footer__submarken--block">
              {data.submarken.submarke_logogroup.map((marke, key) => {
                while (key > 3 && key < 8) {
                  return(
                    <div key={key} className="footer__submarken--item">
                      <Link to={marke.route}>
                        <img src={marke.logo} alt="Submarke Logo"/>
                      </Link>
                    </div>
                  )
                }})
              }
            </div>

          </div>

          <div className="footer__submarken--block">
              {data.submarken.submarke_logogroup.map((marke, key) => {
                while (key > 7) {
                  return(
                    <div key={key} className="footer__submarken--item">
                      <Link to={marke.route}>
                        <img src={marke.logo} alt="Submarke Logo"/>
                      </Link>
                    </div>
                  )
                }})
              }
            </div>
        </div>
      </div>
      
    </footer>
  )
};

export default Footer;