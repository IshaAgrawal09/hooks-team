const reducer = (state, action) => {
//   debugger;
  switch (action.type) {
    case "add":
      let newState = state;
      newState[action.payload.field] = action.payload.val;
      return { ...newState };

    default:
      throw new Error();
  }
};

export default reducer;
