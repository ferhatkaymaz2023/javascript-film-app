class UI
{

    static clearAllFilmsToUI()
    {
        const filmList = document.getElementById('films');
        while(filmList.firstElementChild !== null)
        {
            filmList.removeChild(filmList.firstElementChild);
        }
    }

    static deleteFilmFromUI(e)
    {
        e.parentElement.parentElement.remove();
    }

    static loadAllFilms(films)
    {
        let filmList = document.getElementById('films');

        films.forEach((film) => {
            filmList.innerHTML += `
                <tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>
                `;
        });
    }

    static addTodoToUI(newTodo)
    {
        let filmList = document.getElementById('films');

        filmList.innerHTML += `
        <tr>
            <td><img src="${newTodo.url}" class="img-fluid img-thumbnail"></td>
            <td>${newTodo.title}</td>
            <td>${newTodo.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `;

    }

    static clearInputs(titleElement,directorElement,urlElement)
    {
        titleElement.value = '';
        directorElement.value = '';
        urlElement.value = '';
    }

    static showMessages(type,message) 
    {
        const firstCardBody = document.querySelectorAll('.card-body')[0];
        const div = document.createElement('div');
        div.className = `alert alert-${type}`;
        div.textContent = message;
        firstCardBody.appendChild(div);
        setTimeout(() => { div.remove() },1000);
    }

}