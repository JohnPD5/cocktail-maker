import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class Main extends Component {
	constructor(props) {
		super(props)
		this.cocktailDbApi = "https://www.thecocktaildb.com/api/json/v1/1/filter.php"
		this.cocktailDetailApi = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"
		this.search = this.search.bind(this)
		this.showDetail = this.showDetail.bind(this)
		this.setDetails = this.setDetails.bind(this)
		this.state = {
			view: "list",
			alcoholic: null,
			ingredient: "",
			cocktails: [],
			currentCocktail: {
				name: "",
				instructions: "",
				imageUrl: "",
				ingredients: {}
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
				.then(data => this.setState({cocktails: data.drinks, view: "list"}))
				.catch(err => console.error(err))
		}
	}

	showDetail(e) {
		let targetItem = null
		if(e.target.matches(".search-item")) {
			targetItem = e.target
		} else {
			targetItem = e.target.closest(".search-item")
		}

		const reqUrl = `${this.cocktailDetailApi}?i=${targetItem.id}`
		fetch(reqUrl)
			.then(res => res.json())
			.then(data => this.setDetails(data.drinks[0]))
			.catch(err => console.error(err))

		this.setState({view: "detail"})
	}

	setDetails(data) {
		const ingrNum = 15
		let ingredients = {}

		for(let i = 1; i <= ingrNum; i++) {
			const ingrName = data[`strIngredient${i}`]
			const ingrMeasure = data[`strMeasure${i}`]

			if(ingrName && ingrMeasure) {
				ingredients[ingrName] = ingrMeasure
			}
		}

		console.log("name>>", data.strDrink)
		console.log("ingredients>>", ingredients)
		console.log("glass>>", data.strGlass)
		console.log("type>>", data.strAlcoholic)
		console.log("instructions>>", data.strInstructions)
	}

	render() {
		return(
			<main className="App-Main">
				<SearchBar onSearch={this.search}/>
				<SearchResults results={this.state.cocktails} showDetail={this.showDetail}/>
			</main>
		)
	}
}

export default Main