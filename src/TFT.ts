import Strategy, { StrategyStatus } from "./Strategy";

class TFT implements Strategy {
  private strategy: StrategyStatus | undefined;

  setStrategy(strategy: StrategyStatus) {
    this.strategy = strategy;
  }

  showStrategy() {
    return this.strategy;
  }
}

export default TFT;
