import React, { Component } from "react";

import EntryListContainer from "./EntryListContainer";

class EntryListPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: "date",
      sortTrending: false,
      completionFilter: "none"
    };
  }

  render() {
    const { sortBy, sortTrending, completionFilter } = this.state;
    return (
      <EntryListContainer
        sortBy={sortBy}
        sortTrending={sortTrending}
        completionFilter={completionFilter}
      />
    );
  }
}

export default EntryListPageContainer;
