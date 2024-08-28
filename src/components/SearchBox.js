import React from "react"

export default function SearchBox(props) {
    return (
        <input 
            className="input"
            type="search" 
            placeholder="search robots"
            onChange={props.onSearch}
        />

    )
}