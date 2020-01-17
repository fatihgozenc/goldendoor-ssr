import React from 'react';
import parse from 'html-react-parser';
import registerToNewsletter from '../../helpers/registerToNewsletter';

const Newsletter = ({data}) => {
  // registerToNewsletter
  return (
    <div id="newsletter" className="newsletter">

      <div className="newsletter__block">
        <h3>Newsletter</h3>
        <p>{data.subtitel}</p>
      </div>

      <form className="newsletter__form">

        <div className="newsletter__form--block">

          <div className="newsletter__form--field">
            <label htmlFor="surname">{data.vorname}</label>
            <input required type="text" name="surname"/>
          </div>

          <div className="newsletter__form--field">
            <label htmlFor="name">{data.name}</label>
            <input required type="text" name="name"/>
          </div>

        </div>

        <div className="newsletter__form--block">
          <div className="newsletter__form--field">
            <label htmlFor="email">{data.email}</label>
            <input required type="email"/>
          </div>
        </div>

        <div className="newsletter__datenschutz">
          {parse(data.datenschutz.text)}
          <input type="checkbox" required name="acceptance" />
          <label htmlFor="acceptance">{data.datenschutz.checkbox}</label>
          {parse(data.datenschutz.extra)}
        </div>

        <input type="submit" className="golden__button" value={data.datenschutz.button}/>
        
      </form>

    </div>
  )
};

export default Newsletter;