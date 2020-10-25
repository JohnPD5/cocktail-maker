import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Detail from './Detail'

class Main extends Component {
	constructor(props) {
		super(props)
		this.cocktailDbApi = "https://www.thecocktaildb.com/api/json/v1/1/filter.php"
		this.cocktailDetailApi = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"
		this.search = this.search.bind(this)
		this.getDetail = this.getDetail.bind(this)
		this.setDetails = this.setDetails.bind(this)
		this.back = this.back.bind(this)
		this.state = {
			view: "list",
			cocktails: [],
			currentCocktail: {
				id: null,
				name: "",
				instructions: "",
				imgUrl: "",
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

	getDetail(e) {
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

	getIngredients(data) {
		const ingrNum = 15
		let ingredients = {}

		for(let i = 1; i <= ingrNum; i++) {
			const ingrName = data[`strIngredient${i}`]
			const ingrMeasure = data[`strMeasure${i}`]

			if(ingrName && ingrMeasure) {
				ingredients[ingrName] = ingrMeasure
			}
		}

		return ingredients
	}

	setDetails(data) {
		const info = {
			id: data.idDrink,
			name: data.strDrink,
			imgUrl: data.strDrinkThumb,
			type: data.strAlcoholic,
			glass: data.strGlass,
			ingredients: this.getIngredients(data),
			instructions: data.strInstructions
		}

		this.setState({currentCocktail: Object.assign({}, info)})
	}

	back() {
		if(this.state.view !== "list") {
			this.setState({view: "list"})
		}
	}

	render() {
		let view
		if(this.state.view === "list") {
			view = ( <SearchResults results={this.state.cocktails} getDetail={this.getDetail}/> )
		} else if(this.state.view === "detail") {
			view = ( <Detail info={this.state.currentCocktail}/> )
		}

		return(
			<main className="App-Main">
				<SearchBar onSearch={this.search} onBack={this.back}/>
				{view}
			</main>
		)
	}
}

export default Main