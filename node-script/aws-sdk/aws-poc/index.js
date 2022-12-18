
const  { 
  EC2Client, 
  CreateTagsCommand,
  RunInstancesCommand, 
} = require( "@aws-sdk/client-ec2");
// Set the AWS Region.
const REGION = "eu-west-3"; //e.g. "us-east-1"
// Create anAmazon EC2 service client object.
const ec2Client = new EC2Client({ region: REGION });



// Set the parameters
const instanceParams = {
  ImageId: "ami-03b755af568109dc3", //AMI_ID
  InstanceType: "t2.nano",
  KeyName: "ssh_test_kp", //KEY_PAIR_NAME
  MinCount: 1,
  MaxCount: 1,
};

const run = async () => {
  try {
    const data = await ec2Client.send(new RunInstancesCommand(instanceParams));
    console.log(data.Instances[0].InstanceId);
    const instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);
    // Add tags to the instance
    const tagParams = {
      Resources: [instanceId],
      Tags: [
        {
          Key: "Name",
          Value: "SDK Sample",
        },
      ],
    };
    try {
      await ec2Client.send(new CreateTagsCommand(tagParams));
      console.log("Instance tagged");
    } catch (err) {
      console.log("Error", err);
    }
  } catch (err) {
    console.log("Error", err);
  }
};
run();