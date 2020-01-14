import React from 'react';
import { useSelector } from 'react-redux';
import { fetchReferences } from '../actions';
import Hero from '../components/Hero'
import MehrLesen from '../components/MehrLesen';

const ReferencesPage = () => {
	const data = useSelector(state => state.references);
	const pageCount = new Array(data.page_count + 1).fill(pageCount);
	console.log(data)

	return (
		<>
			<Hero data={data.main} />
			<div id="content" className="pool pool--home">
				{data.children.map((route, key) => (
					<a key={key} className="home__route" href={route.lang === 'en' ? `/en/referenzen/${route.slug}` : `/referenzen/${route.slug}`}>
						<div className="home__route--wrapper">
							<div className="home__route--img backgroundImg"
								style={{ backgroundImage: "url(" + route.image + ")" }} />
							<div className="home__route--content">
								<h3 className="title__lg">{route.title}</h3>
								<p>{route.excerpt}</p>
								<span className="home__route--link">
									<MehrLesen name={data.read_more}/>
								</span>
							</div>
						</div>
					</a>
				))}
				<div className="pool__pagination">
					{
						pageCount.map((item,key) => { 
							if (key === 1) {
								return (<a key={key}
													className={data.page_number == key ? 'pageActive' : null}
													href={data.lang === 'en' ? `/en/referenzen` : `/referenzen`}>{key}
												</a>)
							} else if ( key > 1) {
								return (<a key={key}
													className={data.page_number == key ? 'pageActive' : null}
													href={data.lang === 'en' ? `/en/referenzen/page/${key}` : `/referenzen/page/${key}`}>{key}
												</a>)
							} else {
								return null;
							}
						})
					}
				</div>
			</div>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchReferences());
}

export default {
	loadData,
	component: ReferencesPage
}