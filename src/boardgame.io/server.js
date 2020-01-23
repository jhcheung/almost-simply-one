import AlmostSimplyOne from "./AlmostSimplyOne";
require('dotenv').config()

import { Server, Mongo } from 'boardgame.io/server';

const server = Server({
  games: [AlmostSimplyOne],

  db: new Mongo({
      url: 'mongodb://localhost:27017',
      // url: `mongodb+srv://jimmy:${process.env.MONGODB_PASSWORD}@cluster0-czkry.mongodb.net/test?retryWrites=true&w=majority`,
      dbname: 'almost-simply-one1'
  }),
});


server.run(8000);
