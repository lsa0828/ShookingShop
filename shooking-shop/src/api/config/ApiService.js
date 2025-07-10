import { API_BASE_URL } from "./api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method
  };
  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options).then((response) => {
    if (response.status === 200) {
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.startsWith("image/")) {
        return response.blob().then(blob => {
          const reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        });
      }
      const newToken = response.headers.get("X-ACCESS-TOKEN");
      if (newToken) {
        localStorage.setItem("ACCESS_TOKEN", newToken);
      }
      return response.json();
    } else if (response.status === 403 || response.status === 401) {
      window.location.href = "/login";
    } else {
      return Promise.reject(response);
    }
  }).catch((error) => {
    console.log("http error");
    console.log(error);
    return null;
  });
}