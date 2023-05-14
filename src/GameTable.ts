import Chair from "./Chair";
import Dealer from "./Dealer";
import Player from "./Player";

// const checkCanSitChair = (canSit: boolean) => {
//   return canSit;
// };

class GameTable {
  private chair1: Chair;
  private chair2: Chair;
  private dealer: Dealer;
  private player1: Player | undefined;
  private player2: Player | undefined;
  private status: "Not Started" | "Matching";

  constructor(dealer: Dealer) {
    this.dealer = dealer;
    this.chair1 = new Chair();
    this.chair2 = new Chair();
    this.status = "Not Started";
  }

  private checkChairCanSit(chair: Chair) {
    return chair.checkCanSit();
  }

  public joinAsPlayer(player: Player) {
    if (this.checkChairCanSit(this.chair1)) {
      this.chair1.changeSomeoneSit(player);
      this.player1 = player;
    } else {
      if (this.checkChairCanSit(this.chair2)) {
        this.chair2.changeSomeoneSit(player);
        this.player2 = player;
      }
    }
  }

  public getPlayers() {
    return {
      player1: this.player1,
      player2: this.player2,
    };
  }

  public checkTableStatus() {
    return this.status;
  }

  public confirmGameStart() {
    this.status = "Matching";
  }

  public openPlayersStrategies() {
    return {
      player1Strategy: this.player1?.showOwnStrategy(),
      player2Strategy: this.player2?.showOwnStrategy(),
    };
  }
}

export default GameTable;
