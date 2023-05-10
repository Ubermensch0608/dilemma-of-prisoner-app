import Dealer from "./Dealer";

export class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Player extends Person {
  private okayToMatch;
  constructor(name: string) {
    super(name);
    this.okayToMatch = false;
  }
  askTableToSit() {}

  public sayOkayToMatch() {
    this.okayToMatch = true;
  }

  public checkIsOkayToMatch() {
    return this.okayToMatch;
  }
}

export default Player;
