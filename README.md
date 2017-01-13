# Movie App

By [Jane Philipps](mailto:jane.philipps@gmail.com)

[janephilipps.github.io](http://janephilipps.github.io)

## Instructions

1. Clone locally using `git clone git@github.com:janephilipps/movie-app.git`
2. `cd` into `movie-app` directory
3. Install dependencies using `npm install`
4. Obtain api key from [https://developers.themoviedb.org](https://developers.themoviedb.org)
5. Export api key environment variable: `export API_KEY=${your_api_key}`
6. Start webpack using `npm start`
7. Navigate to app in [browser](http://localhost:3000)

## Discussion

The technologies I used to build this app are: ReactJS, Webpack, and Node.js.

## Requirements

When you navigate to the homepage, you will see a list of popular movies. You can use the search bar to search for movies and the links for each movie title to navigate to an individual detail page with more info for each movie. On the detail page, the poster image and title link to the movie's offcial site.

There are two small apps and they talk via CORS. To access the api directly from the browser, you can go [here](http://localhost:8000/api/popular), [here](http://localhost:8000/api/search?query=react) or [here](http://localhost:8000/api/movie/1145) (one of my favorite movies).
