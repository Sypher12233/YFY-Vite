// importing allEventsData array from data file;

import allEventsData from "./data";

const initialState = {
  // events slice
  allEvents: [
    {
      id: 0,
      date: "",
      time: "",
      venue: "",
      speaker: "",
    },
    {
      id: 1,
      date: "",
      time: "",
      venue: "",
      speaker: "",
    },
  ],
  // favorites slice
  favoriteEvents: [],
  // searchTerm slice
  searchTerm: "",
};

// Dispatched when the user types in the search input field;
// Sends search term to the store;
export const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};

// Dispatched when the user presses the clear search button;
export const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
  };
};

// Dispatched when the user loads the events page;
// Sends the allEvents array to the store;
export const loadEvents = () => {
  return {
    type: "allEvents/getEvents",
  };
};

// Dispatched when the user click on the heart icon of
// an event in the "All Events" section;
// Sends the event object to the store;
export const addFavoriteEvent = (event) => {
  return {
    type: "allEvents/addFavoriteEvent",
    payload: event,
  };
};

// Dispatched when the user clicks on the broken heart icon
// of an event in the "Favorite Events" section;
// Sends the event object to the store;
export const removeFavoriteEvent = (event) => {
  return {
    type: "allEvents/removeFavoriteEvent",
    payload: event,
  };
};
