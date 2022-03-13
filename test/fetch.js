async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  console.log(response.body);
}

fetchData();
