import GameTable from "./GameTable";
import { Person } from "./Player";

class Dealer extends Person {
  constructor(name: string) {
    super(name);
  }

  public checkCanStartMatch(gameSet: GameTable) {
    const { player1, player2 } = gameSet.getPlayers();

    return player1?.checkIsOkayToMatch() && player2?.checkIsOkayToMatch();
  }

  public makeGameStart(gameSet: GameTable) {
    gameSet.confirmGameStart();
  }
}

export default Dealer;
