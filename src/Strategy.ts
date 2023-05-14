export type StrategyStatus = "Cooperation" | "Betray";

abstract class Strategy {
  private strategy: StrategyStatus | undefined;

  setStrategy(strategy: StrategyStatus) {
    this.strategy = strategy;
  }
}

export default Strategy;
