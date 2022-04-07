import { Owner, Parcel } from "../db/models";
import responses from "../utils/responses";

export default class {
  static async getAllOwners(req, res) {
    try {
      const getAllOwners = await Owner.findAll({});
      return res
        .status(200)
        .json(
          responses.success(
            200,
            "All Owners fetched successfully",
            getAllOwners
          )
        );
    } catch (error) {
      console.error(error);
    }
  }

  static async getOwner(req, res) {
    const { id } = req.params;
    try {
      const getOwners = await Owner.findOne({
        where: { id: id },
      });
      return res
        .status(200)
        .json(responses.success(200, "Owner fetched successfully", getOwners));
    } catch (error) {
      console.error(error);
    }
  }

  static async getParcelByOwner(req, res) {
    const { id } = req.params;
    try {
      const getParcelByOwner = await Parcel.findAll({
        where: {
          ownerId: id,
        },
      });
      return res
        .status(200)
        .json(
          responses.success(
            200,
            "Lands by Owner fetched successfully",
            getParcelByOwner
          )
        );
    } catch (error) {
      console.error(error);
    }
  }

  static async countAllOwner(req, res) {
    try {
      const countAllOwner = await Owner.count();
      return res
        .status(200)
        .json(
          responses.success(200, "Counts fetched successfully", countAllOwner)
        );
    } catch (error) {
      console.error(error);
    }
  }
}
