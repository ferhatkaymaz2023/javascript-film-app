const form = document.getElementById('film-form');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');


addEventListeners();

function addEventListeners()
{
    form.addEventListener('submit',addTodo);
}

function addTodo(e)
{   
    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();

    if(title === '' || director === '' || url === '')
    {

    }
    else 
    {
        const newFilm = new Film(title,director,url);
        UI.addTodoToUI(newFilm);
    }

    e.preventDefault();
}