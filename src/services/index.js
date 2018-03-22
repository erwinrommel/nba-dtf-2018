
const games = require('./games/games.service');
const picks = require('./picks/picks.service');
const players = require('./players/players.service');
const teams = require('./teams/teams.service');
const users = require('./users/users.service');


module.exports = function (app) {
  app.configure(games);
  app.configure(picks);
  app.configure(players);
  app.configure(teams);
  app.configure(users);
};
