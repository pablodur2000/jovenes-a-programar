document.addEventListener("DOMContentLoaded", function () {
  
  let paragraph = document.getElementById("lorem");
  let button = document.getElementById("highlightBtn");

  button.addEventListener('click' , () => {
    paragraph.classList.toggle("highlight");
  });

});
