// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const movieSearchBox = document.getElementById('movie-search-box')
const bookswrapper =document.querySelector(".books")

function filtermovies(filter){
      if(filter === "Old_To_New"){
        movie.sort((a,b)=> a.year - b.year)
      }
      else if(filter === "New_to_Old"){
        movie.sort((a,b)=> a.year - b.year)
      }

}



async function loadMovies(searchTerm) {
    const URL =`https://omdbapi.com/?s=${searchTerm}&apikey=32588a38`
bookswrapper.classList.add("books__loading")

    const res = await fetch (`${URL}`)
    const data = await res.json()
    bookswrapper.classList.remove('books__loading')
    const movieListEl = document.querySelector(".user-list")

    filtermovies()


    movieListEl.innerHTML = 
    data.Search.map((movie) => `
    <div class="user-card">
            <div class="user-card__container">
              <h3>${movie.Title}</h4>
                <p><b>Year:</b> ${movie.Year}</p>
                  <img class="poster__img" src="${movie.Poster}" alt="" >
            </div>
          </div>`
    ).slice(0, 6)
.join("")


// console.log(data.Search)
    // if(data.response = 'true') displayMovieList(data.Search)
}

function findMovies(){
    let searchTerm = (movieSearchBox.value).trim()
    loadMovies(searchTerm)
     const searchTitle = document.getElementById("search__title")
  searchTitle.innerHTML = `<h2> Search Results for: ${searchTerm}<h2></h2>`
  console.log(movieSearchBox.value) 
    }



    

    function filterBooks(event) {
      loadMovies(event.target.value)
    }