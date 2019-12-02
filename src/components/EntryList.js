import React from "react";
import hash from "object-hash";
import styled from "styled-components";
import EntryListItem from "./ListItem/EntryListItem";

const EntryListWrapper = styled.div`
  margin: 0 auto;
  max-width: 50rem;
`;

// This function is pretty self-explanatory except for one thing:
// I'm choosing to treat the provided data as immutable,
// and there's no ID attached to the entry objects.
// While each entry object is unique, some entries have duplicate values.
// SHA-1 Hashes are used to create a unique-ish key for each list item to use.
const buildList = entries =>
  entries.map(entry => {
    return <EntryListItem key={hash(entry)} entry={entry} />;
  });

const EntryList = ({ entries }) => {
  return <EntryListWrapper>{buildList(entries)}</EntryListWrapper>;
};

export default EntryList;
