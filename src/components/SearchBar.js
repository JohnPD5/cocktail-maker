import React from 'react'

const SearchBar = (props) => {
	return(
		<React.Fragment>
			<button className="back-button" onClick={props.onBack}>Back</button>
			<form className="search-bar" onSubmit={props.onSearch}>
				<input id="search-bar__text" className="search-bar__text" type="text"/>
				<input id="search-bar__submit" className="search-bar__submit" type="submit" required/>
			</form>
		</React.Fragment>
	)
}

export default SearchBar