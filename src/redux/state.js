console.log(localStorage.getItem("user"));
const user = JSON.parse(null);

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state" + user?.sub);
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state" + user?.sub, serializedState);
  } catch {}
};
