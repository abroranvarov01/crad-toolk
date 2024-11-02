const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  console.log("Saving to localStorage:", state);
  localStorage.setItem("user", JSON.stringify(state.user.user));
  localStorage.setItem("cardCount", JSON.stringify(state.cardCount));
  return result;
};

export default localStorageMiddleware;


export const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

export const loadCardCountState = () => {
  try {
    const serializedState = localStorage.getItem("cardCount");
    if (serializedState === null) {
      return 0;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return 0;
  }
};
