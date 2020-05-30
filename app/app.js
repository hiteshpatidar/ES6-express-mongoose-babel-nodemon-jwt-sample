import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";
import morgan from "morgan";

//page refrences
import errorHandler from "../app/config/error-handler"
import dbConfig from "./config/dbConfig";
import routes from '../app/routes/index';
import jwt from "../app/config/jwt";

const app = express();

/**
    * Connect to the database
    */

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the datbase!", err);
    process.exit();
  });

// use JWT auth to secure the api
app.use(jwt());

//registering cors
app.use(cors());

app.use(morgan("dev")); // configire morgan

/**
    * Middleware
    */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// global error handler
app.use(errorHandler);

/**
    * Register the routes
    */

routes(app);

export default app;