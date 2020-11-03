import { get, post } from "./http";

// 登录 获取token
export const login = params => post("admin/admin/portal/login", params);

// 天气api
export const weather = params => get("api", params);
