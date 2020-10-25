import React from 'react'
import '../style/SearchBar.css'

const SearchBar = (props) => {
	return(
		<div className="search-bar">
			<button className="search-bar__back" onClick={props.onBack}></button>
			<form className="search-bar__form" onSubmit={props.onSearch}>
				<input id="search-bar__text" className="search-bar__text" type="text" required/>
				<input id="search-bar__submit" className="search-bar__submit" type="submit" value=""/>
			</form>
		</div>
	)
}

export default SearchBar