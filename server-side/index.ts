require('dotenv').config()
import databaseConnector from "./_variables/databaseConnector";
databaseConnector().finally()
//@ts-ignore
import express from "express";
import * as bodyParser from 'body-parser';
import rootRouter from "./router/rootRouter";
import * as path from "path";
import fileUpload from "express-fileupload";

const app = express();
app.use(bodyParser.json());
app.use(fileUpload())

app.use('/api/static', express.static(path.join(__dirname, 'static'),{maxAge: "604800000"}))

app.get( "/api", ( req, res ) => {
    res.send( "ok" );
});

app.use('/api/v1',rootRouter)

app.listen( process.env.PORT, () => {
    console.log( `server started at http://localhost:${ process.env.PORT }` );
} );