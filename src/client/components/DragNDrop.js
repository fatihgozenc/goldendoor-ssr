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

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<p>{text}</p>
		</div>
	)
}

export default DragNDrop;