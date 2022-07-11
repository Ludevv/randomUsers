import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

export const useFetch = (url: string) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false,
  });

  const cancelToken = axios.CancelToken.source();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url, {cancelToken: cancelToken.token});
      const data = await response.data;

      if (data) {
        setFetchedData({
          data: data.results ? data.results : data,
          isLoading: false,
          error: false,
        });
      }
    } catch (e) {
      setFetchedData({data: [], isLoading: false, error: true});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => cancelToken.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {data, isLoading, error} = fetchedData;

  return {data, isLoading, error};
};
