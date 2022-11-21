import { postNewsletter } from '../../etc/api.js';

function newsletter() {
  const form = document.querySelector('.newsletter');
  const btn = form.querySelector('button');

  async function handleClick(e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;

    //validacao

    const { url, options } = postNewsletter({ name, email });

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        form.name.value = '';
        form.email.value = '';

        //mensagem falando que deu certo
      } else {
        //mensagem falando que o email já foi cadastrado
      }
    } catch (error) {
      console.log(error);
    }
  }

  btn.addEventListener('click', handleClick);
}

export default newsletter;
