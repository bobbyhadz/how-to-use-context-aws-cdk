import * as cdk from '@aws-cdk/core';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log('accessing context 👉', this.node.tryGetContext('fromApp'));

    console.log('from cdk.json 👉', this.node.tryGetContext('bucket'));

    // 👇 printing the availabilityZones
    console.log(cdk.Stack.of(this).availabilityZones);

    console.log('bucketName 👉', this.node.tryGetContext('bucketName'));
    console.log('region 👉', this.node.tryGetContext('region'));
  }
}
