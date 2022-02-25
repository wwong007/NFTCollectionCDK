// CONSTRUCT
import { Construct } from 'constructs';

// DYNAMO TABLE CLASS
import { DynamoTable } from '../Components/DynamoDB/Table.models';

// DYNAMO TABLE PROPS
import { TableProps, AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { COMMON_TABLE_PROPS } from '../Components/DynamoDB/Table.props';

// COMMON PROPS


export class NFTCollectionDynamoTable extends DynamoTable {
  constructor(scope: Construct) {
    const NFTCollectionTableProps: TableProps = {
      ...COMMON_TABLE_PROPS,
      tableName: 'NFTCollection',
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING
      }
    }
    super(scope, NFTCollectionTableProps)
  }
}