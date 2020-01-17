import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import parse from 'html-react-parser';
import isBrowser from 'is-in-browser';
import { fetchContact } from '../actions';
import DatePicker from 'react-datepicker';
import MapContainer from '../components/MapContainer';

if (isBrowser) {
  require ('react-datepicker/dist/react-datepicker.min.css')
}

const ContactPage = () => {
	const contactInfo = useSelector(state => state.layout.footer.info);
	const data = useSelector(state => state.contact);
	const steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];

	const [eventDate, setEventDate] = useState(new Date());
	const [elusiveDate, setElusiveDate] = useState(new Date());
	const [beginTime, setBeginTime] = useState(new Date());
	const [endTime, setEndTime] = useState(new Date());

	const formSteps = React.useRef();
	const stepSlider = React.useRef();
	const dateRange = React.useRef();
	const dates = React.useRef();

	const changeStep = (e) => {
		const ellipses = formSteps.current.parentElement.parentElement.firstElementChild.children;
		if (e.currentTarget.classList.contains('goFirst')) {
			formSteps.current.classList.remove('atSecondStep')
			ellipses[1].classList.remove('activeStep')
			ellipses[0].classList.add('activeStep')
		} else if (e.currentTarget.classList.contains('goNext')) {
			formSteps.current.classList.remove('atSecondStep')
			formSteps.current.classList.add('atThirdStep')
			ellipses[1].classList.remove('activeStep')
			ellipses[2].classList.add('activeStep')
		} else if (e.currentTarget.classList.contains('goSecond')) {
			formSteps.current.classList.remove('atThirdStep')
			formSteps.current.classList.add('atSecondStep')
			ellipses[2].classList.remove('activeStep')
			ellipses[1].classList.add('activeStep')
		} else {
			formSteps.current.classList.add('atSecondStep')
			ellipses[0].classList.remove('activeStep')
			ellipses[1].classList.add('activeStep')
		}
	}

	const hideDates = (e) => {
		const answerYes = e.currentTarget.parentElement.parentElement.children[1].firstElementChild;
		if (answerYes.checked) {
			dates.current.classList.remove('hidden')
			dateRange.current.classList.add('hidden')
		} else {
			dates.current.classList.add('hidden')
			dateRange.current.classList.remove('hidden')
		}
	}

	React.useEffect(() => {
		stepSlider.current.firstElementChild.classList.add('activeStep')
		// dates.current.classList.add('hideDates')
	}, []);

	return (
		<>
			<div className="page__title page__title--contact">
				<Breadcrumb slug={data.slug} title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<div className="contact">

				<div ref={stepSlider} className="contact__stepslider">
					{
						steps.map((item, key) => (
							<div key={key}
								className="contact__stepslider--ellipse">
								<span>{key + 1}</span>
							</div>
						))
					}
				</div>

				<div className="contact--wrapper">

					<form className="contact__steps" ref={formSteps}>

						<div className="contact__step">

							<div className="contact__step--flexWrapper">

								<div className="contact__stepblock">
									<label htmlFor="event_type" className="label__select">{steps[0].kontakt_frage_1.frage}</label>
									<select id="event_type">
										<optgroup>
											{steps[0].kontakt_frage_1.optionen.map((item, key) => (
												<option key={key} value={item.option}>{item.option}</option>
											))}
										</optgroup>
									</select>
								</div>

								<div className="contact__stepblock">
									<label htmlFor="event_location" className="label__select">{steps[0].kontakt_frage_2.frage}</label>
									<select id="event_location">
										<optgroup>
											{steps[0].kontakt_frage_2.optionen.map((item, key) => (
												<option key={key} value={item.option}>{item.option}</option>
											))}
										</optgroup>
									</select>
								</div>

							</div>

							<div className="contact__step--flexWrapper-xl">

								<div className="contact__stepblock">
									<label htmlFor="event_date_answer"
										className="contact__stepblock--inner">{steps[0].kontakt_frage_3.frage}</label>
									{steps[0].kontakt_frage_3.optionen.map((item, key) => (
										<p className="contact__stepblock--inner" key={key}>
											<input onClick={hideDates} className="input__radio" type="radio" name="event_date_answer" value={item.option} />
											<span className="label__radio">{item.option}</span>
										</p>
									))}
								</div>

								<div className="contact__stepblock" ref={dateRange}>
									<label className="label__text" htmlFor="date_range">{steps[0].kontakt_frage_5}</label>
									<input className="input__text" required type="text" id="event_date_answer" />
								</div>

								<div
									ref={dates}
									className="contact__stepblock contact__stepblock--datewrapper hidden">

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

								</div>

							</div>



							<a
								href="#"
								className="golden__button golden__button--center"
								onClick={changeStep} >
								{data.fields.buttonfelder.prufen}
							</a>

						</div>

						<div className="contact__step">

							<h3>{steps[1].feld_1.titel}</h3>

							<div className="contact__step--wrapper">

								<div className="contact__step--flexWrapper">

									<div className="contact__stepblock">
										<label className="label__text" htmlFor="people_number">{steps[1].feld_1.frage_1}</label>
										<input type="text" required className="input__text" name="people_number" />
									</div>

									<div className="contact__stepblock">
										<label htmlFor="event_budget"
											className="contact__stepblock--inner">{steps[1].feld_1.frage_2.fragefeld}</label>
										{Object.values(steps[1].feld_1.frage_2.optionen).map((item, key) => (
											<p className="contact__stepblock--inner" key={key}>
												<input type="radio" className="input__radio" name="event_budget" value={item} />
												<span className="label__radio">{item}</span>
											</p>
										))}
									</div>

								</div>

								<h3>{steps[1].feld_2.titel}</h3>

								<div className="contact__step--flexWrapper-xl">

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

							</div>

							<div className="contact__buttongroup">
								<a
									href="#"
									onClick={changeStep}
									className="golden__button goFirst">{data.fields.buttonfelder.zuruck}</a>
								<a
									href="#"
									onClick={changeStep}
									className="golden__button goNext">{data.fields.buttonfelder.weiter}</a>
							</div>

						</div>

						<div className="contact__step">

							<h3>{steps[2].titel}</h3>

							<div className="contact__step--flexWrapper">

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
										<label className="label__text" htmlFor={`contactdata_${item}`}>{item}</label>
										{key === 0 | 4
											? (
												<input
													className="input__text"
													type="text" id={`contactdata_${item.toLowerCase()}`}
													name={`contactdata_${item.toLowerCase()}`} />
											) : (
												<input
													required
													className="input__text"
													type="text" id={`contactdata_${item.toLowerCase()}`}
													name={`contactdata_${item.toLowerCase()}`} />
											)
										}
									</div>

								))}

								<div className="contact__stepblock">
									<label htmlFor="event__nachricht">{steps[0].kontakt_frage_4}</label>
									<textarea
										name="event__nachricht"
										id="event__nachricht" cols="30" rows="5" />
								</div>

							</div>

							<div className="contact__buttongroup">

								<a
									href="#"
									onClick={changeStep}
									className="golden__button goSecond">{data.fields.buttonfelder.zuruck}</a>

								<button type="submit" className="golden__button">{data.fields.buttonfelder.senden}</button>

							</div>
						</div>

					</form>

				</div>

			</div>
			
			<div className="contact__info">
				<div className="contact__info--map">
					<MapContainer/>
				</div>
				<div className="contact__info--address">
						<div className="contact__info--logo">
							<img src={contactInfo.logo} alt="Golden Door Logo"/>
						</div>
						{Object.values(contactInfo.address).map((item, key) => (
							<div key={key}>{parse(item)}</div>
						))}
						<a href={`tel:${contactInfo.telefon}`}>{contactInfo.telefon}</a>
						<a href={`mailto:${contactInfo.email.toLowerCase()}`}>{contactInfo.email}</a>
				</div>
			</div>
			
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchContact());
}

export default {
	loadData,
	component: ContactPage
}
