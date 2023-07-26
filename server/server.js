import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';
import express, { json } from 'express';
import { connect } from 'mongoose';
import authRouter from './routers/authRouter.js';
import booksRouter from './routers/booksRouter.js';
import staffRouter from './routers/staffRouter.js';
import bookingRouter from './routers/bookingRouter.js';
import adminRouter from './routers/adminRouter.js';
import { config } from 'dotenv';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const rootAPIPath = '/api';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const dir = dirname(__filename);

config({
    path: path.resolve('.env'),
});

app.use('/', express.static(join(dir, 'dist')));

app.use(cors());
app.use(json());

app.use(`${rootAPIPath}/auth`, authRouter);
app.use(`${rootAPIPath}/staff`, staffRouter);
app.use(`${rootAPIPath}/books`, booksRouter);
app.use(`${rootAPIPath}/bookings`, bookingRouter);
app.use(`${rootAPIPath}/admin`, adminRouter);

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: path.join(dir, './dist') });
});

const start = async () => {
    try {
        console.log('connecting to db');
        await connect(
            `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cluster0.4odlt8i.mongodb.net/?retryWrites=true&w=majority`
        );
        app.listen(PORT, () => console.log(`server started, port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
