package com.shendehaizi.request;

import lombok.Data;

@Data
public class ClassUpdateRequest {
    /**
     * 旧的班级名
     */
    private String oldName;
    /**
     * 新的班级名
     */
    private  String className;

    private Long classId;

    private  Long departmentId;

    private  Long majorId;

    private  Long oldDepartmentId;

    private  Long oldMajorId;

}
