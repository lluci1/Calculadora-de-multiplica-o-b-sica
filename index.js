//Comandos para capturar os elementos no HTML

//Abaixo a captura do elemento do primeiro input:
const inputOne = document.getElementById("inputOne");

//Abaixo a captura do elemento do segundo input:
const inputTwo = document.getElementById("inputTwo");

//Abaixo a captura do botão que faz o nosso calculo:
const formButton = document.getElementById("form-button");

//Abaixo a captura do formulario completo:
const form = document.getElementById("question-form");

function calculateMultiplicacao() {
  const valueOne = Number(inputOne.value);
  const valueTwo = Number(inputTwo.value);

  const multiplicação = valueOne * valueTwo;
  alert(`O resultado da multiplicação é: ${multiplicação}`);

  console.log("A multiplicação no console.log é", multiplicação);
}
//Abaixo a captura do evento de clique no botão:
form.addEventListener('submit', (e) => {
  e.preventDefault();
  calculateMultiplicacao();
});