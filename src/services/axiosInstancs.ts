import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
    baseURL: "https://todobackenefone.onrender.com/api",
});
//request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//response interceptor

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = await AsyncStorage.getItem(
        "refreshToken"
      );

      const response = await axios.post(
        "https://todobackenefone.onrender.com/api/auth/newAccessToken",
        {
          refreshToken,
        }
      );

      const newToken = response.data.accessToken;

      await AsyncStorage.setItem(
        "accessToken",
        newToken
      );

      originalRequest.headers.Authorization =
        `Bearer ${newToken}`;

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;