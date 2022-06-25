import { useState, useCallback } from "react";
import { ApiResponse } from "apisauce";

const useApi = <T, P>(apiFunc: (...args: P[]) => Promise<ApiResponse<T>>) => {
	const [data, setData] = useState<T>();
	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = useCallback(
		async (...args: [...P[]]) => {
			setLoading(true);
			const response = await apiFunc.apply(this, args);
			setLoading(false);

			if (!response.ok) {
				setHasError(true);
			} else if (response.data) {
				setData(response.data);
				setHasError(false);
			}

			return response;
		},
		[apiFunc]
	);

	return {
		request,
		data,
		hasError,
		loading,
	};
};

export default useApi;
