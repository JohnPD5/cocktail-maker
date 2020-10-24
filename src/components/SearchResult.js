import React from 'react'

const SearchResult = (props) => {
	return(
		<ul className="search-result">
			{
				props.results.map(c => (
					<li key={c.idDrink}>{c.strDrink}</li>
				))
			}
		</ul>
	)
}

export default SearchResult