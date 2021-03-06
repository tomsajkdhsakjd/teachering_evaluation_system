package com.shendehaizi.dao;

import com.shendehaizi.model.MajorDepartmentRelationModel;
import io.terminus.common.mysql.dao.MyBatisDao;
import org.springframework.stereotype.Repository;

@Repository
public class MajorDepartmentRelationDao extends MyBatisDao<MajorDepartmentRelationModel> {
    public void deleteByMajorId(Long majorId) {
        this.sqlSession.delete(sqlId("deleteByMajorId"),majorId);
    }
}
