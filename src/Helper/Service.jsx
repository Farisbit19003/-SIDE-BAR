export const base_url = import.meta.env.VITE_PUBLIC_API;

//GET Function

export function GetFunction(endPoint) {
  let auth = localStorage.getItem('auth');
  return new Promise((resolve, reject) => {
    fetch(base_url + endPoint, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + auth.token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//POST Function

export function PostFunction(endPoint, values) {
  let auth = localStorage.getItem('auth');
  return new Promise((resolve, reject) => {
    fetch(base_url + endPoint, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        Authorization: 'Bearer ' + auth?.token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function PostFunctionUpload(endPoint, values) {
  let token = localStorage.getItem('user_token');
  return new Promise((resolve, reject) => {
    fetch(base_url + endPoint, {
      method: 'POST',
      body: values,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function DeleteFunction(endPoint) {
  let token = localStorage.getItem('user_token');
  return new Promise((resolve, reject) => {
    fetch(base_url + endPoint, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//PUT Function

export function PutFunction(endPoint, values) {
  let token = localStorage.getItem('user_token');
  return new Promise((resolve, reject) => {
    fetch(base_url + endPoint, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}