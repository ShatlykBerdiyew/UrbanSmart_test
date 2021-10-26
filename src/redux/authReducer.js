import {
  BTN_STATUS_CHANGE,
  INPUT_PROFIL_NAME,
  INPUT_PROFIL_PASSWORD,
} from "./types";

const initialState = {
  profilName: "developer21",
  profilPassword: "123456",
  btnAuth: true,
  inputName: "",
  inputPassword: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_PROFIL_NAME:
      return { ...state, inputName: action.payload };
    case INPUT_PROFIL_PASSWORD:
      return { ...state, inputPassword: action.payload };
    case BTN_STATUS_CHANGE:
      return { ...state, btnAuth: action.payload };
    default:
      return state;
  }
};
