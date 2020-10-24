import React from 'react'

const SearchItem = (props) => {
    return(
        <div id={props.id} className="search-item" onClick={props.showDetail}>
            <h3 className="search-item__name">{props.name}</h3>
            <img src={props.img} alt={props.name}/>
        </div>
    )
}

export default SearchItem