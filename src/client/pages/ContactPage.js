import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import { fetchContact } from '../actions';
import DatePicker from 'react-datepicker';

const ContactPage = () => {

  const data = useSelector(state => state.contact);
  const steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];

  const [eventDate, setEventDate] = useState(new Date());
  const [elusiveDate, setElusiveDate] = useState(new Date());
  const [beginTime, setBeginTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  console.log(data);

  return(
    <>
      <div className="page__title page__title--contact">
        <Breadcrumb slug={data.slug} title={data.title}/>
        <h1>{data.title}</h1>
      </div>
      <div className="contact">

        <div className="contact__stepslider">
        {
          steps.map((item, key) => (
          <div key={key} className="contact__stepslider--ellipse activeStep"><span>{key + 1}</span></div>
          ))
        }
        </div>

        <form className="contact--wrapper">
          
          <div className="contact__step">

            <div className="contact__stepblock">
              <label htmlFor="event_type" className="label__select">{steps[0].kontakt_frage_1.frage}</label>
              <select name="event_type">
                {steps[0].kontakt_frage_1.optionen.map((item, key) => (
                  <option key={key} value={item.option}>{item.option}</option>
                ))}
              </select>
            </div>

            <div className="contact__stepblock">
              <label htmlFor="event_location" className="label__select">{steps[0].kontakt_frage_2.frage}</label>
              <select name="event_location">
                {steps[0].kontakt_frage_2.optionen.map((item, key) => (
                  <option key={key} value={item.option}>{item.option}</option>
                ))}
              </select>
            </div>

            <div className="contact__stepblock">
              <p className="contact__stepblock--inner">{steps[0].kontakt_frage_3.frage}</p>
              {steps[0].kontakt_frage_3.optionen.map((item, key) => (
                <p className="contact__stepblock--inner" key={key}>
                  <input type="radio" name="event_date_answer" value={item.option}/>
                  <label htmlFor="event_date_answer" className="label__select">{item.option}</label>
                </p>                
              ))}
            </div>

            <div className="contact__stepblock">
              <label htmlFor="date_range">{steps[0].kontakt_frage_5}</label>
              <input type="text" name={`event_date_answer`}/>
            </div>

            <div className="contact__stepblock">

              <div className="contact__stepblock--date">
                <label htmlFor="date_of_event">{steps[0].kontakt_frage_6.datum}</label>
                <DatePicker selected={eventDate} onChange={date => setEventDate(date)} />
              </div>

              <div className="contact__stepblock--date">
                <label htmlFor="date_of_elusive">{steps[0].kontakt_frage_6.ausweichtermin}</label>
                <DatePicker selected={elusiveDate} onChange={date => setElusiveDate(date)} />
              </div>

              <div className="contact__stepblock--date">
                <label htmlFor="date_of_elusive">{steps[0].kontakt_frage_6.beginn}</label>
                <DatePicker 
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa" 
                  selected={beginTime} onChange={date => setBeginTime(date)} 
                />
              </div>

              <div className="contact__stepblock--date">
                <label htmlFor="date_of_elusive">{steps[0].kontakt_frage_6.ende}</label>
                <DatePicker 
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa" 
                  selected={endTime} onChange={date => setEndTime(date)} 
                />
              </div>

              <button className="golden__button" >{data.fields.buttonfelder.prufen}</button>
              
            </div>

          </div>

          <div className="contact__step">

            <div className="contact__step--wrapper">

              <h3>{steps[1].feld_1.titel}</h3>

              <div className="contact__stepblock">
                <label htmlFor="people_number">{steps[1].feld_1.frage_1}</label>
                <input type="text" name="people_number"/>
              </div>

              <div className="contact__stepblock">
                <label className="contact__stepblock--inner">{steps[1].feld_1.frage_2.fragefeld}</label>
                {Object.values(steps[1].feld_1.frage_2.optionen).map((item, key) => (
                  <p className="contact__stepblock--inner" key={key}>
                    <input type="radio" name="event_budget" value={item}/>
                    <label htmlFor="event_budget" className="label__select">{item}</label>
                  </p>                
                ))}
              </div>

              <h3>{steps[1].feld_2.titel}</h3>

              {(Object.values(steps[1].feld_2).slice(1)).map((item, key) => (

                <div key={key} className="contact__stepblock">
                  <label htmlFor={`event_${item.fragefeld.toLowerCase()}`} className="label__select">{item.fragefeld}</label>
                  <select name={`event_${item.fragefeld.toLowerCase()}`}>

                    {item.optionen.map((subItem, subKey) => (
                      <option key={subKey} value={subItem.option}>{subItem.option}</option>
                    ))}

                  </select>
                </div>
              ))}

            </div>

            <button className="golden__button">{data.fields.buttonfelder.zuruck}</button>

            <button className="golden__button">{data.fields.buttonfelder.weiter}</button>

          </div>

          <div className="contact__step">

            <h3>{steps[2].titel}</h3>

            <div className="contact__stepblock">
              <label htmlFor="event_location" className="label__select">{steps[2].anredefeld.frage}</label>
              <select name="event_location">
                {steps[2].anredefeld.sex.map((item, key) => (
                  <option key={key} value={item.option}>{item.option}</option>
                ))}
              </select>
            </div>

            {Object.values(steps[2].andere_fragen).map((item, key) => (

              <div key={key} className="contact__stepblock">
                <label htmlFor={`contactdata_${item}`}>{item}</label>
                <input type="text" name={`contactdata_${item}`}/>
              </div>

            ))}

            <button className="golden__button">{data.fields.buttonfelder.senden}</button>

          </div>

        </form>


      </div>
    </>
  )
};
  
function loadData(store){
	return store.dispatch(fetchContact());
}

export default{
	loadData,
	component: ContactPage
}
