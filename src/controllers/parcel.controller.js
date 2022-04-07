import { Parcel } from "../db/models";
import responses from "../utils/responses";

export default class {
  static async getAllParcels(req, res) {
    try {
      const getAllParcels = await Parcel.findAll({});
      return res
        .status(200)
        .json(
          responses.success(
            200,
            "Buildings fetched successfully",
            getAllParcels
          )
        );
    } catch (error) {
      console.error(error);
    }
  }

  static async getParcel(req, res) {
    const { id } = req.params;
    try {
      const getParcel = await Parcel.findOne({
        where: { id: id },
      });
      return res
        .status(200)
        .json(
          responses.success(200, "Buildings fetched successfully", getParcel)
        );
    } catch (error) {
      console.error(error);
    }
  }

  static async countAllParcel(req, res) {
    try {
      const countAllParcel = await Parcel.count();
      return res
        .status(200)
        .json(
          responses.success(
            200,
            "Buildings fetched successfully",
            countAllParcel
          )
        );
    } catch (error) {
      console.error(error);
    }
  }
}
