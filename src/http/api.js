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
axios.defaults.timeout = 20000;
axios.defaults.headers.post["Content-Type"] = "application/json";
let token = sessionStorage.token;
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

// 获取能源种类数据 冷热热水
export const getSingleEnergyNum = params => {
  return axios({
    url: "/energy/api/supply/current/getEnergyCategory",
    method: "GET",
    params: params
  });
};

// 获取能源种类数据 电
export const getElectricNum = params =>
  axios.get("/energy/api/supply/current/getKindElectricity", params);

// 能源消费板块

// 获取能量累计值
export const getConsumerAllEnergyNum = params =>
  axios.get("/energy/api/consumer/accumulative", params);

// 获取能源种类数据 冷热水电
export const getConsumerEnergyNum = params => {
  return axios({
    url: "/energy/api/consumer/building/getEnergyType",
    method: "GET",
    params: params
  });
};

// 能源分析板块

// 获取节省金额
export const getSavings = params =>
  axios.get("/energy/api/optimization/total/price", params);

// 节能趋势
export const getEnergySavingTrend = params => {
  return axios({
    url: "/energy/api/consumer/date/allType/saveEnergy",
    method: "GET",
    params: params
  });
};

// 耗能对比
export const getEnergyComparison = params => {
  return axios({
    url: "/energy/api/consumer/date/allType/total",
    method: "GET",
    params: params
  });
};
