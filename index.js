// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const movieSearchBox = document.getElementById('movie-search-box')
const bookswrapper =document.querySelector(".books")
const movieListEl = document.querySelector(".user-list")
const searchTitle = document.getElementById("search__title")
let movie = []



function filtermovies(filter){
      if(filter === "Old_To_New"){
        movie.sort((a,b)=> parseInt(a.Year) - parseInt(b.Year))
      }
      else if(filter === "New_to_Old"){
        movie.sort((a,b)=> parseInt(b.Year) - parseInt(a.Year))
      }
      renderMovies()

}




async function loadMovies(searchTerm) {
    const URL =`https://omdbapi.com/?s=${searchTerm}&apikey=32588a38`
bookswrapper.classList.add("books__loading")

    const res = await fetch (`${URL}`)
    const data = await res.json()
    bookswrapper.classList.remove('books__loading')
    

    if (data.Response === "True"){
      movie = data.Search
      renderMovies()
    }
    else{
      movieListEl.innerHTML = `<p> No Movies Found </p>`
    }
      
}


function renderMovies(){
 movieListEl.innerHTML = 
       movie.map((movieDetail) => `
       <div class="user-card">
       <div class="user-card__container">
       <h3>${movieDetail.Title}</h4>
       <p><b>Year:</b> ${movieDetail.Year}</p>
       <img class="poster__img" src="${movieDetail.Poster}" alt="" >
       </div>
       </div>`
      ).slice(0, 6)
      .join("")
}



function findMovies(){
    let searchTerm = (movieSearchBox.value).trim()
    loadMovies(searchTerm)
  searchTitle.innerHTML = `<h2> Search Results for: ${searchTerm}<h2></h2>`
  console.log(movieSearchBox.value) 
    }


    function filterBooks(event) {
      const selectedFilter = event.target.value
      filtermovies(selectedFilter)
    }