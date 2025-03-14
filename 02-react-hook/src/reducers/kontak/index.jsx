const initialState = [];

const kontak = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_KONTAK":
      return [...state, payload];

    case "REMOVE_KONTAK":
      return state.filter((kontak) => kontak.id !== payload);

    default:
      return state;
  }
};

export default kontak;
