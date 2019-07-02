import dotenv from "dotenv";
import * as AWS from 'aws-sdk';
const REGION = 'us-east-1';
AWS.config.update({region: REGION});
const API_VERSION = '2012-11-05';
// dotenv.config();
const TOPIC_ARN = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";
import { DSFEventContainer } from '../../../dsf/types';
import { PublishResponse } from "aws-sdk/clients/sns";
import { AWSError } from "aws-sdk";

export const publishDSFEvent = async (event: DSFEventContainer) => {
  const params = {
    Message: JSON.stringify(event),
    TopicArn: TOPIC_ARN,
    MessageAttributes: {
      channel: {
        DataType: 'String',
        StringValue: event.channel
      }
    }
  };
  const publishTextPromise = new AWS.SNS({apiVersion: API_VERSION})
                                  .publish(params)
                                  .promise();
  publishTextPromise
  .then(
    (data:PublishResponse) => {
      console.log("MessageID: " + data.MessageId + " Channel: " + params.MessageAttributes.channel.StringValue);
    })
  .catch(
    (err:AWSError) => {
      console.error(err, err.stack);
  });
};