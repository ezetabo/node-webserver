import express from 'express';
import hbs from 'hbs';
import * as dotenv from 'dotenv';
/// estos dos import son para poder usar el __dirname (no lo dice en el video).
import { fileURLToPath } from 'url';
import { dirname } from 'path';
///
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT;
const path = __dirname +'/public';
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//servir contenido estatico | la carpeta public tiene prioridad sobre las rutas generales (app.get())
app.use(express.static(path));


app.get('/', (req, res) => {
    res.render('home',{
        titulo: 'Road Trip by TEMPLATED',
        nombre: 'Road Trip ',
        desc:'by TEMPLATED'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        titulo: 'Generic - Road Trip by TEMPLATED',
        nombre: 'Road Trip ',
        desc:'by TEMPLATED'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        titulo: 'Elements - Road Trip by TEMPLATED',
        nombre: 'Road Trip ',
        desc:'by TEMPLATED'
    });
});

app.get('*', (req, res) => {
    res.render('404',{
        titulo: 'Page not found',
        nombre: 'Road Trip ',
        desc:'by TEMPLATED'
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })