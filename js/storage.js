class Storage 
{


    static clearAllFilmFromStorage()
    {
        localStorage.removeItem('films');
    }

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
    
    static deleteFilmFromStorage(deleteFilm)
    {
        let films = this.getFilmsFromStorage();
        films.forEach((film,index) => {
            if(film.title === deleteFilm)
            {
                films.splice(index,1);
            }
        });
        localStorage.setItem('films',JSON.stringify(films));
    }





}


    