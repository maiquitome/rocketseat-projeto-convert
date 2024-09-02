const amount = document.getElementById("amount");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const characters = /\D+/g;
  amount.value = amount.value.replace(characters, "");
});
