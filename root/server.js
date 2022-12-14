
// -------------- Importing Packages -------------- //

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// -------------- Constants -------------- //

const port = process.env.PORT || 3000;
const app = express();

// -------------- Server Listen-------------- //

const server = app.listen(port, async () => {
    console.log(`App listening on port ${port}!`);
});

// -------------- Setup -------------- //

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'client')));

// -------------- Basic Routes -------------- //

app.get('/', async (req, res) => {
    res.render('index', {
        title:'Home'
    });
});

app.get('/about', async (req, res) => {
    res.render('about', {
        title:'About'
    });
});

app.get('/contact', async (req, res) => {
    res.render('contact', {
        title:'Contact'
    });
});

app.get('/work', async (req, res) => {
    res.render('work', {
        title:'Work'
    });
});

// -------------- Portfolio Routes -------------- //

app.get('/drkz', async (req, res) => {
    res.render('drkz', {
        title:'DRKZ Stream Package'
    });
});

app.get('/blast', async (req, res) => {
    res.render('blast', {
        title:'Blast Premier Spring'
    });
});

app.get('/dystopian-outlaw', async (req, res) => {
    res.render('dystopian-outlaw', {
        title:'Dystopian Outlaw'
    });
});

app.get('/call-of-duty-invitational', async (req, res) => {
    res.render('callofduty', {
        title:'Call Of Duty NA Invitational'
    });
});

app.get('/nike-x-furia', async (req, res) => {
    res.render('furia', {
        title:'Nike x Furia Jersey Remake'
    });
});

app.get('/ethfan', async (req, res) => {
    res.render('ethfan', {
        title:'ETH Fan Card'
    });
});