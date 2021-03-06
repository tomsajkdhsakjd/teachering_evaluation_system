import request from '@/utils/request'
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
export function registerUser(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
export function getStudentInfoDetail(userId) {
  return request({
    url: '/student/detail',
    method: 'get',
    params: { userId }
  })
}

export function addDepartment(departmentName) {
  return request({
    url: '/department/add',
    method: 'get',
    params: { departmentName }
  })
}
export function listMajor() {
  return request({
    url: '/major/list',
    method: 'get'
  })
}
export function queryMajorByCondition(departmentId) {
  return request({
    url: '/major/list/condition',
    method: 'get',
    params: { departmentId }
  })
}
export function queryClassesByCondition(majorId) {
  return request({
    url: '/class/list/condition',
    method: 'get',
    params: { majorId }
  })
}
export function queryCourseByCondition(classId) {
  return request({
    url: '/course/list/condition',
    method: 'get',
    params: { classId }
  })
}
export function addMajor(data) {
  return request({
    url: '/major/add',
    method: 'post',
    data
  })
}
export function addClass(data) {
  return request({
    url: '/class/add',
    method: 'post',
    data
  })
}
export function updateMajor(data) {
  return request({
    url: '/major/update',
    method: 'post',
    data
  })
}
export function updateStudent(data) {
  return request({
    url: '/student/update',
    method: 'post',
    data
  })
}
export function updateTeacher(data) {
  return request({
    url: '/teacher/update',
    method: 'post',
    data
  })
}
export function updateClass(data) {
  return request({
    url: '/class/update',
    method: 'post',
    data
  })
}
export function deleteDepartment(departmentName) {
  return request({
    url: '/department/delete',
    method: 'get',
    params: { departmentName }
  })
}
export function deleteMajor(majorId) {
  return request({
    url: '/major/delete',
    method: 'get',
    params: { majorId }
  })
}
export function deleteClass(classId) {
  return request({
    url: '/class/delete',
    method: 'get',
    params: { classId }
  })
}
export function queryDepartment() {
  return request({
    url: '/department/list',
    method: 'get'
  })
}
export function listClass() {
  return request({
    url: '/class/list',
    method: 'get'
  })
}
export function updateDepartment(newDepartmentName, oldDepartmentName, id) {
  return request({
    url: '/department/update',
    method: 'get',
    params: { newDepartmentName, oldDepartmentName, id }
  })
}
export function logout() {
  return request({
    url: '/user/sign-out',
    method: 'get'
  })
}
export function queryDataCount() {
  return request({
    url: '/admin/count',
    method: 'get'
  })
}
export function queryProcessData() {
  return request({
    url: '/admin/process',
    method: 'get'
  })
}
