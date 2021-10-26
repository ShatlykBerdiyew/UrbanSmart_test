import {
  INPUT_PROFIL_NAME,
  INPUT_PROFIL_PASSWORD,
  BTN_STATUS_CHANGE,
} from "./types";

export function inputName(name) {
  return {
    type: INPUT_PROFIL_NAME,
    payload: name,
  };
}

export function inputPassword(password) {
  return {
    type: INPUT_PROFIL_PASSWORD,
    payload: password,
  };
}

export function btnStatusChange(status) {
  return {
    type: BTN_STATUS_CHANGE,
    payload: status,
  };
}

