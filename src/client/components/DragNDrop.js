import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

const DragNDrop = ({ text, messages }) => {

	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader()

			reader.onabort = () => console.log(messages[1].text)
			reader.onerror = () => console.log(messages[1].text)
			reader.onload = () => {
				// Do whatever you want with the file contents
				const binaryStr = reader.result
				console.log(binaryStr)
			}
			reader.readAsArrayBuffer(file)
		})

	}, [])
	
	const { getRootProps, getInputProps } = useDropzone({ onDrop })
	const textParts = text.split(' ');

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<span>{textParts[0]}</span>
			<span>{textParts[1]}</span>
			<span>{`${textParts[2]} ${textParts[3]}`}</span>
		</div>
	)
}

export default DragNDrop;