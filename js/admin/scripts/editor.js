async function getSinglePost(id) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
  );
  const data = await response.json();
  return data;
}

async function editor() {
  const id = new URLSearchParams(location.search).get('id');
  const form = document.querySelector('.editor');
  const publishBtn = document.querySelector('.editor .btn');

  if (id) {
    publishBtn.textContent = 'Atualizar';
    const { title, body } = await getSinglePost(id);
    form.title.value = title;
    form.content.value = body;
  }

  async function handleClick(e) {
    e.preventDefault();
    if (id) {
      console.log('atualizar post');
    } else {
      console.log('novo post');
    }
  }

  publishBtn.addEventListener('click', handleClick);
}

export default editor;
