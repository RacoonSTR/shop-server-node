import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';
import route from './routes';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, async () => {
  console.log('App is listening on port 3000!');
  await start()
});

async function addRoutes() {
  app.use('/', route);
}

async function start() {
  await db.connect();
  await addRoutes();
}