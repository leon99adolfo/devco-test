import { Service } from 'typedi';
import readXlsxFile from 'read-excel-file';
import { isDate } from 'util';

@Service()
export default class ProcExcelService {
  
  constructor(){

  }

  private getStrOfData(val: any): string {
    let result: any;
    if(isDate(val)) result = `${val.getDate()}-${val.getMonth()}-${val.getFullYear()}`;
    else result = val.toString();
    return result;
  }

  public getOnlyName(name: string): string {
    return name.split('.').slice(0, -1).join('.');
  }

  public async ConvertExcelToTxtFile(stream: any): Promise<string> {
    let newStr: string = "";

    if(stream){
      await readXlsxFile(stream).then(rows => {
        rows.forEach(row => {
          let nbrCol: number = 0;
          row.forEach(col => {
            if(nbrCol == 0) newStr += this.getStrOfData(col);
            else newStr += `|${ this.getStrOfData(col) }`;
            nbrCol++;
          });
          newStr += '\n';
        });
      });
      return newStr;
    }
    else{
      throw new Error('Stream: not found!'); 
    }
  }

}