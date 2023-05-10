import { Person } from "./Player";

class Chair {
  private person: Person | undefined;
  private wasSomeoneSit: boolean;

  constructor() {
    this.wasSomeoneSit = false;
  }

  changeSomeoneSit(person: Person) {
    this.person = person;
    this.wasSomeoneSit = true;
  }
  public checkCanSit() {
    return !this.wasSomeoneSit;
  }
}
export default Chair;
