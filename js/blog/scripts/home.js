function createPostElement(id, title, subheading, date) {
  const article = document.createElement('article');
  article.classList.add('post');
  article.innerHTML = `<a href="/post/?id=${id}"><h1 class="title">${title}</h1><h2 class="subheading">${subheading}</h2></a><span class="date">${date}</span>`;

  return article;
}

async function getAllPosts() {
  document.querySelector('title').innerText = 'mb | Home';
  const postsArea = document.querySelector('.posts');

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  data.forEach(({ id, title, body }) =>
    postsArea.appendChild(createPostElement(id, title, body, '18 Nov')),
  );
}

export default getAllPosts;
