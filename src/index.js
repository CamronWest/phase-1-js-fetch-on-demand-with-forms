

const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
    
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
         const summary = document.querySelector("#movieDetails > p");
         const title= document.querySelector("#movieDetails > h4");

         title.innerText = data.title;
         summary.innerText = data.summary;
    });
  });
};

document.addEventListener('DOMContentLoaded', init);