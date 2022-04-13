#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {MyCdkStack} from '../lib/cdk-starter-stack';

const app = new cdk.App({
  // 👇 setting context in our cdk.App
  context: {
    fromApp: {name: 'John', age: 28},
  },
});
new MyCdkStack(app, 'cdk-stack', {
  stackName: 'cdk-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
