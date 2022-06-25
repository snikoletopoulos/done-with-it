import { create } from "apisauce";

const apiClient = create({
	baseURL: "http://192.168.135.240:9000/api",
});

export default apiClient;
