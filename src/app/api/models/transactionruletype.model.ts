
export enum TransactionOperation {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT'
}

export interface TransactionRuleType {
  positionTypeName: string;
  transactionOperation: TransactionOperation;
}
