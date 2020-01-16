import React, { useState, useEffect, useRef } from 'react';
import Icon from '../components/Icon';
import parse from 'html-react-parser';

const IMG_WIDTH = 300;
const IMG_HEIGHT = 300;
const parentPad = 0;
const VISIBLEIMAGES = 3;
const DURATION = 750;

const Carousel = (props) => {
	const {
		imgList = [],
		img_width = IMG_WIDTH,
		img_height = IMG_HEIGHT,
		visibleImages = VISIBLEIMAGES,
		duration = DURATION,
		autoNext = false,
		timeForNext = 3000
	} = props;

	const [currFirstImg, setCurrFirstImg] = useState(0);
	const [actualFirst, setActualFirst] = useState('');
	const [visibleItemsProps, setVisibleItemsProps] = useState({ order: [], styles: {} });
	const currMiddleImgRef = useRef(0);
	const intervalRef = useRef(0);
	const imgDifference = useRef(1);
	const durationRef = useRef(duration);
	const wrapper = useRef();

	const parentHeight = img_height + 2 * parentPad;
	const parentWidth = img_width * 3;
	const elementsInLeft = Math.ceil(visibleImages / 2);
	const elementsInRight = visibleImages - elementsInLeft;

	const changeCenter = ({ event, index }) => {
		const currFirstImgIndex = visibleItemsProps.order.indexOf(currFirstImg);
		const prevIndex = visibleItemsProps.order[currFirstImgIndex - 1];
		const nextIndex = visibleItemsProps.order[currFirstImgIndex + 1];
		if (index !== currFirstImg) {
			if (index === prevIndex || index === nextIndex) {
				setCurrFirstImg(index);
			} else {
				const val = currFirstImgIndex - visibleItemsProps.order.indexOf(index);
				imgDifference.current = Math.abs(val);
				setActualFirst(index);
				cycleToNextImage(index);
			}
		} else {
			null;
		}
	}

	const cycleToNextImage = (actual) => {
		if (visibleItemsProps.order.indexOf(currMiddleImgRef.current) > visibleItemsProps.order.indexOf(actual)) {
			// Right side image click
			currMiddleImgRef.current = currMiddleImgRef.current - 1 > -1 ? currMiddleImgRef.current - 1 : imgList.length - 1;
			// Right side image click
			setCurrFirstImg(currMiddleImgRef.current);
		} else {
			// Left side image click
			currMiddleImgRef.current = (currMiddleImgRef.current + 1) < imgList.length ? (currMiddleImgRef.current + 1) : 0;
			// Conditions to handle cycle
			setCurrFirstImg(currMiddleImgRef.current);
		}
	}

	const constructVisibleItemsProps = () => {
		const visibleItemsProps = {};
		// To store config for items that are visibile in the carousel
		visibleItemsProps.order = [];
		let curr_center = currFirstImg;
		// Storing the Current Middle element in focus
		let timesToIterate = 0;
		// To iterate through all visible number of images.
		let zIndex = - elementsInRight;
		// We start from left to right and Zindex has to keep on increasing till middle then has to reduce.
		let xTranslate = img_width;
		// To move the element with respect to x axis
		let zTranslate = 0;
		// To reduce image size for images apart from center
		let opacity = 1;
		// ARALIKLAR BURADA = 4
		const division = (img_width * (4.4 / elementsInLeft));
		// Specifies the length that next image has to move away from with respect to current image (1.6 times the current image)
		let opacityDivider = (1 / elementsInRight);
		// minimum opacity should be 0.3 (1-0.7)
		let rightEltCount = elementsInRight;
		let leftEltCount = elementsInLeft;
		// including middle element
		let curr_center_copy = curr_center;

		while (timesToIterate < visibleImages) {
			const styles = {};
			let currImgIndex;
			let currImgIndexOnRight = true;
			// Tells if in this iteration the currently iterated image lies left to the middle image or not

			// To set properties for elements in right side
			if (timesToIterate < elementsInRight) {
				const nextIndex = curr_center - (rightEltCount);
				currImgIndex = nextIndex > -1 ? nextIndex : imgList.length - Math.abs(nextIndex);
				// Gives the rightmost elemnt in first iteration and then the subsequent elements down the iteration
				opacity = 1 - (opacityDivider * rightEltCount);
				// To assign lowest opacity to last element and increaing it till we come to middle
				zTranslate = -division * rightEltCount;
				// To increase the size of the images subsequently from last to middle
				xTranslate = img_width - (division * rightEltCount);
				// X coordinate position
				rightEltCount--;
			} else {
				// To set properties for elements in center and to left of it. All props behaves similar to right
				currImgIndexOnRight = false;
				currImgIndex = curr_center_copy;
				if (curr_center_copy + 1 >= imgList.length) {
					// to maintain cyclic carousel
					curr_center_copy = 0;
				} else {
					curr_center_copy++;
				}
				opacity = 1 - (opacityDivider * Math.abs(leftEltCount - (timesToIterate + 1)));
				zTranslate = - division * Math.abs(leftEltCount - (timesToIterate + 1));
				xTranslate = img_width + division * Math.abs(leftEltCount - (timesToIterate + 1));
			}

			// Assigning above calculated values to 'styles' object
			styles.transform = 'translateX(' + xTranslate + 'px) translateZ(' + zTranslate + 'px)';
			styles.opacity = opacity;
			styles.zIndex = currImgIndexOnRight ? zIndex++ : zIndex--;
			// To reduce zIndex while going through left elements
			visibleItemsProps.order.push(currImgIndex);
			// Push the current image number in the orders array
			visibleItemsProps[currImgIndex] = { styles };
			// pushing all previously created styles
			timesToIterate++;
		}
		durationRef.current = actualFirst === '' ? duration : ((duration / imgDifference.current));
		// duration will be user given if he clicks next image or
		// we divide the duration by number of images skipped
		setVisibleItemsProps(visibleItemsProps);
		// setting state for visible items
	}

	useEffect(() => {
		clearInterval(intervalRef.current);
		if (actualFirst !== '') {
			intervalRef.current = setInterval(() => {
				if (actualFirst !== '' && actualFirst !== currMiddleImgRef.current) {
					// If the currentimage in middle is not actually clicked image then gotoNext image
					cycleToNextImage(actualFirst);
				} else if (actualFirst !== '' && actualFirst === currMiddleImgRef.current) {
					setActualFirst('');
					imgDifference.current = 1;
					clearInterval(intervalRef.current);
					// If actual clicked and middle image are same we are all set to clear intervals, as they are unnecessary now
				}
			}, durationRef.current - 100);
			// Introduced an advance of 100ms to begin bringing nextimage
			// to middle before the previous one settles down else it looks jerky
		}
	}, [actualFirst]);

	useEffect(() => {
		constructVisibleItemsProps();
		// This constructs all css properties to the elements in visibility
		currMiddleImgRef.current = currFirstImg;
		// Need to set it here as well so while accessing inside interval it will have the latest value
	}, [currFirstImg]);

	useEffect(() => {
		if (autoNext) {
			setInterval(() => {
				const nextImg = currMiddleImgRef.current + 1 < imgList.length ? currMiddleImgRef.current + 1 : 0;
				setCurrFirstImg(nextImg);
			}, timeForNext);
		}
	}, []);

	const [middleImageKey, setMiddleImageKey] = React.useState(0);

	const loadCarousel = () => {
		return (
			<div className={`carousel__3D carousel__3D--${props.name}`}>
				<ul ref={wrapper}
					className="carousel__wrapper"
					style={{
						height: parentHeight + 'px',
						width: parentWidth + 'px',
						padding: parentPad + 'px',
						perspective: '500px'
					}}
				>
					{
						imgList.map((image, index) => {
							const displayNone = visibleItemsProps.order.indexOf(index) === -1;
							// To not to show images that are out of visibility scope
							const styles = visibleItemsProps[index] ? visibleItemsProps[index].styles : {};
							return (
								<li key={index}
									className={'carousel__item ' + (displayNone ? 'd-none' : '')}
									style={{
										...styles,
										position: 'absolute',
										transition: `all ${durationRef.current}ms ease `
									}}
									onClick={(e) => {
										changeCenter({ e, index })
										setMiddleImageKey(index)
									}}>
									<img src={image} alt={'img'} width={img_width} height={img_height} />
								</li>
							)
						})
					}
				</ul>
				<div 
					className={`carousel__infos carousel__infos--${props.name}`}>
					{props.name === "team" 

						? ( 

						props.data.map((item, key) => (
							key === middleImageKey &&
							<div key={key} className="infos__item">
								<h3>{item.mitarbeiter_name}</h3>
								<h4>{item.mitarbeiter_titel}</h4>
								<p>{item.mitarbeiter_email}</p>
								<p>{item.mitarbeiter_telefon}</p>
							</div>
						))

						):(

							props.data.map((item, key) => (
								key === middleImageKey &&
								<div key={key} className="infos__item infos__item--downloads">
									<h4>{item.name}</h4>
									<a href={item.link} target="_blank" className="singleloc__button">
											<Icon type="factsheet" name="DOWNLOAD"/>
									</a>
								</div>
							))

						)

					}
				</div>

				{
					props.name === "downloads" &&
					<div className="download__section--factsheet">
						<h2>Factsheets</h2>
						{parse(props.content.Inhalt)}
					</div>
				}

			</div>
		);
	};

	return (
		<>
			{loadCarousel()}
		</>
	);
}
export default Carousel;