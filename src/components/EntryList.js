import React, { Component } from 'react'
import hash from 'object-hash'
import styled from 'styled-components'
import EntryListItem from './ListItem/EntryListItem.js'

class EntryList extends Component {

    // This function is pretty self-explanatory except for one thing:
    // I'm choosing to treat the provided data as immutable, and there's no ID attached to the entry objects.
    // While each entry object is unique, some entries have duplicate values.
    // I decided to generate SHA-1 Hashes to create a unique-enough key for each list item to use.
    buildList(entries) {
        return entries.map((entry) => <EntryListItem key={hash(entry)} entry={entry}/>)
    }

    render() {
        return(
            <>
                { this.buildList(this.props.entries) }
            </>
        )
    }
}

export default EntryList