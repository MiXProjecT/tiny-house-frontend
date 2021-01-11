import { useState, useEffect, useCallback } from "react";
import server from "./server";

interface State<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}

type Refetch = {
  refetch: () => void;
};

const useQuery = <TData>(query: string): State<TData> & Refetch => {
  const [state, setState] = useState<State<TData>>({
    data: null,
    loading: false,
    error: false,
  });
  const fetch = useCallback(() => {
    const fetchApi = async () => {
      try {
        setState({ data: null, loading: true, error: false });
        const { data, errors } = await server.fetch<TData>({ query });

        if (errors && errors.length) {
          throw new Error(errors[0].message);
        }

        setState({ data, loading: false, error: false });
      } catch (error) {
        setState({ data: null, loading: false, error: true });
        console.error(error);
      }
    };
    fetchApi();
    // eslint-disable-next-line
  }, [query]);
  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state, refetch: fetch };
};

export default useQuery;
