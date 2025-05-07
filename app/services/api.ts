export const TMDB_CONFIG = {
    API_KEY: process.env.TMDB_API_KEY,
    BASE_URL: 'https://api.themoviedb.org/3',
    header: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    }
}

export const fetchMovies = async ({ query }:{query:string}) => {
    const endpoint = query ?
    `/search/movie?query=${encodeURIComponent(query)}` :
    `/discover/movie/sort_by=popularity.desc`
    const res = await fetch(TMDB_CONFIG.BASE_URL + endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.header,
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data.results;
}