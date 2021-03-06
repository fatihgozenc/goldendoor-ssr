import React from 'react';
import LoopingRow from './LoopingRow'

const LoopingGallery = ({ data, windowWidth, windowHeight }) => {

	//FUNCTION FOR DISTRIBUTING DATA INTO EQUAL ROWS FROM GIVEN JSON.
	const distributeImageData = (arr, rows) => {
		const rowImgCount = Math.ceil((arr.length) / rows);
		const emptyData = Array.from({ length: rows }, () => [0]);
		const slicedData = emptyData.map((x, key) => {
			if (key === 0) {
				return arr.slice(key, rowImgCount)
			} else if (key === rows - 1) {
				return arr.slice((rowImgCount * key), -1)
			} else {
				return arr.slice((rowImgCount * key), (rowImgCount * (key + 1)))
			}
		})
		return slicedData;
	};

	//I WANT 4 COLUMNS SO THIS NEEDS TO BE TYPED.
	const loopingRowData = distributeImageData(data, windowWidth > 1600 ? 4 : 3);

	return (
		<>
		<div className="looping_gallery">
			{loopingRowData.map((rowData, key) => (
				<LoopingRow 
					windowWidth={windowWidth} 
					windowHeight={windowHeight} 
					key={key} 
					rowNumber={key + 1} 
					data={rowData} />
			))}
		</div>
		</>
	)
};

export default LoopingGallery;