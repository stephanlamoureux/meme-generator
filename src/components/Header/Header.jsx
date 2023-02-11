import './Header.css'
import trollFace from '../../assets/images/troll-face.webp'

export default function Header() {
	return (
		<header>
			<img src={trollFace} alt="troll face meme image" className="troll-face" />
			<h2 className="header-title">Meme Generator</h2>
			<h3 className="header-subtitle">Create your own memes.</h3>
		</header>
	)
}
