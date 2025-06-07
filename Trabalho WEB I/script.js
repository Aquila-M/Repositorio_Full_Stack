const input = document.getElementById("item-input");
const button = document.getElementById("add-btn");
const lista = document.getElementById("lista");
const alerta = document.getElementById("alerta");
const fecharAlerta = document.getElementById("fechar-alerta");

button.onclick = () => {
  const valor = input.value.trim();
  if (valor === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <input type="checkbox" />
      ${valor}
    </div>
    <button class="remove-btn">🗑️</button>
  `;

  li.querySelector(".remove-btn").onclick = () => {
    lista.removeChild(li);
    alerta.classList.remove("hidden");
  };

  lista.appendChild(li);
  input.value = "";
  input.focus();
};

fecharAlerta.onclick = () => {
  alerta.classList.add("hidden");
};
