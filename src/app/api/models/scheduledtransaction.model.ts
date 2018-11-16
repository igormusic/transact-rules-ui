
export enum Timing {
  START_OF_DAY = 'START_OF_DAY',
  END_OF_DAY = 'END_OF_DAY'
}

export interface ScheduledTransaction {
  amountExpression: string;
  dateTypeName: string;
  labelName: string;
  propertyName: string;
  scheduleTypeName: string;
  sequence: number;
  timing: Timing;
  transactionTypeName: string;
}
