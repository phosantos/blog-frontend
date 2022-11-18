async function getSinglePost() {
  const id = new URLSearchParams(location.search).get('id');
  const postArea = document.querySelector('.single-post');
  const title = postArea.querySelector('h1');
  const subheading = postArea.querySelector('h2');
  const content = postArea.querySelector('.content');

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
  );
  const data = await response.json();

  document.querySelector('title').innerText = 'mb | ' + data.title;
  title.innerText = data.title;
  subheading.innerText = data.title;
  content.innerHTML = data.body;
}

export default getSinglePost;
