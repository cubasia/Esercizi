import fetch from "node-fetch";

var fetchData;
function fetchPost() {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((response) => {
        fetchData = response;
      });
  } catch (err) {
    console.log(err);
  }
}
fetchPost();
console.log(fetchData);
