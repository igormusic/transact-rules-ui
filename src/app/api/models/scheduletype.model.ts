
export enum BusinessDayCalculation {
  ANY_DAY = 'ANY_DAY',
  NEXT_BUSINESS_DAY = 'NEXT_BUSINESS_DAY',
  PREVIOUS_BUSINESS_DAY = 'PREVIOUS_BUSINESS_DAY',
  CLOSEST_BUSINESS_DAY_NEXT = 'CLOSEST_BUSINESS_DAY_NEXT',
  NEXT_BUSINESS_DAY_THIS_MONTH_OR_PREVIOUS = 'NEXT_BUSINESS_DAY_THIS_MONTH_OR_PREVIOUS'
}

export enum ScheduleEndType {
  NO_END = 'NO_END',
  END_DATE = 'END_DATE',
  REPEATS = 'REPEATS'
}

export enum ScheduleFrequency {
  DAILY = 'DAILY',
  MONTHLY = 'MONTHLY'
}

export interface ScheduleType {
  businessDayCalculation: BusinessDayCalculation;
  endDateExpression: string;
  excludeDatesExpression: string;
  includeDatesExpression: string;
  intervalExpression: string;
  isCalculated: boolean;
  labelName: string;
  numberOfRepeatsExpression: string;
  propertyName: string;
  scheduleEndType: ScheduleEndType;
  scheduleFrequency: ScheduleFrequency;
  startDateExpression: string;
}
