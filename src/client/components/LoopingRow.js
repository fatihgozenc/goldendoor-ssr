import React from 'react';
import LoopingItem from './LoopingItem';
import useCountRenders from '../utils/useCountRenders'

const openCarousel = (e) => {
	const imgID = e.currentTarget.classList[1];
	const mainContainer = e.currentTarget.parentElement.parentElement.parentElement;
	const elementInCarousel = mainContainer.lastElementChild.getElementsByClassName(`img-${imgID}`);
	const elementInCarouselIndex = elementInCarousel[0].getAttribute('slideindex');
	mainContainer.lastElementChild.lastElementChild.lastElementChild.children[elementInCarouselIndex].click();
}

//FUNCTION FOR CLONING THE CHILDREN OF A DOM NODE.
const cloneChildren = (el) => {
	let items = Array.from(el.childNodes);
	items.forEach(function (item) {
		var clone = item.cloneNode(true);
		clone.addEventListener('click', openCarousel)
		el.appendChild(clone);
	})
};

const LoopingRow = (props) => {

	//INITIAL DOM WITH IS 0 BECAUSE IMAGES WILL CHANGE SIZE DEPENDING ON SCREEN SIZE
	const [width, setWidth] = React.useState(0);
	const [canStart, setCanStart] = React.useState(false);
	const [transition] = React.useState(150);

	//AS A CALLBACK FUNCTION LOADED ITEM SENDS ITS WIDTH TO ROW ELEMENTS' STATE
	//AND WITH THE HELP OF REACT.MEMO zROW ELEMENT DOESN'T RE-RENDER
	const measure = React.useCallback((n) => {
		setWidth(c => Math.round((c + n) * 100) / 100)
		setCanStart(true)
	}, [setWidth]);

	const galleryRow = React.useRef();

	//THIS CUSTOM HOOK IS FOR TESTING RENDERING COUNT
	// useCountRenders();

	// React.useEffect(() => {
	// 	console.log(galleryRow.current.parentElement.querySelectorAll('.looping_gallery_item'))
	// }, [])

	React.useEffect(() => {

		//COMPONENTDIDMOUNT
		let row = galleryRow.current;
		// console.log(`Rows have mounted.`)

		//IF ROW IS ABLE START TO ANIMATE AND ITS' WIDTH IS CALCULATED,
		//THEN CLONE THE CHILDREN
		
		if (canStart && width > 0) {
			cloneChildren(row)
			row.style.transitionDuration = `${transition}s`;
			row.style.transform = `translateX(-${width}px)`;
		}

		//COMPONENTWILLUNMOUNT
		return () => {

			if (canStart) {
				localStorage.setItem('shouldBeCloned', 'false')
				// console.log('Rows have unmounted')
				row.style.transitionDuration = `0s`;
				row.style.transform = `translateX(0px)`;

			} else {
				return null
			}

		}
	}, [canStart, transition, width])

	const loopTheGallery = (e) => {

		//DETECTING IF TRANSITIONEND FIRES ON ROW ELEMENT ONLY
		if (e.target === galleryRow.current) {

			//RESETS CSS
			galleryRow.current.style.transitionDuration = `0s`;
			galleryRow.current.style.transform = `translateX(0px)`;

			//RE-INITIALIZING IT
			setTimeout(() => {
				galleryRow.current.style.transitionDuration = `${transition}s`;
				galleryRow.current.style.transform = `translateX(-${width}px)`;
			}, 1);

		}
	}

	return (

		<div
			className="looping_gallery_row"
			onTransitionEnd={loopTheGallery}
			ref={galleryRow}>

			{props.data.map((item, key) => (  

				<LoopingItem
					order={key + 1}
					rowNumber={props.rowNumber}
					id={item.bild.id}
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
					measure={measure}
					key={item.bild.id}
					width={item.bild.sizes["medium_large-width"]}
					height={item.bild.sizes["medium_large-height"]}
					type={item.info.veranstaltungsart}
					alt={item.info.titel}
					highResUrl={item.bild.sizes.medium}
				/>

			))}

		</div>

	)
}

export default LoopingRow;
