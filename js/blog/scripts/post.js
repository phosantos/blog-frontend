import { getPost } from '../../etc/api.js';

async function getSinglePost() {
  const id = new URLSearchParams(location.search).get('id');
  const postArea = document.querySelector('.single-post');
  const title = postArea.querySelector('h1');
  const subheading = postArea.querySelector('h2');
  const body = postArea.querySelector('.content');
  const { url } = getPost(id);

  let post;
  try {
    const response = await fetch(url);

    if (response.status === 404) {
      location.href = '/index.html';
    } else {
      post = await response.json();
    }
  } catch (error) {
    console.log(error);
  }

  document.querySelector('title').innerText = 'mb | ' + post.title;
  title.innerText = post.title;
  subheading.innerText = post.subheading;
  body.innerHTML = post.body;
}

export default getSinglePost;
