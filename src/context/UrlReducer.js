const UrlReducer = (state, action) => {
  switch (action.type) {
    case "SET": {
      return {
        Url: action.payload,
      };
    }
    default:
      return state;
  }
};

export default UrlReducer;
