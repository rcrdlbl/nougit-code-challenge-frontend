import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import EntryList from '../components/EntryList'

const ENTRIES_QUERY = gql`
    query Entries($sortEntriesBy: String, $first: Int, $offset: Int) {
        getEntries(sortEntriesBy: $sortEntriesBy, first: $first, offset: $offset) {
            totalCount
            entries{
                title
                author {
                    name
                    picture
                    score
                }
                isTrending
                description
                numComments
                thumbnail
                codeSubmissionTotal
                pledgeGoal
                pledgeTotal
                pledgerCount
                status
                date
                numComments
                popularity
            }
        }
    }
`

function EntryListContainer(props) {
    // Query Hook Setup
    const {data, loading, error} = useQuery(
        ENTRIES_QUERY, {
            variables: {
                sortBy: props.sortBy,
                sortTrending: props.sortTrending,
            }
        }
    )

    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>

    console.log(data)

    return (
        <>
          <EntryList entries={data.getEntries.entries} />
        </>
    )
}

export default EntryListContainer