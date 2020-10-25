import React from 'react'
import '../style/Header.css'
import logo from '../images/app-logo.jpeg'

const Header = () => {
	return(
		<header className="App-header">
			<img className="logo" src={logo} alt="app-logo"/>
			<h1 className="title">Cocktail Maker</h1>
		</header>
	)
}

export default Header