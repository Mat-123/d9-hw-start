const initialState = {
  savedCompanies: {
    content: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPANY":
      return {
        ...state,
        savedCompanies: {
          ...state.savedCompanies,
          content: state.savedCompanies.content.concat(action.payload),
          //   content: [...state.savedCompanies.content, action.payload]
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
