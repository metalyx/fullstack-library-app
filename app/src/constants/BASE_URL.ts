export const BASE_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : 'https://fullstack-library-app.onrender.com/';
// : 'https://express-librarian.herokuapp.com/'; // Heroku old backend location
