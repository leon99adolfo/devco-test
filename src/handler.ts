import 'reflect-metadata';
import { Handler } from 'aws-lambda';
import ProcExcelAz from './az-services/procExcelAz.service';

export const convertExcel: Handler = async (event: any, _Context: any) => {
  try{
    await ProcExcelAz(event);
  }
  catch(error){
    console.log(error);
  }
};

