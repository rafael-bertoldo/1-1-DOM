const root = document.getElementById("root");
const button = document.getElementById("btn");

function page() {
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const span = document.createElement("span");
  h1.innerText = "1:1 Técnica de DOM";
  h2.innerText = "Aplicador: <Nome do Coach>";
  span.innerText = "Dev: <Nome do(a) Dev>";

  root.appendChild(h1);
  root.appendChild(h2);
  root.appendChild(span);
}

button.addEventListener("click", page);
