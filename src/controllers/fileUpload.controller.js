import path from "path";
import response from "../utils/responses"
import * as XLSX from 'xlsx'
import _ from 'lodash';


export default class {
    static async uploadFile(req, res) {
       try {
        if(req.file == undefined) {
            return  res.status(400).json(response.error(400, 'Please Upload an Excel File'));
        }
        // get file path......
        let filePath = path.join(__dirname, `../../upload/${req.file.filename}`);

        // read the uploaded file.....
        let wb = XLSX.readFile(filePath);
        let data1=  XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        let data2=  XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]]);
        let data3=  XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[2]]);

        //omit objectId from data extracted......
        let data1Cleaned = [];
        let data2Cleaned = [];
        let data3Cleaned = [];
        let OwnerTable = []

        for (let index = 0; index < data1.length; index++) {
            const element = _.omit(data1[index], 'ObjectID');

            data1Cleaned.push(element);
            
        }

        for (let index = 0; index < data2.length; index++) {
            const element = _.omit(data2[index], 'ObjectID');

            data2Cleaned.push(element);
            
        }

        for (let index = 0; index < data3.length; index++) {
            const element = _.omit(data3[index], 'ObjectID');

            data3Cleaned.push(element);
            
        }

        // insert into databse ......

        res.status(200).json(response.success(200, 'upload successful', data1Cleaned ))
       } catch (error) {
           console.log(error)
           res.status(500).json(response.error(500, "error"))
       }
    }
}