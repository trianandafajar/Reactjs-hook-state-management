const initialState = [];

const kontakReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_KONTAK":
      return [...state, action.payload];

    case "REMOVE_KONTAK":
      return state.filter(kontak => kontak.id !== action.payload);

    default:
      return state;
  }
};

export default kontakReducer;
