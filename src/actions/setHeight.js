import types from "./types.js";

const setHeight = (height) => {
  return {
    type: types.SET_HEIGHT,
    payload: height,
  };
};

export default setHeight;
