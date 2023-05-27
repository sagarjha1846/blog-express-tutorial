import express from 'express';
import { connectDB } from './db/config.js';
import bodyParser from 'body-parser';
import blogRouter from './router/Blog.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Heartbeat going on!' });
});

app.use('/api/v2/blogs', blogRouter);

app.listen(PORT, () => {
  console.log('Server running in PORT - ', PORT);
});
