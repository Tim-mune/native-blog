const reducer = (state, action) => {
  if (action.type === "ADDARRAY")
    return {
      ...state,
      items: [
        ...state.items,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ],
    };
  if (action.type === "DELETEARRAY") {
    const filtered = state.items.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, items: filtered };
  }
  if (action.type === "UPDATE") {
    let itemToEdit = state.items.find((item) => item.id == action.payload.id);
    let newArray = state.items.filter((item) => item.id !== action.payload.id);
    itemToEdit.title = action.payload.title;
    itemToEdit.content = action.payload.content;
    return { ...state, items: [...state.items, ...newArray, itemToEdit] };
  }
  if (action.type === "GETBLOGS") {
    return { ...state, items: action.payload };
  }
};
export default reducer;
