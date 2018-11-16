
export enum Timing {
  START_OF_DAY = 'START_OF_DAY',
  END_OF_DAY = 'END_OF_DAY'
}

export interface InstalmentType {
  interestAccruedPositionTypeName: string;
  interestCapitalizedPositionTypeName: string;
  labelName: string;
  positionTypeName: string;
  propertyName: string;
  scheduleTypeName: string;
  timing: Timing;
  transactionTypeName: string;
}
