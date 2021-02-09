import AWS from 'aws-sdk';
import { Container } from 'typedi';
import ProcExcelService from '../services/procExcel.service';

export default async (event: any) => {
  
  const s3 = new AWS.S3();
  const params = { Bucket: event.Records[0].s3.bucket.name, Key: event.Records[0].s3.object.key };
  let objFile = await s3.getObject(params).promise();

  const procExcelServiceInstance = Container.get(ProcExcelService);
  let data: string = await procExcelServiceInstance.ConvertExcelToTxtFile(objFile.Body);

  const newTxtFile = {
    Bucket: event.Records[0].s3.bucket.name,
    Key: `result_${event.Records[0].s3.object.key}`,
    Body: data,
    ContentType: "text/plain"
  };
  await s3.putObject(newTxtFile).promise();
};
