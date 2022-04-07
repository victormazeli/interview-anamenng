import path from "path";
import response from "../utils/responses"
import * as XLSX from 'xlsx'
import _ from 'lodash';
import { uuid } from "uuidv4";


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
        let ownerEntity = [];
        let parcel = [];
        let buildingUnit = [];
        let occupant = [];

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

        data1Cleaned.forEach((el) => {
            let ownerId = uuid();
            let ownerObject = {
                ownerType: el['Type of Owner?'] ? el['Type of Owner?'] : null,
                firstName: el['First Name'] ? el['First Name'] : null,
                surname: el['Surname'] ? el['Surname'] : null,
                otherNames: el['Other Names'] ? el['Other Names'] : null,
                fullName: el['PlotOwnerFullName'] ? el['PlotOwnerFullName'] : null,
                occupation: el['Occupation'] ? el['Occupation'] : null,
                address1: el['Contact Address Line 1'] ? el['Contact Address Line 1'] : null,
                address2: el['Contact Address Line 2'] ? el['Contact Address Line 2'] : null,
                city: el['City/Town'] ? el['City/Town'] : null,
                email: el['Email'] ? el['Email'] : null,
                alternativePhoneNo: el['Alternate Phone No'] ? el['Alternate Phone No'] : null,
                phoneNumber: el['Phone Number'] ?  el['Phone Number'] : null,
                ward1: el['Ward_1'] ? el['Ward_1'] : null,
                lga1: el['LGA_1'] ? el['LGA_1'] : null,
                state1: el['State_1'] ? el['State_1'] : null,
                businessName: el['Business Name'] ? el['Business Name'] : null,
                id: ownerId

            }
            let landObject = {
                id: el['GlobalID'] ? el['GlobalID'] : null,
                freeAccess: el['Free Access'] ? el['Free Access'] : null,
                plotOwnership: el['Plot Ownership'] ? el['Plot Ownership'] : null,
                typeOfEnclosure: el['Type of Enclosure'] ? el['Type of Enclosure'] : null,
                doesParcelHaveBuildings: el['Does Parcel_have_buildings'] ? el['Does Parcel_have_buildings'] : null,
                noOfBuildingsWithinEnclosure: el['No Of Buildings Within Enclosure'] ? el['No Of Buildings Within Enclosure'] : null,
                isthePlotFenced: el['Is the Plot Fenced'] ? el['Is the Plot Fenced'] : null,
                connectedtoImoStateWaterBoard: el['Connected to Imo State Water Board'] ? el['Connected to Imo State Water Board'] : null,
                borehole: el['Has Borehole'] ? el['Has Borehole'] : null,
                Sewerage: el['Has Sewerage'] ? el['Has Sewerage'] : null,
                streetlight: el['Has Street Lights'] ? el['Has Street Lights'] : null,
                disposalArragement: el['Has Waste Disposal Arrangements'] ? el['Has Waste Disposal Arrangements'] : null,
                mast: el['Does the Building have a mast?'] ? el['Does the Building have a mast?'] : null,
                signage: el['Does the Building have a signage?'] ? el['Does the Building have a signage?'] : null,
                generator: el['Does the parcel have a generator?'] ? el['Does the parcel have a generator?'] : null,
                plotMainUse: el['Plot Main Use'] ? el['Plot Main Use'] : null,
                lga: el['LGA'] ? el['LGA'] : null,
                ward: el['Ward'] ? el['Ward'] : null,
                gridNo: el['Grid No'] ? el['Grid No'] : null,
                district: el['District (Neighbourhood)'] ? el['District (Neighbourhood)'] : null,
                enumerationDate: el['Enumeration Date'] ? el['Enumeration Date'] : null,
                plot_Address: el['Plot_Address'] ? el['Plot_Address'] : null,
                gridNo: el['Grid No'] ? el['Grid No'] : null,
                ownerId

            }
            ownerEntity.push(ownerObject);
            parcel.push(landObject);

        });

        // extract occupant data from building
        data2Cleaned.forEach((el) => {
            let unit = {
                id: el['GlobalID'] ? el['GlobalID'] : null,
                floorNumber: el['Floor Number'] ? el['Floor Number'] : null,
                unitNo: el['Unit No'] ? el['Unit No'] : null,
                unitType: el['Unit Type'] ? el['Unit Type'] : null,
                NoOfRooms: el['No Of Rooms'] ? el['No Of Rooms'] : null,
                propertyUse1: el['Property Use1'] ? el['Property Use1'] : null,
                unitNo: el['Building Purpose'] ? el['Building Purpose'] : null,
                unitNo: el['Unit No'] ? el['Unit No'] : null,
                unitNo: el['Unit No'] ? el['Unit No'] : null,


            }

        })




        res.status(200).json(response.success(200, 'upload successful', data1Cleaned ))
       } catch (error) {
           console.log(error)
           res.status(500).json(response.error(500, "error"))
       }
    }
}