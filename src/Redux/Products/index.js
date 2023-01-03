import { getReducerType } from "../../utils";

const getType = (key, after) => getReducerType("products", key, after);

const initialState = {
    items: [],
};

const car = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        items: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default car;
