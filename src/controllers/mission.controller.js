import {
  getUserMissions,
  completeMission,
  getStoreMissions,
} from "../services/mission.service.js";

export const fetchUserMissions = async (req, res, next) => {
  /*
  #swagger.summary = '유저 미션 조회'
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '유저 ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: '유저 미션 목록 조회 성공',
    content:{
      "application/json": {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number', example: 1 },
              title: { type: 'string', example: '미션 제목' },
              reward: { type: 'number', example: 500 },
              status: { type: 'string', example: '성공' }
            }
          }
        }
      }  
    }
  }  
  */

  try {
    const { userId } = req.params;
    const missions = await getUserMissions(parseInt(userId));
    res.json(missions);
  } catch (error) {
    next(error);
  }
};

export const markMissionComplete = async (req, res, next) => {
  /*
  #swagger.summary = '미션 완료 처리'
  #swagger.parameters['missionId'] = {
    in: 'path',
    description: '미션의 ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: '미션 완료 처리 성공',
    content: {
      "application/json": {
        schema: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            message: { type: 'string', example: '미션 완료' }
          }
        }
      }
    }
  }
  */
  try {
    const { missionId } = req.params;
    const updatedMission = await completeMission(parseInt(missionId));
    res.json(updatedMission);
  } catch (error) {
    next(error);
  }
};

export const fetchStoreMissions = async (req, res, next) => {
  /*
  #swagger.summary = '가게 미션 조회'
  #swagger.parameters['storeId'] = {
    in: 'path',
    description: '가게의 ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: '가게 미션 목록 조회 성공',
    content: {
      "application/json": {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number', example: 2 },
              title: { type: 'string', example: '가게 미션' },
              reward: { type: 'number', example: 300 },
              status: { type: 'string', example: '진행 중' }
            }
          }
        }
      }
    }
  }
  */
  try {
    const { storeId } = req.params;
    const missions = await getStoreMissions(parseInt(storeId));
    res.json(missions);
  } catch (error) {
    next(error);
  }
};
