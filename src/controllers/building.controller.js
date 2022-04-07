import { Building } from '../db/models';
import responses from '../utils/responses';


export default class {
    static async index(req, res) {
        const getBuildings = await Building.findAll({});
        return res.status(200).json(responses.success(200, 'Buildings fetched successfully', getBuildings))
    }
}