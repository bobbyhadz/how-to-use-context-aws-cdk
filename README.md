# How to use Context in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/how-to-use-context-aws-cdk)

> If you use CDK v1, switch to the cdk-v1 branch

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Synthesize with Context

```bash
npx aws-cdk synth \
  --context bucketName=myBucket \
  --context region=us-east-1
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup

```bash
npx aws-cdk destroy
```
