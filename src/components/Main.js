import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class Main extends Component {
	constructor(props) {
		super(props)
		this.cocktailDbApi = "https://www.thecocktaildb.com/api/json/v1/1/filter.php"
		this.cocktailDetailApi = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"
		this.search = this.search.bind(this)
		this.state = {
			view: "list",
			alcoholic: null,
			ingredient: "",
			cocktails: [],
			currentCocktail: {
				name: "",
				instructions: "",
				imageUrl: "",
				ingredients: ""
			},
		}
	}

	componentDidUpdate() {
		console.log('INFO::ComponentUpdate', this.state)
	}

	search(e) {
		e.preventDefault()
		const form = e.target
		const inputVal = form.querySelector('#search-bar__text').value.trim()

		if(inputVal && inputVal !== "") {
			const reqUrl = `${this.cocktailDbApi}?i=${inputVal}`
			fetch(reqUrl)
				.then(res => res.json())
				.then(data => this.setState({cocktails: data.drinks}))
				.catch(err => console.error(err))
		}
	}

	render() {
		return(
			<main className="App-Main">
				<SearchBar onSearch={this.search}/>
				<SearchResults results={this.state.cocktails}/>
			</main>
		)
	}
}

export default Main