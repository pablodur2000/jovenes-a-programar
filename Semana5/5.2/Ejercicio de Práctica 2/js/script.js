const DATA = [
  { name: "Laura", lastname: "Hightower" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Joaquina", lastname: "Hand" },
  { name: "Maria", lastname: "White" },
];

document.addEventListener("DOMContentLoaded", function () {

  let container = document.getElementById("container");

  DATA.forEach(dato =>{
    container.innerText += `${dato.name} ${dato.lastname} \n`;
  });

});
