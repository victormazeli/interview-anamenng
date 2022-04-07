import { BuildingUnit } from '../db/models';
import responses from '../utils/responses';


export default class {
    static async index(req, res) {
        try {
            const getBuildingUnits = await BuildingUnit.findAll({});
        return res.status(200).json(responses.success(200, 'Building unit fetched successfully', getBuildingUnits))
        } catch (error) {
            console.log(error)
        }
    }

    static async get(req, res) {
       try {
        const { id } = req.params;
        const getBuildingUnit = await BuildingUnit.findOne({
            where: {
                id: id
            },
            include: "occupant"
        });
        return res.status(200).json(responses.success(200, 'Building unit fetched successfully', getBuildingUnit))
       } catch (error) {
           console.log(error)
       }
    }

    static async getTotalBuildingUnit(req, res) {
        try {
            const getBuildingUnit = await BuildingUnit.count();
        return res.status(200).json(responses.success(200, 'Total Building Unit fetched successfully', getBuildingUnit))
        } catch (error) {
            console.log(error)
        }
    }

    static async getAllBuildingUnitByBuilding(req, res) {
       try {
        const { id } = req.params;
        const getBuilding = await BuildingUnit.findAll({
            where: {
                buildingId: id
            }
        });
        return res.status(200).json(responses.success(200, 'Total Buildings fetched successfully', getBuilding))
       } catch (error) {
           console.log(error)
       }
    }


}