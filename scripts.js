// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const characters = /\D+/g;
  amount.value = amount.value.replace(characters, "");
});

// Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  console.log(currency.value);
};
