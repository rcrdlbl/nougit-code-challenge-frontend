import React, { Component } from 'react'

class EntryListPageContainer extends Component {
    state = {
        sortBy: "Date",
        sortTrending: false,
        completionFilter: "none"
    }
    
    render() {
        return (
            <div>
                Entry List Page Container
            </div>
        )
    }
}

export default EntryListPageContainer