class Storage 
{
    

    static getFilmsFromStorage()
    {
        let films;
        return localStorage.getItem('films') === null ? films = [] : films = JSON.parse(localStorage.getItem('films'));
    }

    static addFilmToStorage(newFilm)
    {
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem('films',JSON.stringify(films));
    }


}