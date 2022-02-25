// CDK STACK PROPS
import { Stack, StackProps } from 'aws-cdk-lib';

// CONSTRUCT
import { Construct } from 'constructs';

// DYNAMO TABLE RESOURCE
import { NFTCollectionDynamoTable } from './Resources/DynamoNFTCollection';


export class NftCollectionCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new NFTCollectionDynamoTable(this)
  }
}


