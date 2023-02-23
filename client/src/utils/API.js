// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// save  data for a logged in user
export const saveProduct = (data, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

// remove saved book data for a logged in user
export const deleteProduct = (productId, token) => {
  return fetch(`/api/users/products/${productId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

// remove saved book data for a logged in user
// export const findAllShirt = async () => {
//   return fetch(`/api/products`, {
//     method: 'GET'
//     }
//   ).then(function (response) {
//     return response.json();
//   });

// };

export const findAllShirt = async () =>
  await fetch(`/api/products`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
