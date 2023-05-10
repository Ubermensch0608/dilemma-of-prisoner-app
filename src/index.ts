import Dealer from "./Dealer";
import GameTable from "./GameTable";
import Player from "./Player";

const James = new Dealer("James");
const centerGameSet = new GameTable(James);

const Dean = new Player("Dean");
const Joey = new Player("Joey");

centerGameSet.joinAsPlayer(Dean);
centerGameSet.joinAsPlayer(Joey);

Dean.sayOkayToMatch();
Joey.sayOkayToMatch();

const canGameStart = James.checkCanStartMatch(centerGameSet);

if (canGameStart) {
  James.makeGameStart(centerGameSet);
}
Joey.sayOkayToMatch();

console.log(centerGameSet);
