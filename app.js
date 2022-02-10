const movies = [

    {
        id: 01,
        name: "Don't Look Up",
        year: 2021,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd6RGXWbIoOHL3daqY8inmYcduPOmeukBFfOpzMJA0yh0ogdbGvekRFLgP1eyZBDFO2Igi5gLPKlusDO9AnqbE_UCIcA.jpg?r=6a0%22)",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },

    {
        id: 02,
        name: "Back to the Outback",
        year: 2021,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcpFGB8j2mmUIdLNIJaZ-GMNL58-eQFBihnSRcOvHNGXz0sS7JvBAPvhxo1dLmFPshSDy1eKBdOqNHbSYSLqSOOAF5XW.jpg?r=de8",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 03,
        name: "Red Notice",
        year: 2020,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZsT2bdvYhDgBRNH-QmuiQwJ9p7hjcduBLNFrVBepJYsVBmJT0Dyi7no8vlWESvKalMsakP12WzonaigvxKsXHjvKtXW.jpg?r=590%22)",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 04,
        name: "How the Grinch Stole Christmas",
        year: 2021,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUxuDzOVcY6FjzsROdO9oD595VQo_S6by2cO2LCbiCBm_g76GdaFn4OeUAffrECj1WACLfVNksUOT0mYe5tt3BtIfwTu.jpg?r=768",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 05,
        name: "The Christmas Chronicles",
        year: 2020,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQjEKFozjtOmKWNvvz07rGpNXvwpsRtHZXsCu7elzJ0_maMRj7dWbaxZ4zJ5Liwdm_9jpTlcp7DVL_KBUDBgBvd1pzVa.jpg?r=6a2",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 06,
        name: "The Amazing Spider-Man",
        year: 2021,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdP1JHNw5gw5JTkct3wNDCl3X5osZ13FYqJbCK36iZ_QgpEtrlkFnWjaerCQvy13Va6W5W0TKyTT1ReWX_MlkQB8HPYA.jpg?r=e8b",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 07,
        name: "White Chicks",
        year: 2021,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa0H2l8eK4RiLS6FdGcjxcHQ61YIK7nkJU70qBHQR-cUJVzksOVfW8PcT6LTEr-Vrmjnq-P5IIsCuLFnNGdgaOjlTFuW.jpg?r=e03",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 08,
        name: "A Bad Moms Christmas",
        year: 2019,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABV5NEl7gCjNHk0Tr93kDO0nrotVARVsqSpok01VlYGBDuitIpBHYvrmLJQj19fNHshQvlkGfwvJvRGLZHEAJOIYWM-mW.jpg?r=cad",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 09,
        name: "Scary Movie",
        year: 2019,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeDx7YpKOouUIOnB3wS2kfNNtnI-u_esyHTyeJeofhJFZJp9dMH9UBEtwuxqKjcVSAtkxQLANjsJf2LsSQV5P1AHUEzw.jpg?r=df5",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 10,
        name: "Friday",
        year: 2019,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxmf-YOniYd0jPEjTOkitCmKreR9tKZw81zDjvUQHL3lxSXivDh4KV0jvqJEENkwHmHJkeuuZzJVw9YMmQwexL_-g2c.jpg?r=f0c",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 11,
        name: "Bad Moms",
        year: 2019,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWKiTJRNQjc0B3ezB57N0tCDVXTjErU-lVx_cQXBd_CSRUWbCKjWbZufwy3-vXFIGE7Ie-8wP2Ri4rNss8PXHEDh6vXW.jpg?r=96e",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
        trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
    },
    {
        id: 12,
        name: "Little Man",
        year: 2019,
        duration: "2h18",
        backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRqZnHpGir15iaQIUNGCzbKYQaJDM0U0wF_D9OS-50HWZ979Yw3UvKBjnpNvjDOsiEd6-BW4eDhUprUbyl5HQCtwK9Cq.jpg?r=94a",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
        actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep"
    }
];

const sectionCenter = document.querySelector('.intro');
const sectionDisplay = document.querySelector('.view');
const sectionFavorite = document.querySelector('.pagethrre');
const countFavorite = document.querySelector('.count');
let x = 0;
let film;
let count = 0;






//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMoviesItems(movies);

});



function displayMoviesItems(moviesItems) {
    let displayMovies = moviesItems.map(function (item) {

        return `<movies class="movies-single">
        <img src="${item.backgroundimage}" class="photo" id ="${item.id}" alt="movies-photo">
        <div class="movies-info">
            <h6 class="title-movies text-light">${item.name}</h6>
        </div>
       </movies>`;
    });

    displayMovies = displayMovies.join("");
    sectionCenter.innerHTML = displayMovies;


    const btnMovies = document.querySelectorAll('.photo');

    btnMovies.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const id = e.currentTarget.id;
            const moviesCategory = movies.filter(function (moviesItem) {


                //console.log(moviesItem.id);
                //console.log(id);

                if (moviesItem.id = id) {
                    x = id;

                }
            });
            // console.log(x);
            film = movies[x - 1];
            //console.log(film);

            let displayFilm = ` <div class="tomovies">
            <div class = "infomovies">
            <div class="title1">
                <div class="title1-first">
                    <h6><span class="n">N</span><span class = "f">F I L M</span></h6>
                </div>
                <div class="title1-second">
                    <h3>${film.name}</h3>
                </div>
            </div>
            <div class="title2">
                <h5>${film.name}</h5>
            </div>
            <div class="info1 btn-group">
                <p class="year">${film.year}</p>
                <p class="age">+16</p>
                <p class="duration">${film.duration}</p>
                <p class="genre">Social Issue Dramas</p>
            </div>
            <div class="description">
                <p>${film.description}</p>
            </div>
            <div class="actors">
                <p><span class = "starring">Starring:</span> ${film.actors}</p>
            </div>
            <div class="btn-container">
                <button class="filter-btn watch" type="button" id="${film.id}">Watch trailer</button>
                <button class="filter-btn add" type="button" id="${film.id}">Add favorite</button>
            </div>
        </div>
        
        <div class = "bgimage">
        <img src="${film.backgroundimage}" class="bg" id ="${film.id}" alt="movies-photo">
        </div>
        </div>`;

            sectionDisplay.innerHTML = displayFilm;


            const btnAdd = document.querySelector('.add');

            //console.log(btnAdd.id);

            btnAdd.addEventListener('click', function () {
                //console.log(btnAdd.id);
                let addFavorite = `<div class = "favoritemovies">
                <img src="${film.backgroundimage}" class="favoriteimage" id ="${film.id}" alt="movies-photo">
                </div>`;

                count += 1;
                countFavorite.innerHTML = count;
                sectionDisplay.innerHTML = addFavorite;
            });



        });

    });

}




