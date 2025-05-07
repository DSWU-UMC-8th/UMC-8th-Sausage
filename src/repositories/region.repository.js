import db from "../db.config.js";

class RegionRepository {
  async findById(id) {
    try {
      const [regions] = await db.query("SELECT * FROM regions WHERE id = ?", [
        id,
      ]);
      return regions.length > 0 ? regions[0] : null;
    } catch (error) {
      throw new Error(`Failed to find region by id: ${error.message}`);
    }
  }
}

export default new RegionRepository();
