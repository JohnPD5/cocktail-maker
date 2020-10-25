import React from 'react'
import '../style/SearchItem.css'

const SearchItem = (props) => {
    return(
        <div id={props.id} className="search-item" onClick={props.getDetail}>
            <img src={props.img} alt={props.name}/>
            <h3 className="search-item__name">{props.name}</h3>
        </div>
    )
}

export default SearchItem