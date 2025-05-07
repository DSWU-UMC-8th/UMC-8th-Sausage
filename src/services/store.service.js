import storeRepository from "../repositories/store.repository.js";
import regionRepository from "../repositories/region.repository.js";
import StoreDto from "../dtos/store.dto.js";

class StoreService {
  async createStore(storeData, regionId) {
    // 지역 존재 여부 확인
    const region = await regionRepository.findById(regionId);
    if (!region) {
      throw new Error(`Region with id ${regionId} not found`);
    }

    // 가게 생성
    const createdStore = await storeRepository.create(storeData, regionId);
    return new StoreDto(createdStore);
  }
}

export default new StoreService();
