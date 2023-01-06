import express from 'express';
import {join}  from 'path';
import morgan from 'morgan';
import {createWriteStream} from 'fs';
import * as http from 'node:http'
import {urlencoded, json} from 'body-parser';
import * as ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import {Middlewares} from "../middlewares/config/Middleware";

export default class HttpServer {
    private readonly port = process.env.PORT || 8090
    private readonly app: express.Express
    private readonly styles = [
        'color: green',
        'background: red',
      ].join(';');
    
    constructor(private readonly middlewares: Middlewares) {
       this.app = express()
    }

    get configServer(): express.Express {
        const writeLogStream = createWriteStream(join(__dirname, '..', 'errors.log'), { flags: 'a' });

        this.app.use(expressLayouts);
        this.app.use(express.static(join(__dirname, '../../..', 'public')));
        this.app.set('views', join(__dirname, '../..', 'views'));
        this.app.set('view engine', 'ejs');

        this.app.use(urlencoded({extended: false}));
        this.app.use(json({ type: 'application/json' }));
        this.app.use(morgan('combined', {
            skip: (_, res) => res.statusCode < 400,
            stream: writeLogStream
        }));

        this.middlewares.execute(this.app);
        
        return this.app;
    }

    public start() {
        http.createServer(this.app)
            .listen(this.port, 
                () => console.info('%c%s', this.styles, `le server c\'est bien lancé sur le host: http://localhost:${this.port}`));
    }
}