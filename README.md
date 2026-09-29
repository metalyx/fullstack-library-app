# MyLibrary

A full-stack library management app: catalog, bookings, and role-based access for readers, librarians, and admins.

**Live demo:** https://fullstack-library-app-ij27.onrender.com/

> The demo runs on Render's free tier, so the first request after a period of inactivity can take up to a minute while the instance wakes up.

<!-- Screenshots go here -->

## Demo accounts

| Role      | Username    | Password    |
| --------- | ----------- | ----------- |
| USER      | `user`      | `user`      |
| LIBRARIAN | `librarian` | `librarian` |
| ADMIN     | `admin`     | `admin`     |

## Features

Access depends on the roles in the user's JWT. A user can hold several roles at once.

| Page      | USER | LIBRARIAN | ADMIN | Notes                                                                 |
| --------- | :--: | :-------: | :---: | --------------------------------------------------------------------- |
| Books     |  ✓   |     ✓     |   ✓   | Catalog with availability status and client-side search by title      |
| Bookings  |      |     ✓     |   ✓   | Create and cancel bookings; search by book title or username          |
| Users     |      |     ✓     |   ✓   | Users with their roles and active bookings; admins can create users with any role |
| Profile   |  ✓   |     ✓     |   ✓   | Username and roles (avatar is a placeholder)                          |

Registration is open to anyone and always creates a `USER`. Elevated roles can only be granted by an admin.

## Tech stack

- **Frontend:** React 18, TypeScript, Vite, Redux Toolkit (typed hooks), React Router v6, MUI v5, Tailwind, Axios, react-error-boundary
- **Backend:** Node.js 22, Express 4, MongoDB via Mongoose, JWT (`jsonwebtoken`), `bcryptjs` for password hashing, `express-validator`
- **Hosting:** Render

## Architecture

A monolith in a single repo. In production, Express serves both the API and the built React bundle.

```
app/      React frontend
server/   Express API (also serves the production build from dist/)
```

**Auth flow.** `POST /api/auth/login` returns a signed JWT, which the client stores in `localStorage` and sends with each request. Express middleware verifies the token and checks roles per route. On the client, the same token decides which routes and menu items are rendered.

## Running locally

Requires Node.js 22 and a MongoDB instance. Create a `.env` file with your MongoDB connection credentials and a JWT secret.

```bash
npm install
npm run dev      # Vite dev server + nodemon, run concurrently
```

Production build. The `build` script type-checks with the local TypeScript, then runs Vite; `start` serves the API and the built bundle:

```bash
npm run build
npm start
```

## API

Routes marked *staff* require `LIBRARIAN` or `ADMIN`.

| Method | Route                            | Access     | Description                                            |
| ------ | -------------------------------- | ---------- | ------------------------------------------------------ |
| POST   | `/api/auth/login`                | public     | Returns a JWT for valid credentials                    |
| POST   | `/api/auth/registration`         | public     | Creates a user with role `USER`                        |
| POST   | `/api/auth/registrationWithRole` | ADMIN      | Creates a user with any roles                          |
| GET    | `/api/auth/checkToken`           | token      | Validates the token                                    |
| GET    | `/api/auth/getUserInfo`          | token      | Returns user info from the token                       |
| GET    | `/api/books`                     | token      | All books                                              |
| GET    | `/api/books/available`           | token      | Only books with `isAvailable: true`                    |
| POST   | `/api/books`                     | staff      | Creates a book                                         |
| GET    | `/api/bookings`                  | staff      | All bookings, with booker and book populated           |
| GET    | `/api/bookings/:userId`          | staff      | Bookings of one user                                   |
| POST   | `/api/bookings`                  | staff      | Creates a booking from `{ booker, book }`              |
| POST   | `/api/bookings/cancel`           | staff      | Cancels a booking by `{ _id }` and frees the book      |
| GET    | `/api/staff/users`               | staff      | Users with roles and bookings                          |
| GET    | `/api/admin/users`               | ADMIN      | Full user documents                                    |
| DELETE | `/api/admin/users/:id`           | ADMIN      | Deletes a user                                         |

## Roadmap

- UI for adding books (endpoint already exists)
- UI for deleting users (endpoint already exists)
- Search on the Users page

## Contact

Vitalii Tereshchenko: [LinkedIn](https://www.linkedin.com/in/vitalii-t/) · [Telegram](https://t.me/metalyxxx) · [vitalii.tereshchenko1@gmail.com](mailto:vitalii.tereshchenko1@gmail.com)
