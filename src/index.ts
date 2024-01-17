import express from 'express';
import routerUser from './router/User.router';
import routerPost from './router/Post.router';
import mongoose from 'mongoose';
import connectDB from './db/dbConfig';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

app.use(express.json());
app.use("/users",routerUser)
app.use("posts",routerPost)





const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
