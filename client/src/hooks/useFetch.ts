import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export type ApiResponse = {
  status: Number;
  statusText: String;
  results: any;
  error: string;
  loading: Boolean;
};

//*later- define data type (not any)

export const useFetch = (url: string): ApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [results, setResults] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  // const [responseField, setResponseField] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      console.log(response);

      setStatus(response.status);
      setStatusText(response.statusText);
      setResults(response.data.results || []);

      // setResponseField(response.data.Response);
      setLoading(false);
      // const apiResponse = await fetch(url);
      // const json = await apiResponse.json();
    } catch (err) {
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { status, statusText, results, error, loading };
};
