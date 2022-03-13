async function axiosData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

axiosData();
