// AWS CDK
import { Construct } from 'constructs'


// AWS CDK DYNAMO TYPES
import { Table, TableProps } from 'aws-cdk-lib/aws-dynamodb';


export class DynamoTable extends Table {
  constructor(scope: Construct, tableProps: TableProps) {
    super(
      scope,
      `${tableProps.tableName}`,
      tableProps
    )
  }
}