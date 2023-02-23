import { useState } from 'react'
import memesData from './memeData.js'
import './Meme.css'

export default function Form() {
	const [memeImage, setMemeImage] = useState('')

	function getMemeImage() {
		const memesArray = memesData.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		setMemeImage(memesArray[randomNumber].url)
	}

	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form-input" />
				<input type="text" placeholder="Bottom text" className="form-input" />
				<button type="submit" className="form-button" onClick={getMemeImage}>
					Get a new meme image 🖼️
				</button>
			</div>
			<img src={memeImage} className="meme-image" />
		</main>
	)
}
