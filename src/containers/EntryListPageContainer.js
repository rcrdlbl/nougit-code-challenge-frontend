import React, { Component } from 'react'

import EntryListContainer from './EntryListContainer'

class EntryListPageContainer extends Component {
    state = {
        sortBy: "date",
        sortTrending: false,
        completionFilter: "none"
    }
    
    render() {
        return (
            <EntryListContainer />
        )
    }
}

export default EntryListPageContainer