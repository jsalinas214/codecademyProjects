// step 1 & 2
const team = {
// step 3
   _players: [
      {firstName: 'James', lastName: 'Salinas', age: 25},
      {firstName: 'Dex', lastName: 'Salinas', age: 2},
      {firstName: 'Reese', lastName: 'Salinas', age: 1}
   ],
// step 4
   _games: [
      {opponents: 'Cats', teamPoints: 42, opponentPoints: 7},
      {opponents: 'Neighbors', teamPoints: 30, opponentPoints: 17},
      {opponents: 'Squirrels', teamPoints: 7, opponentPoints: 24}
   ],

// step 5
   get players() {
      return this._players;
   },
// step 6
   get games() {
      return this._games;
   },
// step 7
   addPlayer(newFirstName, newLastName, newAge) {
      let player = {
         firstName: newFirstName,
         lastName: newLastName,
         age: newAge
      };
      this.players.push(player);
   },
// step 9 part I
   addGame(newOpponents, newTeamPoints, newOpponentPoints) {
      let game = {
         opponents: newOpponents,
         teamPoints: newTeamPoints,
         opponentPoints: newOpponentPoints
      };
      this.games.push(game);
   }
};
// step 8
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
// step 9 part II
team.addGame('Titans', 100, 98);
console.log(team.games);