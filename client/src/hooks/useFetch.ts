import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export type ApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
  responseField: Boolean;
};

//*later- define data type (not any)

export const useFetch = (url: string): ApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [responseField, setResponseField] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response);
      console.log("response.data.data", response.data.Response);
      setStatus(response.status);
      setStatusText(response.statusText);
      setData(response.data.Search || []);
      setError(response.data.Error);
      setResponseField(response.data.Response);
      setLoading(false);
      // const apiResponse = await fetch(url);
      // const json = await apiResponse.json();
    } catch (error) {
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { status, statusText, data, error, loading, responseField };
};
