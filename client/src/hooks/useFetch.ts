import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export type ApiResponse = {
  responseData: any;
  status: Number;
  statusText: String;
  results: any;
  totalPages: number;
  error: string;
  loading: Boolean;
};

//*later- define data type (not any)

export const useFetch = (url: string): ApiResponse => {
  const [responseData, setResponseData] = useState<any>();
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [results, setResults] = useState<any>();
  const [totalPages, setTotalPages] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  // const [responseField, setResponseField] = useState<boolean>(false);
  //for getting a movie by id get request:

  const getData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);

      setResponseData(response.data);
      setTotalPages(response.data.total_pages);
      setStatus(response.status);
      setStatusText(response.statusText);
      setResults(response.data.results || []);

      // setResponseField(response.data.Response);
      setLoading(false);
      // const apiResponse = await fetch(url);
      // const json = await apiResponse.json();
    } catch (err) {
      setError("An error occurred");
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { responseData, status, statusText, results, error, loading, totalPages };
};
