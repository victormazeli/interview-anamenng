import { Building } from '../db/models';
import responses from '../utils/responses';


export default class {
    static async index(req, res) {
        const getBuildings = await Building.findAll({});
        return res.status(200).json(responses.success(200, 'Buildings fetched successfully', getBuildings))
    }

    static async get(req, res) {
        const { id } = req.params;
        const getBuilding = await Building.findOne({
            where: {
                id: id
            },
            include: "buildingUnits"
        });
        return res.status(200).json(responses.success(200, 'Buildings fetched successfully', getBuilding))
    }

    static async getTotalBuilding(req, res) {
        const getBuilding = await Building.count();
        console.log(getBuilding)
        return res.status(200).json(responses.success(200, 'Total Buildings fetched successfully', getBuilding))
    }

    static async getAllBuildingByParcel(req, res) {
        const { id } = req.params;
        const getBuilding = await Building.findAll({
            where: {
                parcelId: id
            }
        });
        return res.status(200).json(responses.success(200, 'Total Buildings fetched successfully', getBuilding))
    }

}