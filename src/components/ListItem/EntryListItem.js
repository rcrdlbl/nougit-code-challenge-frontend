import React from "react";
import styled from "styled-components";

const SingleEntry = styled.div`
  border: 1px solid;
  font-size: 1.5rem;
  padding: 20px;
  margin: 20px;
`;

const EntryListItem = ({ entry }) => {
  return (
    <SingleEntry>
      {entry.title} -- {entry.author.name}
    </SingleEntry>
  );
};

export default EntryListItem;
