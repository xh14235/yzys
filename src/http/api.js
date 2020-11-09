// import { get, post } from "./http";

// // 登录 获取token
// export const login = params => post("admin/admin/portal/login", params);

// // 天气api
// export const weather = params => get("api", params);

// // 异常监控列表
// export const getAbnormalMonitoring = params =>
//   get("/energy/api/security/warn/findAll", params);

import axios from "axios";

axios.defaults.baseURL = "http://116.236.30.222:9020/";
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
let token = localStorage.token;
axios.defaults.headers.common["Authorization"] = token;

// 登录 获取token
export const login = params => axios.post("admin/admin/portal/login", params);

// 异常监控列表
export const getAbnormalMonitoring = params =>
  axios.get("/energy/api/security/warn/findAll", params);

// 能源供给板块

// 获取能量累计值
export const getAllEnergyNum = params =>
  axios.get("/energy/api/supply/accumulative", params);
