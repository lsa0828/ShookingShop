import { call } from "./config/ApiService"

export const fetchPostRegister = (registerDTO) => {
  return call('/api/member/register', 'POST', registerDTO)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchPostLogin = (loginRequest) => {
  return call('/api/member/login', 'POST', loginRequest)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchPostValidate = () => {
  return call('/api/member/validate', 'POST', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    })
}

export const fetchPostLogout = () => {
  return call('/api/me/logout', 'POST', null);
}

export const fetchGetMyInfo = () => {
  return call('/api/me', 'GET', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    })
}