import AlmostSimplyOne from "./AlmostSimplyOne";

import { Server, Mongo } from 'boardgame.io/server';

const server = Server({
  games: [AlmostSimplyOne],

  db: new Mongo({
      url: 'mongodb://localhost:27017',
      dbname: 'bgio3'
  }),
});


server.run(8000);
