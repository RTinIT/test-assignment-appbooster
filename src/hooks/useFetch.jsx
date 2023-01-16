import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  return [loading, error, data];
};

export default useFetch;
