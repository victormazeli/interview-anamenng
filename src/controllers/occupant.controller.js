import { Occupant, BuildingUnit } from "../db/models";
import responses from "../utils/responses";

export default class {
  static async index(req, res) {
    const getOccupants = await Occupant.findAll({});
    return res
      .status(200)
      .json(
        responses.success(200, "Occupants fetched successfully", getOccupants)
      );
  }

  static async get(req, res) {
    const { id } = req.params;
    const getOccupant = await Occupant.findOne({
      where: {
        id: id,
      },
    });
    return res
      .status(200)
      .json(
        responses.success(200, "Occupant fetched successfully", getOccupant)
      );
  }

  static async getTotalOccupant(req, res) {
    try {
      const getTotalOccupant = await Occupant.count();
      return res
        .status(200)
        .json(
          responses.success(
            200,
            "Total Occupant fetched successfully",
            getTotalOccupant
          )
        );
    } catch (error) {
      console.error(error);
    }
  }

  static async getOccupantByBuilding(req, res) {
    const { id } = req.params;
    const getOccupant = await BuildingUnit.findOne({
      where: {
        occupantId: id,
      },
    });
    return res
      .status(200)
      .json(
        responses.success(200, "Occupant fetched successfully", getOccupant)
      );
  }
}
