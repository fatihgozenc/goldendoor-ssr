import React from 'react';
import Icon from '../components/Icon';

// import useCountRenders from '../utils/useCountRenders'

const LoopingItem = React.memo((props) => {

	const imgRatio = Math.round((props.width / props.height) * 10000) / 10000;
	const imgDomWidth = Math.round(( (props.windowHeight / 5.555) * imgRatio) * 100) / 100;

	const imgRef = React.useRef();

	const openCarousel = (e) => {
		const imgID = e.currentTarget.classList[1];
		const mainContainer = e.currentTarget.parentElement.parentElement.parentElement;
		const elementInCarousel = mainContainer.lastElementChild.getElementsByClassName(`img-${imgID}`);
		const elementInCarouselIndex = elementInCarousel[0].getAttribute('slideindex');
		mainContainer.lastElementChild.lastElementChild.lastElementChild.children[elementInCarouselIndex].click();
	}

	React.useEffect(() => {
		props.measure(imgDomWidth);
	}, [imgDomWidth, props]);


	return (
			<div ref={imgRef}
				className={`looping_gallery_item ${props.id}`}
				onClick={openCarousel}
				style={{ width: `${imgDomWidth}px` }}>
				<img className="looping_gallery_item-img"
					onLoad={(e) => e.currentTarget.classList.add('loaded')}
					src={props.highResUrl}
					alt={props.alt} />
				<div className="looping_gallery_item-text">
					<Icon type="view"/>
					<h5>{props.alt}<span>{props.type}</span></h5>
				</div>
			</div>
	)
});

export default LoopingItem;
