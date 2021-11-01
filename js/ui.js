class UI
{

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

}