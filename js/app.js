const form = document.getElementById('film-form');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');


addEventListeners();

function addEventListeners()
{
    form.addEventListener('submit',addTodo);
    document.addEventListener('DOMContentLoaded',() => {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    secondCardBody.addEventListener('click',deleteFilm);
}

function deleteFilm(e)
{
    if(e.target.id === 'delete-film')
    {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showMessages('success','Film, Başarıyla silinmiştir.');
    }
}



function addTodo(e)
{   
    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();

    if(title === '' || director === '' || url === '')
    {
        UI.showMessages('danger','Boş değer giridiniz...');
    }
    else 
    {
        const newFilm = new Film(title,director,url);
        UI.addTodoToUI(newFilm);
        Storage.addFilmToStorage(newFilm);

        UI.showMessages('success','Film, eklenmiştir ...');
    }

    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}