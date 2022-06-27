import { ApiResponse, create } from "apisauce";
import { AxiosRequestConfig } from "axios";

import cache from "../utilities/cache";

const apiClient = create({
	baseURL: "http://192.168.1.17:9000/api",
});

const axiosGet = apiClient.get;

apiClient.get = async <T, U = T>(
	url: string,
	params?: object,
	axiosConfig?: AxiosRequestConfig
): Promise<ApiResponse<T, U>> => {
	const response = await axiosGet<T, U>(url, params, axiosConfig);

	if (response.ok) {
		cache.store(url, response.data);
		return response;
	}

	const cachedResponse = await cache.get(url) as T;

	return cachedResponse
		? {
				ok: true,
				data: cachedResponse,
				problem: null,
				originalError: null,

				status: response.status,
				headers: response.headers,
				config: axiosConfig,
				duration: response.duration,
		  }
		: response;
};

export default apiClient;
