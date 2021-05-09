import express from 'express';
import routes from '../src/routes';
import cors from 'cors'
import './database/index';

class App {
    constructor() { 
        this.server = express ();

        this.middlewares();
		this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({extended:true}))
        this.server.use(cors({origin: "http://localhost:4200"}));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;