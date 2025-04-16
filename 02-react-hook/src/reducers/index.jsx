import kontakReducers from "./kontak";

const initialState = {
  getKontakResult: false,
  getKontakLoading: false,
  getKontakError: false,
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((acc, key) => {
      return {
        ...acc,
        [key]: reducers[key](state[key], action),
      };
    }, {});
  };
};

const appReducers = combineReducers({
  kontakReducers,
});

export { initialState, appReducers, combineReducers };
