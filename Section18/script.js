const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ddaf8d34b77797c9fa4d8f8f0a147cd8&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ddaf8d34b77797c9fa4d8f8f0a147cd8&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
//Get initial moview
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})