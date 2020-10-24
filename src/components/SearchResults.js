import React from 'react'
import SearchItem from './SearchItem'

const SearchResults = (props) => {
	return(
		<ul className="search-result">
			{
				props.results.map(c => (
					<li key={c.idDrink}>
						<SearchItem
							name={c.strDrink}
							id={c.idDrink}
							img={c.strDrinkThumb}
							showDetail={props.showDetail}/>
					</li>
				))
			}
		</ul>
	)
}

export default SearchResults