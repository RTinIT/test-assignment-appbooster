import { useState, useEffect } from "react";
import { fetchWithFallback } from "../utils";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;
    fetchWithFallback(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  return { data, loading, error };
};

export default useFetch;
