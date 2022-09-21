let elMoviesUl = utilsEl("#js-movies-inner");

movies.forEach((movie) => {
    
    let liElement = createElementUtils("li", "movies__list mt-3");
    let imgElement = createElementUtils("img", "movies__img");
    let headingElement = createElementUtils("h2", "movies__heading", movie.Title);
    let yearTextElement = createElementUtils("p", "movies__year-text", movie.Year);
    let genreTextElement = createElementUtils("p", "movies__genre-text", movie.Genre);
    let actorsTextElement = createElementUtils("i", "movies__genre-text text-success", movie.Actors);
    let countryTextElement = createElementUtils("span", "movies__genre-text text-danger d-block pt-1", movie.Country);

    imgElement.src = movie.Images;

    liElement.appendChild(imgElement);
    liElement.appendChild(headingElement);
    liElement.appendChild(yearTextElement);
    liElement.appendChild(genreTextElement);
    liElement.appendChild(actorsTextElement);
    liElement.appendChild(countryTextElement)

    elMoviesUl.appendChild(liElement);

});