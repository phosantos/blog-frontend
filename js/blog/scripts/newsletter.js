function newsletter() {
  const form = document.querySelector('.newsletter');
  const btn = form.querySelector('button');

  async function handleClick(e) {
    e.preventDefault();
    console.log(form.name.value);
    console.log(form.email.value);
  }

  btn.addEventListener('click', handleClick);
}

export default newsletter;
