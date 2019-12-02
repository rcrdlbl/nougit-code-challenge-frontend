import React from 'react'

const EntryListItem = (props) => {
    return (
        <h1>{props.entry.title} -- {props.entry.author.name}</h1>
    )
}

export default EntryListItem