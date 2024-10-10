
const button = document.getElementById("btnBuscar");
const container = document.getElementById("contenedor");

const showElements = (data) =>{
    container.innerHTML = '';

    for (const item of data) {
        // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
        container.innerHTML += `
        <div class="card" style="">
          <img src="${item.links[0].href}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.data[0].title}</h5>
            <p class="card-text">${item.data[0].description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${item.data[0].date_created}</li>
          </ul>
        </div>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
      }

}

button.addEventListener("click", () =>{
    const input = document.getElementById("inputBuscar");
    const inputValue = input.value;
    const DATA_URL = `https://images-api.nasa.gov/search?q=${inputValue}`;

    fetch(DATA_URL)
    .then(response =>{

      if (!response.ok){
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();

    })
    .then(data => {
        showElements(data.collection.items);
        console.log(data.collection.items);
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud:', error);
    });

})
