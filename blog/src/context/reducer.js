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
};
export default reducer;
