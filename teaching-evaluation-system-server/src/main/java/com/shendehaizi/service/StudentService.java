package com.shendehaizi.service;

import com.shendehaizi.request.ScoreRequest;
import com.shendehaizi.request.ScoreTeacherInfo;
import com.shendehaizi.request.StudentUpdateRequest;
import com.shendehaizi.response.Response;
import com.shendehaizi.response.StudentInfo;
import com.shendehaizi.response.StudentScoreRecord;
import com.shendehaizi.response.TeacherScoreInfo;

import java.util.List;

public interface StudentService {
    Response<StudentInfo> getStudentInfoDetail(String userId);

    Response<String> handleUpdateInfo(StudentUpdateRequest request);

    Response<List<TeacherScoreInfo>> getTeacherScoreInfos(ScoreTeacherInfo request);

    Response<String> handleScore(ScoreRequest scoreRequest);

    Response<List<StudentScoreRecord>> getScoreRecords(String userId);
}
