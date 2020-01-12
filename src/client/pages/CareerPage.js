import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import { fetchCareer } from '../actions';
import parse from 'html-react-parser';
import DatePicker from 'react-datepicker';
import DragNDrop from '../components/DragNDrop';
import Icon from '../components/Icon';

const CareerPage = () => {

	const data = useSelector(state => state.career);

	const formFields = data.fields.karriere_bewerbung;

	const [jobStartDate, setJobStartDate] = useState(new Date());

	const collapseBlock = (el) => {
		let sectionHeight = el.scrollHeight;
		let elTransition = el.style.transition;
		el.style.transition = '';
		requestAnimationFrame(function () {
			el.style.height = sectionHeight + 'px';
			el.style.transition = elTransition;
			requestAnimationFrame(function () {
				el.style.height = 6 + 'rem';
			});
		});
	}

	const expandBlock = (el) => {
		let sectionHeight = el.scrollHeight;
		el.style.height = sectionHeight + 'px';
		let trigger = (el) => {
			el.addEventListener('transitionend', function (e) {
				el.removeEventListener('transitionend', trigger);
				el.style.height = null;
			});
		}
	}

	const openBlock = (e) => {
		const entryContainer = e.currentTarget.parentElement.parentElement;
		let isCollapsed = entryContainer.getAttribute('data-collapsed') === 'true';
		console.log(isCollapsed)
		if (isCollapsed) {
			collapseBlock(entryContainer)
			entryContainer.setAttribute('data-collapsed', 'false');
		} else {
			expandBlock(entryContainer)
			entryContainer.setAttribute('data-collapsed', 'true');
		}
		console.log(e.currentTarget)
		e.currentTarget.firstElementChild.classList.toggle('rotateSymbol');
	}

	return (
		<>
			<div className="page__title page__title--contact">
				<Breadcrumb slug={data.slug} title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<div className="career">
				{
					data.fields.karriere_eintrage.map((item, key) => (
						<div key={key} className="career__entry--wrapper">
							<div className="career__entry" data-collapsed="false">
								<div className="career__entry--block career__entry--util">
									{item.info.arbeitszeit}
								</div>
								<div className="career__entry--block career__entry--info">
									<h3>{item.info.titel}</h3>
									{parse(item.beschreibung)}
									<a href="#bewerbung" className="golden__button button--bewerbung">
										{formFields.bewerbung_button}
									</a>
								</div>
								<div className="career__entry--block career__entry--util">
									{item.info.standort}
								</div>
								<div className="career__entry--block">
									<a href={`#job-${key}`} onClick={(e) => openBlock(e)}>
										<Icon type="plus" />
									</a>
								</div>
							</div>
						</div>
					))
				}
			</div>
			<form action="#" id="bewerbung" className="career__application">

				<h2>{formFields.bewerbung_titel}</h2>

				<div className="contact__step--flexWrapper">

					{Object.values(formFields.bewerbung_etiketten).map((item, key) => (

						<div key={key} className="contact__stepblock">

							{key === 3
								? (
									<label className="label__text" htmlFor={`bewerbung_${item}`}>{item}
										<input
											className="input__text"
											type="text" id={`bewerbung_${item.toLowerCase()}`}
											name={`bewerbung_${item.toLowerCase()}`} />
									</label>
								) : (
									<label className="label__text" htmlFor={`bewerbung_${item}`}>{`${item}*`}
										<input
											required
											className="input__text"
											type="text" id={`bewerbung_${item.toLowerCase()}`}
											name={`bewerbung_${item.toLowerCase()}`} />
									</label>
								)
							}
						</div>
					))}

					<div className="contact__stepblock">
						<label htmlFor="job_position" className="label__select">{formFields.bewerbung_frage_1}</label>
						<select id="job_position">
							<optgroup>
								{data.fields.karriere_eintrage.map((item, key) => (
									<option key={key} value={item.info.titel}>{item.info.titel}, {item.info.standort}</option>
								))}
							</optgroup>
						</select>
					</div>

					<div className="contact__stepblock uploadcv">
						<DragNDrop
							text={formFields.bewerbung_hochladen}
							messages={formFields.formnachrichten} />
					</div>

					<div className="contact__stepblock">
						<label htmlFor="job_status"
							className="contact__stepblock--inner">{formFields.bewerbung_frage_2.frage}</label>
						{formFields.bewerbung_frage_2.job_status.map((item, key) => (
							<p className="contact__stepblock--inner contact__stepblock--career" key={key}>
								<input className="input__radio" type="radio" name="job_status" value={item.status} />
								<span className="label__radio">{item.status}</span>
							</p>
						))}
					</div>

					<div className="contact__stepblock contact__stepblock--date">
						<label className="contact__stepblock--inner" htmlFor="job_start_date">{formFields.bewerbung_zeit}</label>
						<DatePicker selected={jobStartDate} onChange={date => setEventDate(date)} />
					</div>

					<div className="contact__stepblock">
						<label htmlFor="job_message">{formFields.bewerbung_nachricht}</label>
						<textarea
							name="job_message"
							id="job_message" cols="30" rows="5" />
					</div>

					<div className="contact__stepblock career__submitwrapper" >

						<button type="submit" className="golden__button">{formFields.bewerbung_button}</button>

					</div>

				</div>

			</form>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchCareer());
}

export default {
	loadData,
	component: CareerPage
}