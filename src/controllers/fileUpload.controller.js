import path from "path";
import response from "../utils/responses"
import * as XLSX from 'xlsx'
import _ from 'lodash';
import { uuid } from "uuidv4";
import { Parcel, Building, Occupant, Owner, BuildingUnit } from "../db/models"

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
        let ownerEntities = [];
        let parcels = [];
        let buildingUnits = [];
        let occupants = [];
        let buildings = [];

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
                id: ownerId,
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
            ownerEntities.push(ownerObject);
            parcels.push(landObject);

        });

        // extract occupant data from building
        data2Cleaned.forEach((el) => {
            let occupantId = uuid();
            let unit = {
                id: el['GlobalID'] ? el['GlobalID'] : null,
                floorNumber: el['Floor Number'] ? el['Floor Number'] : null,
                unitNo: el['Unit No'] ? el['Unit No'] : null,
                unitType: el['Unit Type'] ? el['Unit Type'] : null,
                NoOfRooms: el['No Of Rooms'] ? el['No Of Rooms'] : null,
                propertyUse1: el['Property Use1'] ? el['Property Use1'] : null,
                buildingPurpose: el['Building Purpose'] ? el['Building Purpose'] : null,
                buildingOccupants: el['Does the Building have Occupants?'] ? el['Does the Building have Occupants?'] : null,
                howManyOccupants: el['How many Occupants does the Building have?'] ? el['How many Occupants does the Building have?'] : null,
                buildingId: el['ParentGlobalID'] ? el['ParentGlobalID'] : null,
                creationDate: el['CreationDate'] ? el['CreationDate'] : null,
                editDate: el['EditDate'] ? el['EditDate'] : null,
                editor: el['Editor'] ? el['Editor'] : null,
                x: el['Editor'] ? el['Editor'] : null,
                y: el['Editor'] ? el['Editor'] : null,
                occupantId

            };

            let occupant = {
                id: occupantId,
                occupantType: el['Occupant'] ? el['Occupant'] : null,
                businessName: el['Business Name'] ? el['Business Name'] : null,
                director: el['Name of Directors/Trustees'] ? el['Name of Directors/Trustees'] : null,
                cacRegNo: el['CAC Registration Number'] ? el['CAC Registration Number'] : null,
                cacRegDate: el['CAC Registration Date'] ? el['CAC Registration Date'] : null,
                IMSSBN: el['Do you have Imo Number (IMSSBN)?'] ? el['Do you have Imo Number (IMSSBN)?'] : null,
                JTBTIN: el['JTB-TIN'] ? el['JTB-TIN'] : null,
                businessTIN: el['Business TIN'] ? el['Business TIN'] : null,
                typeOfBusiness: el['Type Of Business'] ? el['Type Of Business'] : null,
                regType: el['Registration Type'] ? el['Registration Type'] : null,
                buisnessSize: el['Size Of Business'] ? el['Size Of Business'] : null,
                noOfSectorStaff: el['Number of Core Sector Staff'] ? el['Number of Core Sector Staff'] : null,
                noOfNonCoreStaff: el['Number of Non-Core Sector Staff'] ? el['Number of Non-Core Sector Staff'] : null,
                taxOffice: el['Tax Office'] ? el['Tax Office'] : null,
                businessMobility: el['Business Mobility'] ? el['Business Mobility'] : null,
                CACStatus: el['Registration Status (CAC)'] ? el['Registration Status (CAC)'] : null,
                regStatus: el['Registration Status (Imo State)'] ? el['Registration Status (Imo State)'] : null,
                buisnessCategory: el['Business Category'] ? el['Business Category'] : null,
                buisnessSector: el['Business Sector'] ? el['Business Sector'] : null,
                buinessSubSector: el['Business Subsector'] ? el['Business Subsector'] : null,

            }

            occupants.push(occupant);
            buildingUnits.push(unit)

        });

        data3Cleaned.forEach((el) => {
            let building = {
                id: el['GlobalID'] ? el['GlobalID'] : null,
                buildingUse: el['Building Use'] ? el['Building Use'] : null,
                isBuildingForBuisness: el['If the Building Has Business'] ? el['If the Building Has Business'] : null,
                buildingTagNo: el['Building Tag Number (Scan Barcode)'] ? el['Building Tag Number (Scan Barcode)'] : null,
                buildingSerialNo: el['Building SerialNo'] ? el['Building SerialNo'] : null,
                estateName: el['Estate Name'] ? el['Estate Name'] : null,
                buildingStatus: el['Building Status'] ? el['Building Status'] : null,
                knowyearOfCompletion: el['Do You Know the Year of Completion?'] ? el['Do You Know the Year of Completion?'] : null,
                yearOfCompletion: el['Year Built/Completed'] ? el['Year Built/Completed'] : null,
                approximateAge: el['Approximate age (if no year specified)'] ? el['Approximate age (if no year specified)'] : null,
                condition: el['Building Condition'] ? el['Building Condition'] : null,
                buildingType: el['Building Type'] ? el['Building Type'] : null,
                arrangement: el['Arrangement'] ? el['Arrangement'] : null,
                roofCovering: el['Type of Roof Coverings'] ? el['Type of Roof Coverings'] : null,
                mainWallMaterial: el['What is the main wall material of the building?'] ? el['What is the main wall material of the building?'] : null,
                grouping: el['Grouping'] ? el['Grouping'] : null,
                noOfFloor: el['No of Floors'] ? el['No of Floors'] : null,
                isFenced: el['Is the Building Fenced'] ? el['Is the Building Fenced'] : null,
                longitude: el['longitude'] ? el['longitude'] : null,
                latitude: el['latitude'] ? el['latitude'] : null,
                parcelId: el['ParentGlobalID'] ? el['ParentGlobalID'] : null,

            }
            buildings.push(building);
        });

        /**
         * 1. First clear all data in the databse to avoid redundancy
         * 
         * 2. insert data
         */

        // clear db
        await Parcel.destroy({
            truncate: true
        });

        await Building.destroy({
            truncate: true
        });

        await BuildingUnit.destroy({
            truncate: true
        });

        await Owner.destroy({
            truncate: true
        });

        await Occupant.destroy({
            truncate: true
        });

        // insert all data 
        await Parcel.bulkCreate(parcels);

        await Owner.bulkCreate(ownerEntities);

        await Building.bulkCreate(buildings);

        await BuildingUnit.bulkCreate(buildingUnits);

        await Occupant.bulkCreate(occupants);

        res.status(200).json(response.success(200, 'upload successful'))
       } catch (error) {
           console.log(error)
           res.status(500).json(response.error(500, "error"))
       }
    }
}