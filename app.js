const express = require('express');
const app = express();
const postsRoutes = require('./api/posts/posts.routes');
const connectDb = require('./database');
const cors = require("cors");
const morgan = require('morgan');
const dotenv = require("dotenv");
const notFoundHandler = require('./middleware/notfoundhandler');
const errorHandler = require('./middleware/errorhandler');
const path = require("path")
dotenv.config()

connectDb();

app.use(cors())
app.use(express.json());
app.use(morgan("dev"))
app.use("/media",express.static(path.join(__dirname,"media")));

app.use('/posts', postsRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`The application is running on localhost:${process.env.PORT}`);
});
