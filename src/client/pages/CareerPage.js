import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import { fetchCareer } from '../actions';
import parse from 'html-react-parser';
import DatePicker from 'react-datepicker';
import DragNDrop from '../components/DragNDrop';

const CareerPage = () => {

	const data = useSelector(state => state.career);

	console.log(data)

	const formFields = data.fields.karriere_bewerbung;

	const openEntry = (e) => {
		e.currentTarget.classList.toggle('rotateSymbol');
		e.currentTarget.parentElement.parentElement.classList.toggle('openEntry')
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
							<div className="career__entry">
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
									<a href={`#job-${key}`} onClick={(e) => openEntry(e)}>X</a>
								</div>
							</div>
						</div>
					))
				}
			</div>
			<form action="#" className="career__application">

				<h2>{formFields.bewerbung_titel}</h2>

				{Object.values(formFields.bewerbung_etiketten).map((item, key) => (

					<div key={key} className="contact__stepblock">
						<label className="label__text" htmlFor={`bewerbung_${item}`}>{item}</label>
						{key === 3
							? (
								<input
									className="input__text"
									type="text" id={`bewerbung_${item.toLowerCase()}`}
									name={`bewerbung_${item.toLowerCase()}`} />
							) : (
								<input
									required
									className="input__text"
									type="text" id={`bewerbung_${item.toLowerCase()}`}
									name={`bewerbung_${item.toLowerCase()}`} />
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