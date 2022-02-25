// AWS CDK DYNAMO TYPES
import { BillingMode, TableProps } from 'aws-cdk-lib/aws-dynamodb';

// CONSTANTS

const READ_MIN_CAPACITY: number = 5;
const READ_MAX_CAPACITY: number = 25;

const WRITE_MIN_CAPACITY: number = 5;
const WRITE_MAX_CAPACITY: number = 25;


export const COMMON_TABLE_PROPS: Partial<TableProps> = {
  readCapacity: READ_MIN_CAPACITY,
  writeCapacity: WRITE_MIN_CAPACITY,
  billingMode: BillingMode.PROVISIONED,
  pointInTimeRecovery: false
};

