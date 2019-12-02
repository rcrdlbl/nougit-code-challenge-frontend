import React, { Component } from 'react'
import styled from 'styled-components'
import EntryListItem from './ListItem/EntryListItem.js'

class EntryList extends Component {
    buildList(entries) {
        return entries.map((entry) => <EntryListItem key={entry.date} entry={entry}/>)
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