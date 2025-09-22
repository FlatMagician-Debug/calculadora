const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const botones = document.querySelectorAll("button");

// Función flecha que realiza la operación
const calcular = (op) => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    resultado.textContent = "⚠️ Ingresa números";
    return;
  }

  let res;
  switch (op) {
    case "+": res = a + b; break;
    case "-": res = a - b; break;
    case "*": res = a * b; break;
    case "/": res = b !== 0 ? a / b : "∞"; break;
    case "%": res = a % b; break; // módulo
    case "pow": res = Math.pow(a, b); break;
    default: res = "Error";
  }

  resultado.textContent = res;
};

// Asignar eventos con addEventListener
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const operacion = boton.getAttribute("data-op");
    calcular(operacion);
  });
});
