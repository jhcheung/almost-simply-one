import AlmostSimplyOne from "./boardgame.io/AlmostSimplyOne";
require('dotenv').config()
import path from 'path';
import serve from 'koa-static';
import { historyApiFallback } from 'koa2-connect-history-api-fallback'

import { Server, Mongo } from 'boardgame.io/server';

const PORT = process.env.PORT || 8000;

const server = Server({
  games: [AlmostSimplyOne],
  // db: new Mongo({
  //     // url: 'mongodb://localhost:27017',
  //     url: `mongodb+srv://jimmy:${process.env.MONGODB_PASSWORD}@cluster0-czkry.mongodb.net/test?retryWrites=true&w=majority`,
  //     dbname: 'almost-simply-one1'
  // }), //MongoDB setup
});

const { app } = server;
const root = path.join(__dirname, '../build');
app.use(
  historyApiFallback({ index: 'index.html', whiteList: ['/api', '/games'] })
);

app.use(serve(root))

server.run(PORT, () => {
  console.log(`Serving at: http://localhost:${PORT}/`)
});
