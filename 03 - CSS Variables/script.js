const inputs = document.querySelectorAll('.controls input');
// querySelector retorna uma NodeList, que é como um array, mas com menos opções

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  // HTMLElement.dataset permite acessar os atributos de um elemento (definido no HTML:  data-sizing="px")
  // || '' significa que se não houver atributo, não retorna nada

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // setProperty altera propriedades do CSS
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
