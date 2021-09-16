const estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
"Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará",
"Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte",
"Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];
function selectEstados() {
  const seletor = document.getElementById("selec-estado");
  for (let i = 0; i < estados.length; i += 1) {
    const elem = document.createElement("option");
    elem.innerText = estados[i];
    elem.value = estados[i];
    seletor.appendChild(elem);
  }

}

selectEstados();