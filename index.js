const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function eliminaNodos(){
  const listaEl = document.querySelectorAll(".lista li")
  listaEl.forEach((el)=>{
    el.remove()
  })
}

function creaNodosAgregaNodos(cosasQueAprendimos){
  const listaEl = document.querySelector(".lista")
  for (const item of cosasQueAprendimos) {
    const newLiEle = document.createElement("li")
    newLiEle.textContent = item.tema;
    newLiEle.classList.add(item.class || "item");
    listaEl.appendChild(newLiEle);
    console.log(listaEl)
  }  
}


function main() {
  eliminaNodos();
  creaNodosAgregaNodos(cosasQueAprendimos);
}

main();
