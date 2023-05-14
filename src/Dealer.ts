import GameTable from "./GameTable";
import Player, { Person } from "./Player";

type Winner = "ALL" | "Player1" | "Player2" | "NONE";

const GAME_RULES = `
이 게임의 룰을 다음과 같습니다. 
첫째...
둘째...
`;

class Dealer extends Person {
  private gameRules: string;
  private winner: Winner | undefined;

  constructor(name: string) {
    super(name);
    this.gameRules = GAME_RULES;
  }

  public checkCanStartMatch(gameSet: GameTable) {
    const { player1, player2 } = gameSet.getPlayers();

    return player1?.checkIsOkayToMatch() && player2?.checkIsOkayToMatch();
  }

  public makeGameStart(gameSet: GameTable) {
    gameSet.confirmGameStart();
  }

  public tellGameRules() {
    return GAME_RULES;
  }

  public checkStrategy(gameSet: GameTable) {
    const { player1Strategy, player2Strategy } =
      gameSet.openPlayersStrategies();

    console.log(player1Strategy, player2Strategy);

    if (
      player1Strategy === "Cooperation" &&
      player2Strategy === "Cooperation"
    ) {
      this.winner = "ALL";
    }
    if (player1Strategy === "Cooperation" && player2Strategy === "Betray") {
      this.winner = "Player2";
    }
    if (player1Strategy === "Betray" && player2Strategy === "Cooperation") {
      this.winner = "Player1";
    }
    if (player1Strategy === "Betray" && player2Strategy === "Betray") {
      this.winner = "NONE";
    }
  }

  public openWinner() {
    return this.winner;
  }
}

export default Dealer;
