import Dealer from "./Dealer";
import Strategy, { StrategyStatus } from "./Strategy";

export class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Player extends Person {
  private okayToMatch: boolean;
  private gameStrategy: StrategyStatus | undefined;
  private gameRules: string | undefined;

  constructor(name: string) {
    super(name);
    this.okayToMatch = false;
  }

  public sayOkayToMatch() {
    this.okayToMatch = true;
  }

  public checkIsOkayToMatch() {
    return this.okayToMatch;
  }

  public listenGameRules(newGameRules: string) {
    this.gameRules = newGameRules;
  }

  public thinkGameRules() {
    return this.gameRules || "아직 습득한 게임 룰이 없습니다.";
  }

  public setStrategy(newStrategy: StrategyStatus) {
    this.gameStrategy = newStrategy;
  }

  public showOwnStrategy() {
    return this.gameStrategy;
  }
}

export default Player;
