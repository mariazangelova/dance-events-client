const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EVENTS_SUCCESS":
      return [...action.payload];
    default:
      return state;
  }
};
