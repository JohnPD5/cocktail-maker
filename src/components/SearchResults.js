import React from 'react'
import SearchItem from './SearchItem'
import '../style/SearchResults.css'

const SearchResults = (props) => {
	return(
		<ul className="search-results">
			{
				props.results.map(c => (
					<li key={c.idDrink} className="search-results__item">
						<SearchItem
							name={c.strDrink}
							id={c.idDrink}
							img={c.strDrinkThumb}
							getDetail={props.getDetail}/>
					</li>
				))
			}
		</ul>
	)
}

export default SearchResults