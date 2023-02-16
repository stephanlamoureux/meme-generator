import './Meme.css'

export default function Form() {
	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form-input" />
				<input type="text" placeholder="Bottom text" className="form-input" />
				<button type="submit" className="form-button">
					Get a new meme image 🖼️
				</button>
			</div>
		</main>
	)
}
