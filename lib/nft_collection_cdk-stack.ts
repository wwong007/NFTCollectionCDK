import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NFTCollectionDynamoTable } from './Resources/DynamoNFTCollection';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class NftCollectionCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new NFTCollectionDynamoTable(this)
  }
}


