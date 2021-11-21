import React from 'react';

export const useFetchApi = (url) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`/api/${url}`)
      .then((res) => res.json())
      .then((allData) => {
        setData(allData);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading };
};
