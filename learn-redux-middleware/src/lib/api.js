export const getPost = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = (id) =>
  fetch("https://jsonplaceholder.typicode.com/users");
