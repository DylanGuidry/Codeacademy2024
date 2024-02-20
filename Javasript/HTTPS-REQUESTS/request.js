//There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE. In this lesson, we’ll cover GET and POST requests.
//With a GET request, we’re retrieving, or getting, information from some source (usually a website). For a POST request, we’re posting information to a source that will process the information and send it back.

//HANDLING GET

// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if(response.ok){
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
    }
    } catch (error) {
        console.log(error);
    }
}


//HANDLING POSTS

// Information to reach API
const apiKey = '17a7c280a1ae4566878d84ea30bd216f';
const url2 = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField2 = document.querySelector('#input');
const shortenButton2 = document.querySelector('#shorten');
const responseField2 = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    try {
        const response = await fetch(url, {
                method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json',
                    'apikey': apiKey
        }
        });
            if(response.ok){
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

//PERFECT FETCH

const getGenres = async () => {
        try {
        const requestParams = `?api_key=${tmdbKey}`;
        const genreRequestEndpoint = `${tmdbBaseUrl}/genre/movie/list`;
    
        const response = await fetch(`${genreRequestEndpoint}${requestParams}`);
    
        if (response.ok) {
            const jsonResponse = await response.json();
            
            // Log the entire jsonResponse
            console.log('Complete jsonResponse:', jsonResponse);
    
            // Save the genres property in a variable
            const genres = jsonResponse.genres;
    
            // Log the genres variable
            console.log('Genres:', genres);
    
            return genres;
        } else {
            throw new Error('Failed to fetch genres');
        }
        } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error or rethrow it if needed
        throw error;
        }
    };
    
    // Example usage
    (async () => {
        try {
        const genresData = await getGenres();
        // Continue with any additional logic using genresData
        } catch (error) {
        // Handle errors from getGenres or subsequent logic
        console.error('Error:', error);
        }
    })();